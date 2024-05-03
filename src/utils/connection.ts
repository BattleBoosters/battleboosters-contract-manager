import * as anchor from '@coral-xyz/anchor';
import { Connection, Keypair } from '@solana/web3.js';
import fs from 'fs';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import {Battleboosters} from "../battleboosters";


// Function to load the wallet from a JSON file
export function loadWallet(): anchor.Wallet {
    const keypairJSON = fs.readFileSync(process.env.WALLET_PATH!, 'utf-8');
    const keypairData = JSON.parse(keypairJSON);
    const keypair = Keypair.fromSecretKey(Uint8Array.from(keypairData));
    return new anchor.Wallet(keypair);
}

// Function to create a program instance
export function getProgram(wallet: anchor.Wallet, programId: anchor.web3.PublicKey): anchor.Program<Battleboosters> {

    const connection = new Connection(process.env.PRIVATE_SOLANA_NETWORK_URL!, 'processed');
    const provider = new anchor.AnchorProvider(connection, wallet, {
        preflightCommitment: 'processed',
    });
    anchor.setProvider(provider);

    // Load the program's IDL
    const idlJSON = fs.readFileSync('../src/battleboosters.json', 'utf-8');
    const idl = JSON.parse(idlJSON);

    return new anchor.Program(idl, programId, provider);
}

export function initAccounts (program: anchor.Program<Battleboosters>) {

    const metadata_pubkey = new anchor.web3.PublicKey(
        MPL_TOKEN_METADATA_PROGRAM_ID
    );
    const [bank_pda, bank_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('BattleBoosters'), Buffer.from('bank')],
        program.programId
    );

    const [program_pda, program_bump] =
        anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from('BattleBoosters'), Buffer.from('program')],
            program.programId
        );

    const [rarity_pda, rarity_bump] =
        anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from('BattleBoosters'), Buffer.from('rarity')],
            program.programId
        );

    const [mint_authority_account, authority_bump] =
        anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from('BattleBoosters'), Buffer.from('mintAuthority')],
            program.programId
        );

    // @ts-ignore
    const adminAccount = JSON.parse(process.env.ADMIN_ACCOUNT);
    const admin_account = anchor.web3.Keypair.fromSecretKey(
        new Uint8Array(adminAccount)
    );

    return {
        admin_account,
        metadata_pubkey,
        bank_pda,
        bank_bump,
        program_pda,
        program_bump,
        rarity_pda,
        rarity_bump,
        mint_authority_account,
        authority_bump,
    };

};

