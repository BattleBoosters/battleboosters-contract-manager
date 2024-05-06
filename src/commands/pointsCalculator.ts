import {RankReward, TournamentType} from "../interfaces/interfaces";
import {getProgram, initAccounts, loadWallet} from "@utils/connection";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from "@utils/mongodb";
import Event from "../models/Event";
import {Transaction} from "@solana/web3.js";
const { BN } = anchor

const pointsCalculator = async (eventKey: string, newStartDate: number | undefined, newEndDate: number | undefined, tournament_type: TournamentType | undefined, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const { admin_account, program_pda } = initAccounts(program);

    try {
        await connectToDatabase();

        // Find the event in the database
        const existingEvent = await Event.findOne({
            events: { $elemMatch: { pubkey: eventKey } }
        });

        const event_account = new anchor.web3.PublicKey(eventKey);
        const event_account_data = await program.account.eventData.fetch(event_account);
        event_account_data.rankNonce
        let tx = new Transaction()

        let fightCardPdas = []
        for (let fightCard = 0; fightCard < event_account_data.fightCardNonce, fightCard++;){
            const [fight_card_account, fight_card_bump] =
                anchor.web3.PublicKey.findProgramAddressSync(
                    [
                        Buffer.from('BattleBoosters'),
                        Buffer.from('fightCard'),
                        event_account.toBuffer(),
                        //new BN(fight_card_id).toBuffer(),
                        Buffer.from([fightCard]),
                    ],
                    program.programId
                );
            fightCardPdas.push(fight_card_account)
        }

        for (let rank = 0; rank < event_account_data.rankNonce.toNumber(), rank++;){
            const [rank_pda, rank_pda_bump] =
                anchor.web3.PublicKey.findProgramAddressSync(
                    [
                        Buffer.from('BattleBoosters'),
                        Buffer.from('rank'),
                        event_account.toBuffer(),
                        Buffer.from(new BN(rank).toArray("le", 8))
                        //admin_account.publicKey.toBuffer(),
                    ],
                    program.programId
                );

            const rank_data = await program.account.rankData.fetch(rank_pda)


            fightCardPdas.map(async fightCardPda => {

                const [fight_card_link_account, fight_card_link_bump] =
                    anchor.web3.PublicKey.findProgramAddressSync(
                        [
                            Buffer.from('BattleBoosters'),
                            Buffer.from('fightCard'),
                            event_account.toBuffer(),
                            fightCardPda.toBuffer(),
                            rank_data.playerAccount.toBuffer(),
                            //admin_account.publicKey.toBuffer()
                        ],
                        program.programId
                    );
                const fight_card_link_data = await program.account.fightCardLinkData.fetch(fight_card_link_account)

                // @ts-ignore
                let fighter_used_data = await program.account.fighterData.fetch(fight_card_link_data.fighterUsed)

                const fighterTypeMap = {
                    boxing: { boxing: {} },
                    muayThai: { muayThai: {} },
                    taekwondo: {taekwondo: {}},
                    karate: {karate: {}},
                    judo: {judo: {}},
                    wrestling: {wrestling: {}},
                    brazilianJiuJitsu: {brazilianJiuJitsu: {}},
                    sambo: {sambo: {}}
                };


                const fighterType = fighterTypeMap[fighter_used_data.fighterType] || {};
                const fighterIndex = Object.keys(fighterType)[0];


                const [fighter_pda] = anchor.web3.PublicKey.findProgramAddressSync(
                    [
                        Buffer.from('BattleBoosters'),
                        Buffer.from('fighterBase'),
                        Buffer.from([fighterIndex]),
                    ],
                    program.programId
                );


                let determineRankInstruction = await program.methods
                    //@ts-ignore
                .determineRankingPoints(fighter_type)
                .accounts({
                    signer: wallet.publicKey,
                    event: event_account,
                    rank: rank_pda,
                    playerAccount: rank_data.playerAccount,
                    fightCard: fightCardPda,
                    fightCardLink: fight_card_link_account,
                    // @ts-ignore
                    fighterAsset: fight_card_link_data.fighterUsed,
                    // @ts-ignore
                    fighterAssetLink: fight_card_link_data.fighterLinkUsed,
                    pointsBoosterAsset: fight_card_link_data.pointsBoosterUsed,
                    shieldBoosterAsset: fight_card_link_data.shieldBoosterUsed,
                    fighterBase: fighter_pda,
                }).instruction();

                tx.add(determineRankInstruction)
            })
        }

    } catch (e) {
        console.error("Error:", e);
    }
}

export { pointsCalculator}