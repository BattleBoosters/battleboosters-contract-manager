import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from '../utils/mongodb.js';
import axios from "axios";
import {RankReward, TournamentType} from "../interfaces/interfaces";
import Event from '../models/Event.js';
import mongoose from "mongoose";
import {Transaction} from "@solana/web3.js";

const createEvent = async (tournament_type: TournamentType, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;

    const {
        admin_account,
        program_pda,
    } = initAccounts(program);

    try {
        await connectToDatabase();

        // @ts-ignore
        const schedules = await axios.get(process.env.UFC_CALENDAR);
        const scheduleData = schedules.data;
        const currentDate = new Date();

        let updated_rank_rewards: RankReward[] = []
        rank_rewards.map(el => {
            updated_rank_rewards.push({
                startRank: new anchor.BN(el.startRank),
                endRank: el.endRank ? new anchor.BN(el.endRank): null,
                prizeAmount: el.prizeAmount,
                fighterAmount: el.fighterAmount,
                boosterAmount: el.boosterAmount,
                championsPassAmount: el.championsPassAmount
            })
        })

        // Find the first event with startDate greater than the current date
        // @ts-ignore
        const nextEvent = scheduleData.sections.find(section => {
            const eventStartDate = new Date(section.startDate);
            return eventStartDate > currentDate;
        });

        if (nextEvent) {
            // Check if an event with the same title and dateStart already exists
            const existingEvent = await Event.findOne({
                title: nextEvent.label,
                dateStart: Math.floor(new Date(nextEvent.startDate).getTime() / 1000)
            });

            if (existingEvent) {

                // Get the fightCards
                // @ts-ignore
                const competitions = await axios.get(nextEvent.event['$ref'])
                const competitionData = competitions.data;


                const fightGroupings = {};
                // @ts-ignore
                competitionData.competitions.forEach(fight => {
                    const segment = fight.cardSegment.description;

                    // Create a new array for the segment if it doesn't exist
                    // @ts-ignore
                    if (!fightGroupings[segment]) {
                        // @ts-ignore
                        fightGroupings[segment] = [];
                    }
                    // Add the fight to the appropriate group
                    // @ts-ignore
                    fightGroupings[segment].push(fight);

                    // Sort each segment individually after adding
                    // @ts-ignore
                    fightGroupings[segment].sort((a, b) => {
                        return a.matchNumber - b.matchNumber; // Ascending
                    });

                });

                // Get program data and initialize event nonce
                const programData = await program.account.programData.fetch(program_pda);
                let key = null
                if ( "mainCard" in tournament_type){
                    key = "Main Card"
                } else if ("prelims" in tournament_type ){
                    key = "Prelims"
                } else if ("earlyPrelims" in tournament_type){
                    key = "Early Prelims"
                }

                if (key) {

                    // Generate event PDA with incremented nonce
                    const [event_pda, event_bump] = anchor.web3.PublicKey.findProgramAddressSync(
                        [
                            Buffer.from('BattleBoosters'),
                            Buffer.from('event'),
                            Buffer.from(programData.eventNonce.toArray('le', 8))
                        ],
                        program.programId
                    );
                    let event = {
                        pubkey: event_pda.toString(),
                        type: key,
                        fightCards: [],
                        ranks: rank_rewards
                    }
                    // @ts-ignore
                    const eventExist = existingEvent.events.some(event => event.type == key);

                    if (!eventExist){

                        const instructions: any[] = []; // Array to store all instructions
                        const batchSize = 4; // Maximum instructions per transaction

                        // Create transaction and instruction
                        //let tx = new Transaction();
                        const accounts = {
                            creator: admin_account.publicKey,
                            program: program_pda,
                            event: event_pda,
                            systemProgram: anchor.web3.SystemProgram.programId,
                        };
                        const event_instruction = await program.methods
                            .createNewEvent(
                                new anchor.BN(existingEvent.dateStart),
                                new anchor.BN(existingEvent.dateEnd),
                                tournament_type,
                                updated_rank_rewards
                            )
                            .accounts(accounts).instruction();

                        instructions.push(event_instruction);

                        // tx.add(event_instruction)


                        let fightCardNonce = 0
                        // @ts-ignore
                        for (const competitions of fightGroupings[key]) {

                            const [fight_card_pda, fight_card_bump] =
                                anchor.web3.PublicKey.findProgramAddressSync(
                                    [
                                        Buffer.from('BattleBoosters'),
                                        Buffer.from('fightCard'),
                                        event_pda.toBuffer(),
                                        Buffer.from([fightCardNonce])
                                    ],
                                    program.programId
                                );

                            let fightCard = {
                                pubkey: fight_card_pda.toString(),
                                category: "",
                                fighterBlue: {name: "", id: "", shortName: ""},
                                fighterRed: {name: "", id: "", shortName: ""},
                                title: false
                            }

                            fightCard.category = competitions.type.text;
                            if (competitions.format.regulation.periods == 5) {
                                fightCard.title = true
                            } else if (competitions.format.regulation.periods == 3) {
                                fightCard.title = false
                            }

                            const fightCardData = {
                                eventPubkey: event_pda,
                                eventNonceTracker: new anchor.BN(0),
                                titleFight: fightCard.title,
                                fighterBlue: null,
                                fighterRed: null,
                                fightDuration: null,
                                result: null,
                                winner: null,
                                nonce: 0
                            };
                            const accounts = {
                                creator: admin_account.publicKey,
                                program: program_pda,
                                event: event_pda,
                                fightCard: fight_card_pda,
                                systemProgram: anchor.web3.SystemProgram.programId,
                            }
                            const fight_card_instruction = await program.methods
                                .createNewFightCard(fightCardData)
                                .accounts(accounts).instruction()
                            fightCardNonce++;

                            // @ts-ignore
                            const fighterPromises = competitions.competitors.map(async fighter => {

                                const fighterInfo = await axios.get(fighter.athlete["$ref"]);
                                const fighterInfoData = fighterInfo.data;

                                let shortName = fighterInfoData.shortName;
                                let name = fighterInfoData.fullName;
                                let id = fighterInfoData.id;
                                if (fighter.order === 1) {
                                    fightCard.fighterRed.name = name;
                                    fightCard.fighterRed.id = id;
                                    fightCard.fighterRed.shortName = shortName;
                                }else if (fighter.order === 2) {
                                    fightCard.fighterBlue.name = name;
                                    fightCard.fighterBlue.id = id;
                                    fightCard.fighterBlue.shortName = shortName;
                                }

                                return fighterInfoData;
                            });

                            await Promise.all(fighterPromises);
                            // @ts-ignore
                            event.fightCards.push(fightCard);

                            instructions.push(fight_card_instruction)
                            // tx.add(fight_card_instruction)
                        }

                        // Transformation into subdocuments
                        // @ts-ignore
                        existingEvent.events.push(event)

                        // Create the onChain TX
                        // @ts-ignore
                        //let tx_info = await program.provider.sendAndConfirm(tx, [admin_account]);

                        console.log(`${Math.ceil(instructions.length / batchSize)} tx(s) will be created on-chain to handle tx limit.`)
                        // Create batches of instructions
                        for (let i = 0; i < instructions.length; i += batchSize) {
                            const batch = instructions.slice(i, i + batchSize);
                            const tx = new Transaction();
                            tx.add(...batch);

                            try {
                                // Send and confirm the transaction
                                // @ts-ignore
                                const tx_info = await program.provider.sendAndConfirm(tx, [admin_account]);
                                console.log("Transaction confirmed:", tx_info);
                            } catch (e) {
                                console.error("Error sending transaction:", e);
                                // Handle transaction errors (e.g., retry, rollback)
                            }
                        }

                        // Save to DB
                        await existingEvent.save()

                        console.info("Event successfully created")
                    }else {
                        console.error("The event already exist")
                    }
                }else{
                    console.error("No key event provided (Main Card, Prelims, Early Prelims)")
                }

            } else {
                console.error("Competition does not exist in DB please create one first")
            }
        }else {
            console.log("No event found")
        }
    }catch (e){
        console.log(e)
    }

}

