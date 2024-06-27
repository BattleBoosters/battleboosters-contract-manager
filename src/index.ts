require('dotenv').config();
import {program} from "commander"
import { start } from "./commands/start.js"
import {createCompetition, updateCompetition} from "./commands/competition.js"
import fs from "fs";
import {
    TournamentType,
    RankReward,
    FighterRarityType,
    BoosterRarityType,
    FighterTypeKeys, FighterTypeMapping
} from "./interfaces/interfaces";
import {createEvent, updateEvent} from "./commands/event.js";
import {insertResult} from "./commands/fightCard.js";
import {pointsCalculator} from "./commands/pointsCalculator.js";
import {ranksCalculator} from "./commands/ranksCalculator.js";
import {forceUpdateProgram, initializeProgram, initializeRarity} from "./commands/initialize.js";
import {createFighterBase} from "./commands/fighterBase.js";
import path from 'path';

const fighterTypeMapping: FighterTypeMapping = {
    0: 'Boxing',
    1: 'MuayThai',
    2: 'Taekwondo',
    3: 'Karate',
    4: 'Judo',
    5: 'Wrestling',
    6: 'BrazilianJiuJitsu',
    7: 'Sambo',
};

const fighterTypes = {
    Boxing: { boxing: {} },
    MuayThai: { muayThai: {} },
    Taekwondo: { taekwondo: {} },
    Karate: { karate: {} },
    Judo: { judo: {} },
    Wrestling: { wrestling: {} },
    BrazilianJiuJitsu: { brazilianJiuJitsu: {} },
    Sambo: { sambo: {} },
};

program
    .command('initialize-program')
    .argument('<fighter_price>', "Fighter price")
    .argument('<booster_price>', "Booster price")
    .option('--env <env>', 'Set the environment ({dev:{}} or {prod:{}})', '{"prod":{}}')
    .action(async (fighterPrice, boosterPrice, options) =>{
        const { env } = options;

        const envObject = JSON.parse(env);
        if (!envObject.dev && !envObject.prod) {
            throw new Error();
        }

        await initializeProgram(fighterPrice, boosterPrice, envObject)
})

program
    .command('initialize-rarity')
    .argument('<probs_tier_1>', "Probability tier 1 from common to legendary [10,20,30,20,20]")
    .argument('<probs_tier_2>', "Probability tier 2 from common to legendary [10,20,30,20,20]")
    .argument('<probs_tier_3>', "Probability tier 3 from common to legendary [10,20,30,20,20]")
    .option('--fighter-rarity <path>', 'Path to fighter rarity', '../src/fighters-rarity.json')
    .option('--booster-shield-rarity <path>', 'Path to booster shield rarity', '../src/booster-shield-rarity.json')
    .option('--booster-points-rarity <path>', 'Path to booster points rarity', '../src/booster-points-rarity.json')
    .action(async (probsTier1, probsTier2, probsTier3, options) =>{

        const readRarityFile = (path: string): any[] => {
            try {
                const configFile = fs.readFileSync(path, 'utf-8'); // Specify encoding
                return JSON.parse(configFile);
            } catch (error) {
                console.error(`Error reading or parsing file at ${path}:`, error);
                return [];
            }
        };
        const fighter_rarity: FighterRarityType[] = options.fighterRarity ? readRarityFile(options.fighterRarity) : [];
        const booster_shield_rarity: BoosterRarityType[] = options.boosterShieldRarity ? readRarityFile(options.boosterShieldRarity) : [];
        const booster_points_rarity: BoosterRarityType[] = options.boosterPointsRarity ? readRarityFile(options.boosterPointsRarity) : [];
        
        const isSumEqualTo100 = (arr: number[]): boolean => arr.reduce((acc, curr) => acc + curr, 0) === 100;
        const probsTier1Object = JSON.parse(probsTier1);
        const probsTier2Object = JSON.parse(probsTier2);
        const probsTier3Object = JSON.parse(probsTier3);


        if (!isSumEqualTo100(probsTier1Object)){
            throw new Error('Probability tier 1 does not sum 100%');
        }
        if (!isSumEqualTo100(probsTier2Object)){
            throw new Error('Probability tier 2 does not sum 100%');
        }
        if (!isSumEqualTo100(probsTier3Object)){
            throw new Error('Probability tier 3 does not sum 100%');
        }

        await initializeRarity(probsTier1Object, probsTier2Object, probsTier3Object, fighter_rarity, booster_shield_rarity, booster_points_rarity)
    })

program
    .command('create-fighter')
    .argument('<fighter_type>', 'Type of fighter (e.g., Boxing, MuayThai, Taekwondo, Karate, Judo, Wrestling, BrazilianJiuJitsu, Sambo)')
    .action(async (fighterType) => {
        const fighterTypeKey = fighterType as FighterTypeKeys;

        //@ts-ignore
        const fighterIndex = Object.keys(fighterTypeMapping).find(key => fighterTypeMapping[key] === fighterType);

        if (fighterIndex === undefined) {
            console.error('Invalid fighter type provided.');
            return;
        }
        // Construct the path to the metrics JSON file
        const metricsFilePath = `../src/fighter_base_metrics/${fighterType.toLowerCase()}-metrics.json`;

        // Read and parse the metrics JSON file
        let metrics;
        try {
            const metricsData = fs.readFileSync(metricsFilePath, 'utf-8');
            metrics = JSON.parse(metricsData);
        } catch (error) {
            console.error(`Error reading or parsing metrics file for ${fighterType}:`, error);
            return;
        }

        await createFighterBase(parseInt(fighterIndex), metrics, fighterTypes[fighterTypeKey]);
    });


program
    .command('create-competition').action(async () =>{
    await createCompetition()
})

program
    .command('force-update-program').action(async () =>{
    await forceUpdateProgram()
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

program
    .command('determine-points')
    .description('Determine players points')
    .argument('<event_account>', "Event account to determine points")
    .action(async (event_account) =>{
        await pointsCalculator(event_account)
    })


program
    .command('calculate-ranks')
    .description('Insert and update rank result on chain')
    .argument('<event_account>', 'account of the event')
    .action(async (event_account) =>{
        await ranksCalculator(event_account)
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
