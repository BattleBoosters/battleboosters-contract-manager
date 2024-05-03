import {getProgram, initAccounts, loadWallet} from "./connection.js";
import anchor, {BN} from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from './mongodb.js';
import axios from "axios";
import {TournamentType} from "../interfaces/interfaces";
import Event from '../models/Event.js';
import mongoose from "mongoose";

const createFightCard = async (event_account: string) => {
    // const wallet = loadWallet();
    // const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    // const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    // const {
    //     admin_account,
    //     program_pda,
    // } = initAccounts(program);

    try {
        await connectToDatabase();
        // let event_account_to_pubkey = new anchor.web3.PublicKey(event_account);
        // let eventAccountData = await program.account.eventData.fetch(event_account_to_pubkey)

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

                // const key = "mainCard" in eventAccountData.tournamentType ? "Main Card" :
                //     "prelims" in eventAccountData.tournamentType ? "Prelims" :
                //         "earlyPrelims" in eventAccountData.tournamentType ? "Early Prelims" : null;

                let key = "Main Card"

                let event = {
                    pubkey: event_account,
                    type: key,
                    fightCards: []
                }
                // @ts-ignore
                const eventExist = existingEvent.events.some(event => event.pubkey == event_account);

                if (key && !eventExist) {
                    // @ts-ignore
                    await Promise.all(fightGroupings[key].map(async competitions => {
                        let fightCard = {
                            pubkey: "fight_card_pda",
                            category: "",
                            fighterBlue: {name: ""},
                            fighterRed: {name: ""},
                            title: false
                        }

                        fightCard.category = competitions.type.text;
                        if (competitions.format.regulation.periods == 5) {
                            fightCard.title = true
                        } else if (competitions.format.regulation.periods == 3) {
                            fightCard.title = false
                        }

                        // @ts-ignore
                        const fighterPromises = competitions.competitors.map(async fighter => {

                            const fighterInfo = await axios.get(fighter.athlete["$ref"]);
                            const fighterInfoData = fighterInfo.data;

                            let shortName = fighterInfoData.shortName;
                            if (fighter.order === 1) {
                                fightCard.fighterRed.name = shortName;
                            } else if (fighter.order === 2) {
                                fightCard.fighterBlue.name = shortName;
                            }
                            return fighterInfoData;
                        });

                        await Promise.all(fighterPromises);
                        // @ts-ignore
                        event.fightCards.push(fightCard);

                    }))

                    // Transformation into subdocuments
                    // @ts-ignore
                    existingEvent.events.push(event)
                    await existingEvent.save()
                } else {
                    console.log("Error tournament type not found or the event already exist")
                }
            } else {
                console.error("Event does not exist in DB please create one first")
            }
        }else {
            console.log("No event found")
        }


        //     const [fight_card_account, fight_card_bump] =
        //         anchor.web3.PublicKey.findProgramAddressSync(
        //             [
        //                 Buffer.from('BattleBoosters'),
        //                 Buffer.from('fightCard'),
        //                 event_account_to_pubkey.toBuffer(),
        //                 new BN(eventAccountData.fightCardNonce).toBuffer(),
        //             ],
        //             program.programId
        //         );
        //
        //     const fightCardData = {
        //         eventPubkey: event_account_to_pubkey,
        //         eventNonceTracker: new BN(0),
        //         titleFight: is_title_fight,
        //         fighterBlue: null,
        //         fighterRed: null,
        //         fightDuration: null,
        //         result: null,
        //         winner: null,
        //     };
        //
        //     const tx = await program.methods
        //         .createNewFightCard(fightCardData)
        //         .accounts({
        //             creator: admin_account.publicKey,
        //             program: program_pda,
        //             event: event_account,
        //             fightCard: fight_card_account,
        //             systemProgram: anchor.web3.SystemProgram.programId,
        //         })
        //         .signers([admin_account])
        //         .rpc();
        // }

    }catch (e){
        console.log(e)
    }

}

export { createFightCard }