import {getProgram, initAccounts, loadWallet} from "./connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import {RankReward, TournamentType, Stat} from "../interfaces/interfaces";
import connectToDatabase from './mongodb.js';
import axios from "axios";
const {BN} = anchor;
import Event from '../models/Event.js';

const insertResult = async (event_key: string) => {

    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
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

        console.log(Math.floor(new Date("2024-04-27T23:00Z").getTime() / 1000))

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

        if (existingEvent && targetEvent){

            const competitions = await axios.get(targetEvent.event['$ref'])
            const competitionData = competitions.data;

            // @ts-ignore
            await Promise.all(competitionData.competitions.map(async fight => {
                // @ts-ignore
                await Promise.all(fight.competitors.map(async fighter => {
                    const athlete =  await axios.get(fighter.athlete['$ref'])
                    const athleteData = athlete.data
                    const statistics = await axios.get(fighter.statistics['$ref'])
                    const statisticsData = statistics.data; // Assuming statistics response is similar

                    // Find the matching fight card in the event
                    // @ts-ignore
                    // Find the event object containing the matching fight card
                    // const eventToUpdate = existingEvent.events.find(event =>
                    //     //@ts-ignore
                    //     event.fightCards.some(fightCard =>
                    //         fightCard.fighterBlue.name === athleteData.shortName ||
                    //         fightCard.fighterRed.name === athleteData.shortName
                    //     )
                    // );
                    // // Find the matching fight card within the event
                    // //@ts-ignore
                    // const matchingFightCard = eventToUpdate.fightCards.find(fightCard =>
                    //     fightCard.fighterBlue.name === athleteData.shortName ||
                    //     fightCard.fighterRed.name === athleteData.shortName
                    // );

                    const matchingFightCard = existingEvent.events.find(event =>
                        //@ts-ignore
                        event.fightCards.some(fightCard =>
                            fightCard.fighterBlue.name === athleteData.shortName ||
                            fightCard.fighterRed.name === athleteData.shortName
                        )
                        //@ts-ignore
                    )?.fightCards.find(fightCard =>
                        fightCard.fighterBlue.name === athleteData.shortName ||
                        fightCard.fighterRed.name === athleteData.shortName
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
                            console.log(matchingFightCard.fighterRed.stats)
                        } else if (fighter.order === 2) {
                            matchingFightCard.fighterBlue.stats = {
                                ...fighterStats
                            };
                        }

                        // // Update fight card result on-chain (assuming you have a function for this)
                        // await updateFightCardResultOnChain(
                        //     program,
                        //     wallet,
                        //     // ... other required arguments for on-chain update
                        // );
                    } else {
                        console.error("Fight card not found for athlete:", athleteData.shortName);
                    }


                }))

            }))

            // Save the entire existingEvent document
            const x = await existingEvent.save();
            console.log("ok")
            console.log(x)
        }else {
            console.error(`Event key ${event_key} does not exist or are not found on the API`)
        }







        //
        // let { fight_card_account } = await updateFightCard(
        //     provider,
        //     program,
        //     admin_account,
        //     program_pda,
        //     0,
        //     false,
        //     0,
        //     fighterBlue,
        //     fighterRed,
        //     new BN(200),
        //     { koTko: {} },
        //     { fighterBlue: {} }
        // );
        //
        // const fightCardData = {
        //     eventPubkey: event_account,
        //     eventNonceTracker: new BN(event_nonce),
        //     titleFight: is_title_fight,
        //     fighterBlue,
        //     fighterRed,
        //     fightDuration,
        //     result,
        //     winner,
        // };
        //
        // const tx = await program.methods
        //     .updateFightCard(fightCardData)
        //     .accounts({
        //         creator: admin_account.publicKey,
        //         program: program_pda,
        //         event: event_account,
        //         fightCard: fight_card_account,
        //         systemProgram: anchor.web3.SystemProgram.programId,
        //     })
        //     .signers([admin_account])
        //     .rpc();


    }catch (e){
        console.log(e)
    }

}

export { insertResult }