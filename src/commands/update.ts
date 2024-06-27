// import {RankReward, TournamentType, Env, FighterRarityType, BoosterRarityType} from "../interfaces/interfaces";
// import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
// import * as anchor from "@coral-xyz/anchor";
// import {Battleboosters} from "../battleboosters";
// import connectToDatabase from "@utils/mongodb";
// const { BN } = anchor
//
// const initializeProgram = async (fighter_price: number, booster_price: number, env: Env) => {
//     const wallet = loadWallet();
//     const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
//     const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
//     const {
//         admin_account,
//         program_pda,
//         authority_bump,
//         bank_bump,
//         bank_pda,
//         mint_authority_account
//     } = initAccounts(program);
//
//     try {
//         const tx = await program.methods
//             .updateProgram(
//                 authority_bump,
//                 bank_bump,
//                 admin_account.publicKey,
//                 new BN(fighter_price),
//                 new BN(booster_price),
//                 5,
//                 env
//             )
//             .accounts({
//                 creator: admin_account.publicKey,
//                 program: program_pda,
//                 bank: bank_pda,
//                 mintAuthority: mint_authority_account,
//                 //systemProgram: anchor.web3.SystemProgram.programId,
//             })
//             .signers([admin_account]) // Include new_account as a signer
//             .rpc();
//
//         console.log("Program initialized: ", tx)
//     }catch (e){
//         console.log(e)
//     }
// }