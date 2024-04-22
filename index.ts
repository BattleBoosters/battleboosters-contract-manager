import * as anchor from '@coral-xyz/anchor';
import { BN, Program } from '@coral-xyz/anchor';
import {initAccounts} from './initAccounts';
import { Battleboosters } from './battleboosters';


async function update_event(){

    const provider = anchor.AnchorProvider.env();

    anchor.setProvider(provider);
    const program = anchor.workspace.Battleboosters as Program<Battleboosters>;

    const {
        admin_account,
        unauthorized_account,
        metadata_pubkey,
        bank_pda,
        bank_bump,
        program_pda,
        program_bump,
        rarity_pda,
        rarity_bump,
        mint_authority_account,
        authority_bump,
    } = initAccounts(program);

    const event_id = 0;
    const new_time_start = 1713535498;
    const new_time_end = 1713623964;

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
        const tx = await program.methods
            .updateEvent(
                new BN(new_time_start),
                new BN(new_time_end),
                {prelims:{}},
                [
                    {
                        startRank: new BN(1),
                        endRank: new BN(1),
                        prizeAmount: new BN(100),
                        fighterAmount: 1,
                        boosterAmount: 5,
                        championsPassAmount: 1,
                    },
                    {
                        startRank: new BN(2),
                        endRank: new BN(2),
                        prizeAmount: new BN(50),
                        fighterAmount: 1,
                        boosterAmount: 5,
                        championsPassAmount: 1,
                    },
                    {
                        startRank: new BN(3),
                        endRank: new BN(3),
                        prizeAmount: new BN(20),
                        fighterAmount: 1,
                        boosterAmount: 3,
                        championsPassAmount: 1,
                    },
                    {
                        startRank: new BN(4),
                        endRank: new BN(4),
                        prizeAmount: new BN(10),
                        fighterAmount: 1,
                        boosterAmount: 1,
                        championsPassAmount: 1,
                    },
                    {
                        startRank: new BN(5),
                        endRank: new BN(10),
                        prizeAmount: new BN(1),
                        fighterAmount: 1,
                        boosterAmount: 1,
                        championsPassAmount: 1,
                    },
                    {
                        startRank: new BN(11),
                        endRank: new BN(20),
                        prizeAmount: new BN(0),
                        fighterAmount: 1,
                        boosterAmount: 1,
                        championsPassAmount: 0,
                    },
                    {
                        startRank: new BN(21),
                        endRank: null,
                        prizeAmount: new BN(0),
                        fighterAmount: 1,
                        boosterAmount: 1,
                        championsPassAmount: 0,
                    },
                ]
            )
            .accounts({
                creator: admin_account.publicKey,
                program: program_pda,
                event: event_account_one,
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .signers([admin_account])
            .rpc();
    } catch (e) {
      console.log(e)
    }

}