const updateEvent = async (eventKey: string, newStartDate: number | undefined, newEndDate: number | undefined, tournament_type: TournamentType | undefined, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const { admin_account, program_pda } = initAccounts(program);

    try {
        await connectToDatabase();

        let updated_rank_rewards: RankReward[] = []
        rank_rewards.map(el => {
            updated_rank_rewards.push({
                startRank: new anchor.BN(el.startRank),
                endRank: el.endRank ? new anchor.BN(el.endRank): null,
                prizeAmount: el.prizeAmount,
                fighterAmount: el.fighterAmount,
                boosterAmount: el.boosterAmount,
                championsPassAmount: el.championsPassAmount
            })
        })

        // Find the event in the database
        const existingEvent = await Event.findOne({
            events: { $elemMatch: { pubkey: eventKey } }
        });

        if (existingEvent) {
            // Find the specific event object within existingEvent.events
            // @ts-ignore
            const targetEventObject = existingEvent.events.find(event => event.pubkey === eventKey);

            if (targetEventObject) {
                // // Update the start date on-chain (assuming you have a function for this)
                // await updateStartDateOnChain(
                //     program,
                //     wallet,
                //     targetEventObject.pubkey,
                //     new BN(newStartDate.getTime() / 1000),
                //     new BN(newEndDate.getTime() / 1000)
                // );
                let event_account_to_pubkey = new anchor.web3.PublicKey(eventKey);
                const event_account_data = await program.account.eventData.fetch(event_account_to_pubkey)
                const accounts = {
                    creator: admin_account.publicKey,
                    program: program_pda,
                    event: event_account_to_pubkey,
                    systemProgram: anchor.web3.SystemProgram.programId,
                }

                const tx = await program.methods
                    .updateEvent(
                        newStartDate ? new anchor.BN(newStartDate) : event_account_data.startDate,
                        newEndDate ? new anchor.BN(newEndDate): event_account_data.endDate,
                        tournament_type? tournament_type : event_account_data.tournamentType,
                        updated_rank_rewards.length > 0 ? updated_rank_rewards : event_account_data.rankRewards
                    )
                    .accounts(accounts)
                    .signers([admin_account])
                    .rpc();

                console.log("transaction: ", tx)
                // Update the start date in the database
                targetEventObject.dateStart = newStartDate;
                targetEventObject.dateEnd = newEndDate;

                if (rank_rewards.length > 0){
                    targetEventObject.ranks = rank_rewards;
                }

                if (tournament_type){
                    targetEventObject.type = tournament_type;
                }

                await existingEvent.save();

                console.log("Event updated successfully!");
            } else {
                console.error("Target event object not found within existingEvent");
            }
        } else {
            console.error("Event not found in the database");
        }
    } catch (e) {
        console.error("Error updating event: ", e);
    }
}

export { createEvent, updateEvent}