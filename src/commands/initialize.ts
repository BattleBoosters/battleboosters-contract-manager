import {RankReward, TournamentType, Env, FighterRarityType, BoosterRarityType} from "../interfaces/interfaces";
import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";


const initializeProgram = async (fighter_price: number, booster_price: number, env: Env) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        admin_account,
        program_pda,
        authority_bump,
        bank_bump,
        bank_pda,
        mint_authority_account
    } = initAccounts(program);

    try {
        const accounts = {
            creator: admin_account.publicKey,
            program: program_pda,
            bank: bank_pda,
            mintAuthority: mint_authority_account,
            //systemProgram: anchor.web3.SystemProgram.programId,
        }
        const tx = await program.methods
            .initialize(
                authority_bump,
                bank_bump,
                admin_account.publicKey,
                new anchor.BN(fighter_price),
                new anchor.BN(booster_price),
                env
            )
            .accounts(accounts)
            .signers([admin_account]) // Include new_account as a signer
            .rpc();

        console.log("Program initialized: ", tx)
    }catch (e){
        console.log(e)
    }
}

const initializeRarity = async (probs_tier_1: [], probs_tier_2: [], probs_tier_3: [], fighter_rarity: FighterRarityType[], booster_shield_rarity: BoosterRarityType[], booster_points_rarity: BoosterRarityType[], ) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        admin_account,
        rarity_pda
    } = initAccounts(program);

    try {
        const accounts = {
            creator: admin_account.publicKey,
            rarity: rarity_pda,
            systemProgram: anchor.web3.SystemProgram.programId,
        }

        const tx = await program.methods
            .initializeRarity(
                fighter_rarity,
                booster_shield_rarity,
                booster_points_rarity,
                [
                    { tier1: [Buffer.from(probs_tier_1)] }, // MainCard
                    { tier2: [Buffer.from(probs_tier_2)] }, // Prelims
                    { tier3: [Buffer.from(probs_tier_3)] }, // Early Prelims
                ]
            )
            .accounts(accounts)
            .signers([admin_account]) // Include new_account as a signer
            .rpc();

        console.log("Rarity initialized: ", tx)
    }catch (e){
        console.log(e)
    }
}

const updateRarity = async (probs_tier_1: [], probs_tier_2: [], probs_tier_3: [], fighter_rarity: FighterRarityType[], booster_shield_rarity: BoosterRarityType[], booster_points_rarity: BoosterRarityType[], ) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        admin_account,
        rarity_pda
    } = initAccounts(program);

    try {
        const accounts = {
            creator: admin_account.publicKey,
            rarity: rarity_pda,
            systemProgram: anchor.web3.SystemProgram.programId,
        }

        const tx = await program.methods
            .updateRarity(
                fighter_rarity,
                booster_shield_rarity,
                booster_points_rarity,
                [
                    { tier1: [Buffer.from(probs_tier_1)] }, // MainCard
                    { tier2: [Buffer.from(probs_tier_2)] }, // Prelims
                    { tier3: [Buffer.from(probs_tier_3)] }, // Early Prelims
                ]
            )
            .accounts(accounts)
            .signers([admin_account]) // Include new_account as a signer
            .rpc();

        console.log("Rarity updated: ", tx)
    }catch (e){
        console.log(e)
    }
}


const forceUpdateProgram = async () => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        admin_account,
        rarity_pda,
        program_pda
    } = initAccounts(program);

    try {
        const accounts = {
            creator: admin_account.publicKey,
            program: program_pda,
            systemProgram: anchor.web3.SystemProgram.programId,
        }

        const tx = await program.methods
            .updateProgram()
            .accounts(accounts)
            .signers([admin_account]) // Include new_account as a signer
            .rpc()

        console.log("Program env updated : ", tx)
    }catch (e){
        console.log(e)
    }
}

export { initializeProgram, initializeRarity, forceUpdateProgram, updateRarity }