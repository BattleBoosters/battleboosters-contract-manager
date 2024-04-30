import {getProgram, initAccounts, loadWallet} from "./connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
const {BN} = anchor;

const start = async () => {

        const wallet = loadWallet();
        const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
        const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;

        const {
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

export { start }