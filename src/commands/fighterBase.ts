import {Metrics, RankReward, TournamentType} from "../interfaces/interfaces";
import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import connectToDatabase from "../utils/mongodb.js";
import Event from "../models/Event.js";
import {Transaction} from "@solana/web3.js";
const { BN } = anchor

const createFighterBase = async (fighterIndex: number, metrics: Metrics, fighterType: any) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const { admin_account, program_pda } = initAccounts(program);

    try {
        await connectToDatabase();

        const [fighterPDA] =
            anchor.web3.PublicKey.findProgramAddressSync(
                [
                    Buffer.from('BattleBoosters'),
                    Buffer.from('fighterBase'),
                    Buffer.from([fighterIndex]), // Using the loop counter to create unique PDAs
                ],
                program.programId
            );

        const tx = await program.methods
            .createFighter(fighterType, metrics)
            .accounts({
                creator: admin_account.publicKey,
                program: program_pda,
                fighterBase: fighterPDA,
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .signers([admin_account])
            .rpc();

        console.log(tx)
        console.log(`fighter type created successfully`)
    } catch (e) {
        console.error("Error:", e);
    }
}

export { createFighterBase }