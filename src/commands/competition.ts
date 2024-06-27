import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import {RankReward, TournamentType} from "../interfaces/interfaces";
import connectToDatabase from '../utils/mongodb.js';
import axios from "axios";
import Event from '../models/Event.js';
import {PublicKey} from "@solana/web3.js";

const createCompetition = async () => {

    const wallet = loadWallet();
    const programId = new PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
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

        // Find the first event with startDate greater than the current date
        // @ts-ignore
        const nextEvent = scheduleData.sections.find(section => {
            const eventStartDate = new Date(section.startDate);
            return eventStartDate > currentDate;
        });

        console.log(nextEvent)
        if (nextEvent) {

            // Check if an event with the same title and dateStart already exists
            const existingEvent = await Event.findOne({
                title: nextEvent.label,
                dateStart: Math.floor(new Date(nextEvent.startDate).getTime() / 1000)
            });
            // Get the count of existing events (equivalent to the current maximum gameWeek)
            const eventCount = await Event.countDocuments();

            if (!existingEvent){
                // Create a new Event document
                const newEvent = new Event({
                    gameWeek: eventCount + 1,
                    title: nextEvent.label,
                    dateStart: Math.floor(new Date(nextEvent.startDate).getTime() / 1000),
                    dateEnd: Math.floor(new Date(nextEvent.endDate).getTime() / 1000),
                    image: "",
                    events: []
                });

                // Save the document to the database
                await newEvent.save();
                console.log('Event saved to database:', newEvent.title);

            }else {
                console.log("The event already exist")
            }


            // const program_data = await program.account.programData.fetch(
            //     program_pda
            // );
            // const [event_account, event_account_bump] =
            //     anchor.web3.PublicKey.findProgramAddressSync(
            //         [
            //             Buffer.from('BattleBoosters'),
            //             Buffer.from('event'),
            //             new BN(program_data.eventNonce).toBuffer('le', 8),
            //         ],
            //         program.programId
            //     );
            //
            // let updated_rank_rewards: RankReward[] = []
            // rank_rewards.map(el => {
            //     updated_rank_rewards.push({
            //         startRank: new BN(el.startRank),
            //         endRank: el.endRank ? new BN(el.endRank): null,
            //         prizeAmount: el.prizeAmount,
            //         fighterAmount: el.fighterAmount,
            //         boosterAmount: el.boosterAmount,
            //         championsPassAmount: el.championsPassAmount
            //     })
            // })
            // const tx = await program.methods
            //     .createNewEvent(
            //         new BN(time_start),
            //         new BN(time_end),
            //         tournament_type,
            //         updated_rank_rewards
            //     )
            //     .accounts({
            //         creator: wallet.publicKey,
            //         program: program_pda,
            //         event: event_account,
            //         systemProgram: anchor.web3.SystemProgram.programId,
            //     })
            //     .signers([])
            //     .rpc();


            //console.log("Event created: ", tx)

        } else {
            console.log("No event found")
        }
    }catch (e){
        console.log(e)
    }

}

const updateCompetition = async (event_account: string, time_start: number, time_end: number, tournament_type: TournamentType, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        admin_account,
        program_pda,
    } = initAccounts(program);

    try {
        await connectToDatabase();
        let event_account_to_pubkey = new anchor.web3.PublicKey(event_account)

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
        const accounts = {
            creator: admin_account.publicKey,
            program: program_pda,
            event: event_account_to_pubkey,
            systemProgram: anchor.web3.SystemProgram.programId,
        }
        const tx = await program.methods
            .updateEvent(
                new anchor.BN(time_start),
                new anchor.BN(time_end),
                tournament_type,
                updated_rank_rewards
            )
            .accounts(accounts)
            .signers([admin_account])
            .rpc();

        console.log("Event updated: ", tx)
    }catch (e){
        console.log(e)
    }

}

export { createCompetition, updateCompetition }