import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import {program} from "commander"
import { start } from "./utils/start.js"
import { updateEvent } from "./utils/event.js"
import fs from "fs";
import {TournamentType, RankReward} from "./interfaces/interfaces";

program
    .command('start')
    .description('Start the program')
    .action(() => {

        // Your existing start() function logic here
        start().then(() => {
            console.log('Program started successfully.');
        }).catch(error => {
            console.error('Error starting program:', error);
        });
    });

program
    .command('create-event')
    .description('Create a new event')
    .argument('<event_id>', 'ID of the event')
    .argument('<start_time>', 'Start time of the event')
    .argument('<end_time>', 'End time of the event')
    .action((eventId: any, startTime: any, endTime: any) => {
        // ... Implement your create-event logic here
        console.log('Creating event with ID:', eventId);
        // ... Use startTime and endTime as needed
    });


program
    .command('update-event')
    .description('Update an event')
    .argument('<event_account>', 'account of the event')
    .argument('<start_time>', 'Start time of the event')
    .argument('<end_time>', 'End time of the event')
    .option('--main-card', 'Set tournament type to main card')
    .option('--prelims', 'Set tournament type to prelims')
    .option('--early-prelims', 'Set tournament type to early prelims')
    .option('--rank-config <path>', 'Path to rank reward configuration file')
    .action(async (eventAccount, startTime, endTime, options) => {
        // ... Implement update-event logic
        let tournamentType: TournamentType =  { prelims: {} }
        if (options.prelims) {
            tournamentType = { prelims: {} };
        } else if (options.mainCard) {
            tournamentType = { mainCard: {} };
        }else if (options.earlyPrelims){
            tournamentType = { earlyPrelims: {} };
        }else {
            // Handle the case where no option is selected or provide a default
            console.error('Error: Please specify a tournament type using --main-card, --prelims, or --early-prelims');
            return; // Exit the action if no type is provided
        }


        let rankRewards: RankReward[] = [];
        if (options.rankConfig) {
            try {
                const configFile = fs.readFileSync(options.rankConfig, 'utf-8'); // Specify encoding
                const parsedData = JSON.parse(configFile);

                // Validate if parsedData is an array of RankReward objects
                if (Array.isArray(parsedData) && parsedData.every(item => isRankReward(item))) {
                    rankRewards = parsedData;
                } else {
                    throw new Error('Invalid rank configuration file: Data does not conform to RankReward structure.');
                }
            } catch (error) {
                console.error('Error reading or parsing rank configuration file:', error);
                // Handle error appropriately (e.g., exit process or prompt for a valid file)
            }
        }

        // Type guard function to check if an object is a RankReward
        function isRankReward(obj: any): obj is RankReward {
            return (
                typeof obj.startRank === 'number' &&
                (typeof obj.endRank === 'number' || obj.endRank === null) &&
                typeof obj.prizeAmount === 'number' &&
                typeof obj.fighterAmount === 'number' &&
                typeof obj.boosterAmount === 'number' &&
                typeof obj.championsPassAmount === 'number'
            );
        }



        await updateEvent(
            eventAccount,
            startTime,
            endTime,
            tournamentType,
            rankRewards
        );
        console.log('Event updated:', eventAccount);
    });


program.parse(process.argv);
