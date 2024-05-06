import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import {program} from "commander"
import { start } from "./commands/start.js"
import {createCompetition, updateCompetition} from "./commands/competition.js"
import fs from "fs";
import {TournamentType, RankReward} from "./interfaces/interfaces";
import {createEvent, updateEvent} from "./commands/event.js";
import {insertResult} from "./commands/fightCard.js";

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
    .command('create-competition').action(async () =>{
    await createCompetition()
})


program
    .command('create-event')
    .description('Create an event')
    .option('--main-card', 'Set tournament type to main card', false)
    .option('--prelims', 'Set tournament type to prelims', false)
    .option('--early-prelims', 'Set tournament type to early prelims', false)
    .option('--rank-config <path>', 'Path to rank reward configuration file')
    .action(async (options) => {
        // ... Implement update-event logic
        let tournamentType: TournamentType =  { prelims: {} }
        if (options.mainCard) {
            tournamentType = { mainCard: {} }
        } else if (options.prelims) {
            tournamentType = { prelims: {} };
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

        if (rankRewards.length == 0){
            console.log("Error rankRewards need to be provided")
            return
        }
        await createEvent(
            tournamentType,
            rankRewards
        );
    });


program.command("update-event")
    .description("Update an event")
    .argument('<event_account>', "Event account to update")
    .option('<new_start_date>', "New start date")
    .option('<new_end_date>', "New end date")
    .option('--main-card', 'Set tournament type to main card', false)
    .option('--prelims', 'Set tournament type to prelims', false)
    .option('--early-prelims', 'Set tournament type to early prelims', false)
    .option('--rank-config <path>', 'Path to rank reward configuration file')
    .action(async(event_account, options) => {
        const new_start_date = options.new_start_date;
        const new_end_date = options.new_end_date;

        let tournamentType: TournamentType | undefined =  undefined
        if (options.mainCard) {
            tournamentType = { mainCard: {} }
        } else if (options.prelims) {
            tournamentType = { prelims: {} };
        }else if (options.earlyPrelims) {
            tournamentType = {earlyPrelims: {}};
        }else {
            tournamentType = undefined
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



        await updateEvent(event_account, new_start_date, new_end_date, tournamentType, rankRewards)
})


program
    .command('insert-result')
    .description('Insert fight card result')
    .argument('<event_account>', 'account of the event')
    .action(async (event_account) =>{
        await insertResult(event_account)
})

// program
//     .command('update-event')
//     .description('Update an event')
//     .argument('<event_account>', 'account of the event')
//     .argument('<start_time>', 'Start time of the event')
//     .argument('<end_time>', 'End time of the event')
//     .option('--main-card', 'Set tournament type to main card')
//     .option('--prelims', 'Set tournament type to prelims')
//     .option('--early-prelims', 'Set tournament type to early prelims')
//     .option('--rank-config <path>', 'Path to rank reward configuration file')
//     .action(async (eventAccount, startTime, endTime, options) => {
//         // ... Implement update-event logic
//         let tournamentType: TournamentType =  { prelims: {} }
//         if (options.prelims) {
//             tournamentType = { prelims: {} };
//         } else if (options.mainCard) {
//             tournamentType = { mainCard: {} };
//         }else if (options.earlyPrelims){
//             tournamentType = { earlyPrelims: {} };
//         }else {
//             // Handle the case where no option is selected or provide a default
//             console.error('Error: Please specify a tournament type using --main-card, --prelims, or --early-prelims');
//             return; // Exit the action if no type is provided
//         }
//
//
//         let rankRewards: RankReward[] = [];
//         if (options.rankConfig) {
//             try {
//                 const configFile = fs.readFileSync(options.rankConfig, 'utf-8'); // Specify encoding
//                 const parsedData = JSON.parse(configFile);
//
//                 // Validate if parsedData is an array of RankReward objects
//                 if (Array.isArray(parsedData) && parsedData.every(item => isRankReward(item))) {
//                     rankRewards = parsedData;
//                 } else {
//                     throw new Error('Invalid rank configuration file: Data does not conform to RankReward structure.');
//                 }
//             } catch (error) {
//                 console.error('Error reading or parsing rank configuration file:', error);
//                 // Handle error appropriately (e.g., exit process or prompt for a valid file)
//             }
//         }
//
//         // Type guard function to check if an object is a RankReward
//         function isRankReward(obj: any): obj is RankReward {
//             return (
//                 typeof obj.startRank === 'number' &&
//                 (typeof obj.endRank === 'number' || obj.endRank === null) &&
//                 typeof obj.prizeAmount === 'number' &&
//                 typeof obj.fighterAmount === 'number' &&
//                 typeof obj.boosterAmount === 'number' &&
//                 typeof obj.championsPassAmount === 'number'
//             );
//         }
//
//         await updateCompetition(
//             eventAccount,
//             startTime,
//             endTime,
//             tournamentType,
//             rankRewards
//         );
//
//     });



program.parse(process.argv);
