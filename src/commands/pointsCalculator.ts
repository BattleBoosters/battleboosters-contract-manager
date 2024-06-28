import {RankReward, TournamentType} from "../interfaces/interfaces";
import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from "../utils/mongodb.js";
import Event from "../models/Event.js";
import Player from "../models/Player.js"
import {Transaction} from "@solana/web3.js";


const pointsCalculator = async (eventKey: string) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const { admin_account, program_pda } = initAccounts(program);

    try {
        await connectToDatabase();

        // Find the event in the database
        // const existingEvent = await Event.findOne({
        //     events: { $elemMatch: { pubkey: eventKey } }
        // });

        const event_account = new anchor.web3.PublicKey(eventKey);
        const event_account_data = await program.account.eventData.fetch(event_account);

        const instructions: any[] = []; // Array to store all instructions
        const batchSize = 3; // Maximum instructions per transaction

        let fightCardPdas = []
        let refundFightCardPdas = []
        //@ts-ignore
        let gameAssetAddresses = []; // Array to store game asset addresses

        for (let fightCard = 0; fightCard < event_account_data.fightCardNonce; fightCard++){
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
            const fight_card_data = await program.account.fightCardData.fetch(fight_card_account);

            // Can i do this and add the fight card for a refund ?
            if (fight_card_data.result && fight_card_data.result.noContest){
                refundFightCardPdas.push(fight_card_account)
            }

            if (fight_card_data.winner && fight_card_data.result && !fight_card_data.result.noContest){
                fightCardPdas.push(fight_card_account)
            }

        }

        // Collect all rank PDAs and fetch data concurrently
        const rankFetchPromises = [];
        for (let rank = 0; rank < event_account_data.rankNonce.toNumber(); rank++) {
            const [rank_pda] = anchor.web3.PublicKey.findProgramAddressSync(
                [Buffer.from('BattleBoosters'), Buffer.from('rank'), event_account.toBuffer(), Buffer.from(new anchor.BN(rank).toArray("le", 8))],
                program.programId
            );
            rankFetchPromises.push(program.account.rankData.fetch(rank_pda).then(rank_data => ({ rank_data, rank_pda })));
        }

        const ranksData = await Promise.all(rankFetchPromises);

        await Promise.all(ranksData.map(async ({ rank_data, rank_pda }) => {

            if (!rank_data.isConsumed){
                const rankPromises = fightCardPdas.map(async fightCardPda => {
                    const [fight_card_link_account] = anchor.web3.PublicKey.findProgramAddressSync(
                        [
                            Buffer.from('BattleBoosters'), Buffer.from('fightCard'),
                            event_account.toBuffer(), fightCardPda.toBuffer(), rank_data.playerAccount.toBuffer()
                        ],
                        program.programId
                    );
                    try {
                        const fight_card_link_data = await program.account.fightCardLinkData.fetch(fight_card_link_account);

                        if (!fight_card_link_data.isConsumed ){

                            if (fight_card_link_data.fighterUsed) gameAssetAddresses.push(fight_card_link_data.fighterUsed);
                            // @ts-ignore
                            const mintable_asset_data = await program.account.mintableGameAssetData.fetch(fight_card_link_data.fighterUsed)

                            let assetType =  mintable_asset_data.metadata.attributes.find(asset =>
                                asset.traitType == "Fighter Type"
                            )?.value

                            const fighterTypeMap = {
                                boxing: { boxing: {} },
                                muaythai: { muayThai: {} },
                                taekwondo: { taekwondo: {} },
                                karate: { karate: {} },
                                judo: { judo: {} },
                                wrestling: { wrestling: {} },
                                brazilianjiujitsu: { brazilianJiuJitsu: {} },
                                sambo: { sambo: {} }
                            };

                            const fighterTypes = [
                                'boxing', 'muaythai', 'taekwondo', 'karate', 'judo',
                                'wrestling', 'brazilianjiujitsu', 'sambo'
                            ];


                            // Example fighter type
                            // @ts-ignore
                            const fighterTypeKey = assetType.toLowerCase(); // Ensure the key is in the correct case/format

                            // Get the object from the map
                            //@ts-ignore
                            const fighterTypeObject = fighterTypeMap[fighterTypeKey];
                            // Get the index from the array
                            const fighterIndex = fighterTypes.indexOf(fighterTypeKey);
                            const [fighter_pda] = anchor.web3.PublicKey.findProgramAddressSync(
                                //@ts-ignore
                                [Buffer.from('BattleBoosters'), Buffer.from('fighterBase'), Buffer.from([fighterIndex])],
                                program.programId
                            );

                            const [player_account_pda, player_account_bump] =
                                anchor.web3.PublicKey.findProgramAddressSync(
                                    [
                                        Buffer.from('BattleBoosters'),
                                        Buffer.from('player'),
                                        rank_data.playerAccount.toBuffer(),
                                        //admin_account.publicKey.toBuffer(),
                                    ],
                                    program.programId
                                );
                            const accounts = {
                                signer: wallet.publicKey,
                                event: event_account,
                                rank: rank_pda,
                                playerAccount: player_account_pda,
                                fightCard: fightCardPda,
                                fightCardLink: fight_card_link_account,
                                // @ts-ignore
                                fighterAsset: fight_card_link_data.fighterUsed,
                                // @ts-ignore
                                fighterAssetLink: fight_card_link_data.fighterLinkUsed,
                                pointsBoosterAsset: fight_card_link_data.pointsBoosterUsed,
                                shieldBoosterAsset: fight_card_link_data.shieldBoosterUsed,
                                fighterBase: fighter_pda,
                            }
                            let determineRankInstruction = await program.methods.determineRankingPoints(fighterTypeObject)
                                .accounts(accounts).instruction();

                            // // @ts-ignore
                            // tx.add(determineRankInstruction);
                            instructions.push(determineRankInstruction);
                        }
                    }catch (e){
                        console.error(`No fight card link found for ${fightCardPda.toString()}`);
                    }
                });
                const refundPromises = refundFightCardPdas.map(async fightCardPda => {
                    const [fight_card_link_account] = anchor.web3.PublicKey.findProgramAddressSync(
                        [
                            Buffer.from('BattleBoosters'), Buffer.from('fightCard'),
                            event_account.toBuffer(), fightCardPda.toBuffer(), rank_data.playerAccount.toBuffer()
                        ],
                        program.programId
                    );
                    try {
                        const fight_card_link_data = await program.account.fightCardLinkData.fetch(fight_card_link_account);

                        const [player_account_pda, player_account_bump] =
                            anchor.web3.PublicKey.findProgramAddressSync(
                                [
                                    Buffer.from('BattleBoosters'),
                                    Buffer.from('player'),
                                    rank_data.playerAccount.toBuffer(),
                                    //admin_account.publicKey.toBuffer(),
                                ],
                                program.programId
                            );

                        const player_account_data = await program.account.playerData.fetch(player_account_pda)

                        const [points_mintable_game_asset_link_pda] =
                            anchor.web3.PublicKey.findProgramAddressSync(
                                [
                                    Buffer.from('BattleBoosters'),
                                    Buffer.from('mintableGameAsset'),
                                    Buffer.from(player_account_data.playerGameAssetLinkNonce.toArray('le', 8)),
                                    rank_data.playerAccount.toBuffer(),
                                ],
                                program.programId
                            );
                        const [shield_mintable_game_asset_link_pda] =
                            anchor.web3.PublicKey.findProgramAddressSync(
                                [
                                    Buffer.from('BattleBoosters'),
                                    Buffer.from('mintableGameAsset'),
                                    Buffer.from(player_account_data.playerGameAssetLinkNonce.add(new anchor.BN(1)).toArray('le', 8)),
                                    rank_data.playerAccount.toBuffer(),
                                ],
                                program.programId
                            );

                        let accounts = {
                            signer: wallet.publicKey,
                            playerAccount: player_account_pda,
                            event: event_account,
                            fightCard: fightCardPda,
                            fightCardLink: fight_card_link_account,
                            fighterAsset: fight_card_link_data.fighterUsed,
                            pointsBoosterAsset: fight_card_link_data.pointsBoosterUsed ? fight_card_link_data.pointsBoosterUsed : null,
                            shieldBoosterAsset: fight_card_link_data.shieldBoosterUsed ? fight_card_link_data.shieldBoosterUsed : null ,
                            pointsBoosterLink: fight_card_link_data.pointsBoosterUsed ? points_mintable_game_asset_link_pda: null,
                            shieldBoosterLink: fight_card_link_data.shieldBoosterUsed ? shield_mintable_game_asset_link_pda: null
                        }
                        console.log("Refunding mintable game asset with accounts:", accounts);
                        let refundInstruction = await program.methods.refundMintableGameAsset(
                            player_account_data.playerGameAssetLinkNonce,
                            player_account_data.playerGameAssetLinkNonce.add(new anchor.BN(1)),
                            rank_data.playerAccount
                        )
                            .accounts(accounts)
                            .instruction()
                        instructions.push(refundInstruction)

                    }catch (e) {
                        console.error(e);
                    }

                });
                await Promise.all(rankPromises);
                await Promise.all(refundPromises)
            }
        }));


        console.log(`${Math.ceil(instructions.length / batchSize)} tx(s) will be created on-chain to handle tx limit.`)
        // Create batches of instructions
        for (let i = 0; i < instructions.length; i += batchSize) {
            const batch = instructions.slice(i, i + batchSize);
            const tx = new Transaction();
            tx.add(...batch);

            try {
                // Send and confirm the transaction
                // @ts-ignore
                const tx_info = await program.provider.sendAndConfirm(tx, []);
                console.log("Transaction confirmed:", tx_info);
            } catch (e) {
                console.error("Error sending transaction:", e);
                // Handle transaction errors (e.g., retry, rollback)
            }
        }
        console.log("Operation completed")

        // Fetch game asset data and update the database
        //@ts-ignore
        const updateGameAssetPromises = gameAssetAddresses.map(async assetPubkey => {
            const gameAssetData = await program.account.mintableGameAssetData.fetch(assetPubkey);
            const assetPubkeyString = assetPubkey.toString();

            await Player.findOneAndUpdate(
                { "gameAssets.gameAsset.pubkey": assetPubkeyString },
                {
                    $set: {
                        "gameAssets.$[elem].gameAsset.isLocked": gameAssetData.isLocked,
                        "gameAssets.$[elem].gameAsset.isBurned": gameAssetData.isBurned,
                        "gameAssets.$[elem].gameAsset.isMinted": gameAssetData.isMinted,
                        "gameAssets.$[elem].isFree": gameAssetData.owner ? false : true,
                        // Uncomment the following line if metadata needs to be updated
                        // "gameAssets.$[elem].gameAsset.metadata": gameAssetData.metadata,
                    }
                },
                {
                    arrayFilters: [{ "elem.gameAsset.pubkey": assetPubkeyString }],
                    new: true,
                }
            );
        });

        await Promise.all(updateGameAssetPromises);
        // //@ts-ignore
        // const tx_info = await program.provider.sendAndConfirm(tx, [admin_account]);
        // console.log("Transaction confirmed:", tx_info);

    } catch (e) {
        console.error("Error:", e);
    }
}

export { pointsCalculator}