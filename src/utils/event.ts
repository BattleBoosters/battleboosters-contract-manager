import {getProgram, initAccounts, loadWallet} from "./connection.js";
import anchor from "@coral-xyz/anchor";
import {Battleboosters} from "../battleboosters";
import {RankReward, TournamentType} from "../interfaces/interfaces";
const {BN} = anchor;


const createEvent = async (time_start: number, time_end: number, tournament_type: TournamentType, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        program_pda,
    } = initAccounts(program);

    const program_data = await program.account.programData.fetch(
        program_pda
    );
    const [event_account, event_account_bump] =
        anchor.web3.PublicKey.findProgramAddressSync(
            [
                Buffer.from('BattleBoosters'),
                Buffer.from('event'),
                new BN(program_data.eventNonce).toBuffer('le', 8),
            ],
            program.programId
        );

    let updated_rank_rewards: RankReward[] = []
    rank_rewards.map(el => {
        updated_rank_rewards.push({
            startRank: new BN(el.startRank),
            endRank: el.endRank ? new BN(el.endRank): null,
            prizeAmount: el.prizeAmount,
            fighterAmount: el.fighterAmount,
            boosterAmount: el.boosterAmount,
            championsPassAmount: el.championsPassAmount
        })
    })
    const tx = await program.methods
        .createNewEvent(
            new BN(time_start),
            new BN(time_end),
            tournament_type,
            updated_rank_rewards
        )
        .accounts({
            creator: wallet.publicKey,
            program: program_pda,
            event: event_account,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([])
        .rpc();

    return {
        tx
    }
}

const updateEvent = async (event_account: string, time_start: number, time_end: number, tournament_type: TournamentType, rank_rewards: RankReward[]) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_BATTLEBOOSTERS_PROGRAM_ID!);
    const program = getProgram(wallet, programId) as anchor.Program<Battleboosters>;
    const {
        program_pda,
    } = initAccounts(program);

    let event_account_to_pubkey = new anchor.web3.PublicKey(event_account)

    let updated_rank_rewards: RankReward[] = []
    rank_rewards.map(el => {
        updated_rank_rewards.push({
            startRank: new BN(el.startRank),
            endRank: el.endRank ? new BN(el.endRank): null,
            prizeAmount: el.prizeAmount,
            fighterAmount: el.fighterAmount,
            boosterAmount: el.boosterAmount,
            championsPassAmount: el.championsPassAmount
        })
    })
    const tx = await program.methods
        .updateEvent(
            new BN(time_start),
            new BN(time_end),
            tournament_type,
            updated_rank_rewards
        )
        .accounts({
            creator: wallet.publicKey,
            program: program_pda,
            event: event_account_to_pubkey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([])
        .rpc();

    return {
        tx
    }
}

export { createEvent, updateEvent }