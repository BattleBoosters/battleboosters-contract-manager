import {getProgram, initAccounts, loadWallet} from "./connection.js";
import anchor, {BN} from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from './mongodb.js';
import axios from "axios";
import {TournamentType} from "../interfaces/interfaces";

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
        //let eventAccountData = await program.account.eventData.fetch(event_account_to_pubkey)

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
            // Get the fightCards
            // @ts-ignore
            const competitions = await axios.get(nextEvent.event['$ref'])
            const competitionData = competitions.data;
            // @ts-ignore
            competitionData.competitions.sort((a, b) => {
                // Ascending order
                return a.matchOrder - b.matchOrder;
            });

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
            });


            let fightCards = []
            // let key = "mainCard" in eventAccountData.tournamentType ? "Main Card" :
            //     "prelims" in eventAccountData.tournamentType ? "Prelims" :
            //         "earlyPrelims" in eventAccountData.tournamentType ? "Early Prelims" : null;

            let key = "Main Card"
            if(key){
                let fightCard = {
                    pubkey: "fight_card_pda.toString()",
                    category: "",
                    fighterBlue: { name: ""},
                    fighterRed: { name: ""},
                    title: false
                }
                // @ts-ignore
                fightGroupings[key].map(competitions =>{

                    if (competitions.types) {
                        fightCard.category = competitions.types.text;
                        fightCard.title = true
                    }else {
                        fightCard.category = competitions.type.text;
                        fightCard.title = false
                    }

                    // @ts-ignore
                    competitions.competitors.map(async fighter => {
                        const fighterInfo = await axios.get(fighter.athlete["$ref"])

                        // Get the "shortname" or "fullName"
                        const fighterInfoData = fighterInfo.data;
                        let shortName = fighterInfoData.shortname;
                        // let fullName = fighterInfoData.fullname;

                        if (fighter.order == 1) {
                            fightCard.fighterRed.name = shortName
                        }else if (fighter.order == 2){
                            fightCard.fighterBlue.name = shortName
                        }

                    })
                    fightCards.push(fightCard)
                })
                // @ts-ignore
                const fighterPromises = competitions.competitors.map(async fighter => {
                    const fighterInfo = await axios.get(fighter.athlete["$ref"]);
                    const fighterInfoData = fighterInfo.data;
                    let shortName = fighterInfoData.shortname;
                    if (fighter.order === 1) {
                        fightCard.fighterRed.name = shortName;
                    } else if (fighter.order === 2){
                        fightCard.fighterBlue.name = shortName;
                    }
                    return fighterInfoData;
                });

                await Promise.all(fighterPromises);

                fightCards.push(fightCard);
                console.log("fightCard")
                console.log(fightCard)
            }else{
                console.log("Error tournament type not found")
            }






            // let event_account_to_pubkey = new anchor.web3.PublicKey(event_account);
            // let eventAccountData = await program.account.eventData.fetch(event_account_to_pubkey);
            // const [fight_card_account, fight_card_bump] =
            //     anchor.web3.PublicKey.findProgramAddressSync(
            //         [
            //             Buffer.from('BattleBoosters'),
            //             Buffer.from('fightCard'),
            //             event_account_to_pubkey.toBuffer(),
            //             new BN(eventAccountData.fightCardNonce).toBuffer(),
            //         ],
            //         program.programId
            //     );
            //
            // const fightCardData = {
            //     eventPubkey: event_account_to_pubkey,
            //     eventNonceTracker: new BN(0),
            //     titleFight: is_title_fight,
            //     fighterBlue: null,
            //     fighterRed: null,
            //     fightDuration: null,
            //     result: null,
            //     winner: null,
            // };
            //
            // const tx = await program.methods
            //     .createNewFightCard(fightCardData)
            //     .accounts({
            //         creator: admin_account.publicKey,
            //         program: program_pda,
            //         event: event_account,
            //         fightCard: fight_card_account,
            //         systemProgram: anchor.web3.SystemProgram.programId,
            //     })
            //     .signers([admin_account])
            //     .rpc();
        }

    }catch (e){
        console.log(e)
    }

}

export { createFightCard }