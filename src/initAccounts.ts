import * as anchor from '@coral-xyz/anchor';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import { Battleboosters } from './battleboosters';
const initAccounts = function (program: anchor.Program<Battleboosters>) {

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

    return {
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

export {initAccounts};