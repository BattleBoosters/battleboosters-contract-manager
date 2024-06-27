import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import {RankReward, TournamentType} from "../interfaces/interfaces";
import connectToDatabase from '../utils/mongodb.js';
import axios from "axios";
import Event from '../models/Event.js';

const determineRankingPoints = async (event_key: string) => {

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


        } else {
            console.log("No event found")
        }
    }catch (e){
        console.log(e)
    }

}

export { determineRankingPoints }