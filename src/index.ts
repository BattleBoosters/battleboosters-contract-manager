import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import {program} from "commander"
import { start } from "./utils/start.js"

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



program.parse(process.argv);



