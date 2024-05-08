import {RankReward, TournamentType} from "../interfaces/interfaces";
import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from "../utils/mongodb.js";
import Event from "../models/Event.js";
import {Transaction} from "@solana/web3.js";
const { BN } = anchor

const ranksCalculator = async (eventKey: string) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const { admin_account, program_pda } = initAccounts(program);

    try {
        await connectToDatabase();

        // // Find the event in the database
        // const existingEvent = await Event.findOne({
        //     events: { $elemMatch: { pubkey: eventKey } }
        // });

        const event_account = new anchor.web3.PublicKey(eventKey);
        const event_account_data = await program.account.eventData.fetch(event_account);

        const instructions: any[] = []; // Array to store all instructions
        let pointsCalculated = true
        const batchSize = 5; // Maximum instructions per transaction

        // Collect all rank PDAs and fetch data concurrently
        const rankFetchPromises = [];
        for (let rank = 0; rank < event_account_data.rankNonce.toNumber(); rank++) {
            const [rank_pda] = anchor.web3.PublicKey.findProgramAddressSync(
                [Buffer.from('BattleBoosters'), Buffer.from('rank'), event_account.toBuffer(), Buffer.from(new BN(rank).toArray("le", 8))],
                program.programId
            );
            rankFetchPromises.push(program.account.rankData.fetch(rank_pda).then(rank_data => ({ rank_data, rank_pda })));
        }

        const ranksData = await Promise.all(rankFetchPromises);
        const validRanks = ranksData.filter(({ rank_data }) => rank_data.totalPoints !== null);

        if (validRanks.length !== ranksData.length) {
            console.error("Not all players have claimed their points.");
            return; // Stop further execution if any rank data is missing points.
        }

        //@ts-ignore
        validRanks.sort((a, b) => b.rank_data.totalPoints.cmp(a.rank_data.totalPoints));
        await Promise.all(validRanks.map(async ({ rank_data, rank_pda }, index) => {
            try {
                const rank_number = index + 1;
                let updateRankInstruction = await program.methods.adminUpdateRank(new BN(rank_number))
                    .accounts({
                        signer: admin_account.publicKey,
                        event: event_account,
                        rank: rank_pda,
                        program: program_pda,
                    }).instruction();

                instructions.push(updateRankInstruction);
            }catch (e){
                console.error(e);
            }

        }));

        // Create batches of instructions
        for (let i = 0; i < instructions.length; i += batchSize) {
            const batch = instructions.slice(i, i + batchSize);
            const tx = new Transaction();
            tx.add(...batch);

            try {
                // Send and confirm the transaction
                // @ts-ignore
                const tx_info = await program.provider.sendAndConfirm(tx, [admin_account]);
                console.log("Transaction confirmed:", tx_info);
            } catch (e) {
                console.error("Error sending transaction:", e);
                // Handle transaction errors (e.g., retry, rollback)
            }
        }


    } catch (e) {
        console.error("Error:", e);
    }
}

export { ranksCalculator}