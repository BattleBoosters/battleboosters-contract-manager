import dotenv from 'dotenv';
dotenv.config();
import { Battleboosters } from './battleboosters';
import anchor from '@coral-xyz/anchor';
import {Connection} from "@solana/web3.js";
import fs from "fs";
const {BN} = anchor;
import { Keypair } from '@solana/web3.js';




async function update_event(){
    // @ts-ignore
    const keypairJSON = fs.readFileSync(process.env.WALLET, 'utf-8');
    const keypairData = JSON.parse(keypairJSON);
    const keypair = Keypair.fromSecretKey(Uint8Array.from(keypairData));
    const wallet = new anchor.Wallet(keypair);
    // Create a connection to the Solana blockchain
    // @ts-ignore
    const connection =  new Connection(process.env.PRIVATE_SOLANA_NETWORK_URL, 'processed');
    // Set the provider with only the connection
    // @ts-ignore
    const provider = new anchor.AnchorProvider(connection, wallet, {'preflightCommitment': 'processed'});
    anchor.setProvider(provider);

    const idlJSON = fs.readFileSync(process.cwd() + '/src/battleboosters.json', 'utf-8');

    const idl = JSON.parse(idlJSON);
    // @ts-ignore
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID);
    // 2. Create program instance
    const program: anchor.Program<Battleboosters> = new anchor.Program(idl, programId, provider);

    // const {
    //     admin_account,
    //     unauthorized_account,
    //     metadata_pubkey,
    //     bank_pda,
    //     bank_bump,
    //     program_pda,
    //     program_bump,
    //     rarity_pda,
    //     rarity_bump,
    //     mint_authority_account,
    //     authority_bump,
    // } = initAccounts(program);

    const event_id = 1;
    const new_time_start = 1813535498;
    const new_time_end = 1813623964;

    const [event_account_one, event_account_one_bump] =
        anchor.web3.PublicKey.findProgramAddressSync(
            [
                Buffer.from('BattleBoosters'),
                Buffer.from('event'),
                new BN(event_id).toBuffer('le', 8),
            ],
            program.programId
        );

    try {
        console.log("ok")
    } catch (e) {
        console.log(e)
    }

}
update_event()