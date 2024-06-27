import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import {RankReward, TournamentType, Stat, FightStatus} from "../interfaces/interfaces";
import connectToDatabase from '../utils/mongodb.js';
import axios from "axios";

import Event from '../models/Event.js';
import {Transaction} from "@solana/web3.js";

const insertResult = async (event_key: string) => {

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

        // const targetFightCardPubkey = "your_fight_card_pubkey";
        //
        // const existingEvent = await Event.findOne({
        //     events: {
        //         $elemMatch: {
        //             fightCards: {
        //                 $elemMatch: { pubkey: targetFightCardPubkey }
        //             }
        //         }
        //     }
        // });


        // Check if an event with the same title and dateStart already exists
        const existingEvent = await Event.findOne({
            events: { $elemMatch: { pubkey: event_key } }
        });
        // Find the event with startDate and label equal to the DB
        // @ts-ignore
        const targetEvent = scheduleData.sections.find(section => {
            return section.label == existingEvent.title &&
                Math.floor(new Date(section.startDate).getTime() / 1000) == existingEvent.dateStart;
        });

        // Find the specific event object within existingEvent.events
        // @ts-ignore
        const targetEventObject = existingEvent.events.find(event => event.pubkey === event_key);

        if (existingEvent && targetEvent){
            const instructions: any[] = []; // Array to store all instructions
            const batchSize = 3; // Maximum instructions per transaction
            let event_account = new anchor.web3.PublicKey(event_key)
            let fight_card_account: anchor.web3.PublicKey | undefined = undefined

            //@ts-ignore
            const fightCardIDs = new Set(targetEventObject.fightCards.map(fc => fc.id));
            const matchedFightCards = new Set();

            const competitions = await axios.get(targetEvent.event['$ref'])
            const competitionData = competitions.data;

            //@ts-ignore
            await Promise.all(competitionData.competitions.map(async fight => {
                //@ts-ignore
                fight.competitors.forEach(comp => {
                    //@ts-ignore
                    const fightCard = existingEvent.events.flatMap(event => event.fightCards).find(fc =>
                        (fc.fighterBlue.id === comp.id && comp.order === 2) ||
                        (fc.fighterRed.id === comp.id && comp.order === 1)
                    );

                    if (fightCard) {
                        matchedFightCards.add(fightCard.id);
                        // Additional processing for matched fight cards...
                    }
                });
            }));

            // Identify and update unmatched fight cards
            //@ts-ignore
            let updatePromises = targetEventObject.fightCards.map(fightCard => {
                if (!matchedFightCards.has(fightCard.id)) {
                    console.log(`Fight card ${fightCard.id} not found in API data, marking as no contest.`);
                    fightCard.result = 'no contest';  // Update the fight card status locally

                    // Prepare the data to update fight card on chain
                    let fightCardData = {
                        eventPubkey: event_account,
                        eventNonceTracker: new anchor.BN(0),
                        titleFight: false,
                        fighterBlue: null,
                        fighterRed: null,
                        fightDuration: null,
                        result: { noContest: {} },
                        winner: null,
                        nonce: 0
                    };

                    const accounts = {
                        creator: admin_account.publicKey,
                        program: program_pda,
                        event: event_account,
                        fightCard: new anchor.web3.PublicKey(fightCard.pubkey), // Make sure this is defined or fetched correctly
                        systemProgram: anchor.web3.SystemProgram.programId,
                    }
                    // Create the instruction to update the fight card
                    return program.methods
                        .updateFightCard(fightCardData)
                        .accounts(accounts)
                        .instruction()
                        .then(instruction => {
                            instructions.push(instruction);  // Add the instruction to the batch
                        });
                } else {
                    return Promise.resolve();  // If the fight card is matched, resolve immediately
                }
            });

            // Wait for all fight card updates to complete
            await Promise.all(updatePromises).then(() => {
                console.log("All unmatched fight cards have been updated.");
                // Additional steps if needed
            });


            // Filter competitions based on fighter IDs and order
            // @ts-ignore
            const filteredCompetitions = competitionData.competitions.filter(fight => {
                const fighter1Id = fight.competitors[0].id;
                const fighter2Id = fight.competitors[1].id;
                const fighter1Order = fight.competitors[0].order;
                const fighter2Order = fight.competitors[1].order;
                // @ts-ignore
                return targetEventObject.fightCards.some(fightCard =>
                    (fightCard.fighterBlue.id === fighter1Id && fighter1Order === 2) ||
                    (fightCard.fighterRed.id === fighter1Id && fighter1Order === 1) ||
                    (fightCard.fighterBlue.id === fighter2Id && fighter2Order === 2) ||
                    (fightCard.fighterRed.id === fighter2Id && fighter2Order === 1)
                );
            });

            //let fightCardToPubkey = new anchor.web3.PublicKey("82uxXxVv6oBWjJnbdJQXvTXr29bY5MdQuyHxwhmSGnvd");
            // @ts-ignore
            //let fightCardToData =await program.account.fightCardData.fetch(fightCardToPubkey);



            // @ts-ignore
            await Promise.all(filteredCompetitions.map(async fight => {


                let fightCardData = {
                    eventPubkey: event_account,
                    eventNonceTracker: new anchor.BN(0),
                    titleFight: fight.format.regulation.periods == 5 ? true : false,
                    fighterBlue: {},
                    fighterRed: {},
                    fightDuration: new anchor.BN(0),
                    result: {},
                    winner: {},
                    nonce: 0
                };

                const status = await axios.get(fight.status['$ref']);
                const statusData: FightStatus = status.data

                if (!statusData.type.completed){
                    console.error("Error the fight is not completed")
                    return
                }

                fightCardData.fightDuration = new anchor.BN((statusData.period * 300) - (300 - statusData.clock))

                let fightResult = "no contest"
                if(statusData.result.name.includes("decision")) {
                    fightCardData.result = { decision: {}}
                    fightResult = "decision"
                } else if(statusData.result.name.includes("ko")) {
                    fightCardData.result = { koTko: {}}
                    fightResult = "koTko"
                }else if(statusData.result.name.includes("tko")) {
                    fightCardData.result = { koTko: {}}
                    fightResult = "koTko"
                } else if(statusData.result.name.includes("submission")) {
                    fightCardData.result = { submission: {}}
                    fightResult = "submission"
                } else if(statusData.result.name.includes("dq")) {
                    fightCardData.result = { disqualification: {}}
                    fightResult = "disqualification"
                } else if(statusData.result.name.includes("nocontest")) {
                    fightCardData.result = { noContest: {}}
                    fightResult = "no contest"
                } else if(statusData.result.name.includes("draw")) {
                    fightCardData.result = { draw: {}}
                    fightResult = "draw"
                } else{
                    console.error("Error result of the fight not found")
                    return
                }

                // @ts-ignore
                await Promise.all(fight.competitors.map(async fighter => {

                    const athlete =  await axios.get(fighter.athlete['$ref'])
                    const athleteData = athlete.data
                    const statistics = await axios.get(fighter.statistics['$ref'])
                    const statisticsData = statistics.data; // Assuming statistics response is similar


                    // @ts-ignore
                    const matchingFightCard = existingEvent.events.find(event =>
                            //@ts-ignore
                            event.fightCards.some(fightCard =>
                                fightCard.fighterBlue.id === athleteData.id ||
                                fightCard.fighterRed.id === athleteData.id
                            )
                        //@ts-ignore
                    )?.fightCards.find(fightCard =>
                        fightCard.fighterBlue.id === athleteData.id ||
                        fightCard.fighterRed.id === athleteData.id
                    );

                    if (matchingFightCard) {

                        // ... (Fetch athlete and statistics data)
                        let stats: Stat[] = statisticsData.splits.categories[0].stats;

                        // Extract stats from statisticsData
                        const fighterStats = {
                            takedownsAttempted: stats.find(stat => stat.name === "takedownsAttempted")?.value,
                            takedownsLanded: stats.find(stat => stat.name === "takedownsLanded")?.value,
                            takedownsSlams: stats.find(stat => stat.name === "takedownsSlams")?.value,
                            sigClinchHeadStrikesAttempted: stats.find(stat => stat.name === "sigClinchHeadStrikesAttempted")?.value,
                            sigClinchHeadStrikesLanded: stats.find(stat => stat.name === "sigClinchHeadStrikesLanded")?.value,
                            sigClinchBodyStrikesAttempted: stats.find(stat => stat.name === "sigClinchBodyStrikesAttempted")?.value,
                            sigClinchBodyStrikesLanded: stats.find(stat => stat.name === "sigClinchBodyStrikesLanded")?.value,
                            sigClinchLegStrikesAttempted: stats.find(stat => stat.name === "sigClinchLegStrikesAttempted")?.value,
                            sigClinchLegStrikesLanded: stats.find(stat => stat.name === "sigClinchLegStrikesLanded")?.value,
                            sigGroundHeadStrikesAttempted: stats.find(stat => stat.name === "sigGroundHeadStrikesAttempted")?.value,
                            sigGroundHeadStrikesLanded: stats.find(stat => stat.name === "sigGroundHeadStrikesLanded")?.value,
                            sigGroundBodyStrikesAttempted: stats.find(stat => stat.name === "sigGroundBodyStrikesAttempted")?.value,
                            sigGroundBodyStrikesLanded: stats.find(stat => stat.name === "sigGroundBodyStrikesLanded")?.value,
                            sigGroundLegStrikesAttempted: stats.find(stat => stat.name === "sigGroundLegStrikesAttempted")?.value,
                            sigGroundLegStrikesLanded: stats.find(stat => stat.name === "sigGroundLegStrikesLanded")?.value,
                            strikingStrength: {
                                knockDowns: stats.find(stat => stat.name === "knockDowns")?.value,
                                sigDistanceHeadStrikesAttempted: stats.find(stat => stat.name === "sigDistanceHeadStrikesAttempted")?.value,
                                sigDistanceHeadStrikesLanded: stats.find(stat => stat.name === "sigDistanceHeadStrikesLanded")?.value,
                                sigDistanceBodyStrikesAttempted: stats.find(stat => stat.name === "sigDistanceBodyStrikesAttempted")?.value,
                                sigDistanceBodyStrikesLanded: stats.find(stat => stat.name === "sigDistanceBodyStrikesLanded")?.value,
                                sigDistanceLegStrikesAttempted: stats.find(stat => stat.name === "sigDistanceLegStrikesAttempted")?.value,
                                sigDistanceLegStrikesLanded: stats.find(stat => stat.name === "sigDistanceLegStrikesLanded")?.value,
                            },
                            grapplingStrength: {
                                submissions: stats.find(stat => stat.name === "submissions")?.value,
                                secondsInControl: stats.find(stat => stat.name === "timeInControl")?.value,
                                advanceToHalfGuard: stats.find(stat => stat.name === "advanceToHalfGuard")?.value,
                                advanceToSide: stats.find(stat => stat.name === "advanceToSide")?.value,
                                advanceToMount: stats.find(stat => stat.name === "advanceToMount")?.value,
                                advanceToBack: stats.find(stat => stat.name === "advanceToBack")?.value,
                            }
                        };


                        if (fighter.order === 1) {
                            matchingFightCard.fighterRed.stats = {
                                ...fighterStats
                            };
                            matchingFightCard.fighterRed.winner = fighter.winner;
                            if (fighter.winner) {
                                fightCardData.winner = {fighterRed:{}}
                            }
                            fightCardData.fighterRed = {
                                ...fighterStats
                            }

                        } else if (fighter.order === 2) {
                            matchingFightCard.fighterBlue.stats = {
                                ...fighterStats
                            };
                            matchingFightCard.fighterBlue.winner = fighter.winner;
                            if (fighter.winner) {
                                fightCardData.winner = {fighterBlue:{}}
                            }
                            fightCardData.fighterBlue = {
                                ...fighterStats
                            }

                        }
                        matchingFightCard.result = fightResult
                        fight_card_account = new anchor.web3.PublicKey(matchingFightCard.pubkey)

                    } else {
                        console.error("Fight card not found for athlete:", athleteData.shortName);
                    }
                }))

                const accounts = {
                    creator: admin_account.publicKey,
                    program: program_pda,
                    event: event_account,
                    fightCard: fight_card_account,
                    systemProgram: anchor.web3.SystemProgram.programId,
                }



                const update_fight_card_instruction = await program.methods
                    // @ts-ignore
                    .updateFightCard(fightCardData)
                    .accounts(accounts).instruction();

                instructions.push(update_fight_card_instruction);

            }))

            // Save the entire existingEvent document
            await existingEvent.save();
            console.log("FightCard updated on database")
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
            console.log("Operation completed")

        }else {
            console.error(`Event key ${event_key} does not exist or are not found on the API`)
        }

    }catch (e){
        console.log(e)
    }

}

export { insertResult }