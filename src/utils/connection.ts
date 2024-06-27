import * as anchor from '@coral-xyz/anchor';
import {Connection, Keypair, PublicKey} from '@solana/web3.js';
import fs from 'fs';
import {Battleboosters} from "../battleboosters";


// Function to load the wallet from a JSON file
export function loadWallet(): anchor.Wallet {
    console.log("process.env.WALLET_PATH")
    console.log(process.env.WALLET_PATH)
    const keypairJSON = fs.readFileSync(process.env.WALLET_PATH!, 'utf-8');
    const keypairData = JSON.parse(keypairJSON);
    const keypair = Keypair.fromSecretKey(Uint8Array.from(keypairData));
    return new anchor.Wallet(keypair);
}

// Function to create a program instance
export async function getProgram(wallet: anchor.Wallet, programId: anchor.web3.PublicKey): Promise<anchor.Program<Battleboosters>> {

    const connection = new Connection(process.env.PRIVATE_SOLANA_NETWORK_URL!, 'processed');
    const provider = new anchor.AnchorProvider(connection, wallet, {
        preflightCommitment: 'processed',
    });
    anchor.setProvider(provider);
    //@ts-ignore
    const programPublicKey = new PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID);
    const idl = await anchor.Program.fetchIdl(programPublicKey, provider);
    return new anchor.Program(<Battleboosters>idl);

}

export function initAccounts (program: anchor.Program<Battleboosters>) {


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

