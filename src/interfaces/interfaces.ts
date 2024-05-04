
// Specific interfaces for each tournament type
import anchor from "@coral-xyz/anchor";

interface PrelimsType {
    prelims: {}; // Could add specific properties for prelims later
}

interface EarlyPrelimsType {
    earlyPrelims: {}; // Could add specific properties for earlyPrelims later
}

interface MainCardType{
    mainCard: {}; // Could add specific properties for mainCard later
}

// Union type to encompass all possible tournament types
type TournamentType = PrelimsType | EarlyPrelimsType | MainCardType;

interface RankReward {
    startRank: anchor.BN;
    endRank: anchor.BN | null; // Allow null for open-ended ranges
    prizeAmount: number;
    fighterAmount: number;
    boosterAmount: number;
    championsPassAmount: number;
}


interface Stat {
    name: string;
    displayName: string;
    shortDisplayName: string;
    description: string;
    abbreviation: string;
    value: number;
    displayValue: string;
}


// Export the interfaces
export { PrelimsType, EarlyPrelimsType, MainCardType, TournamentType, RankReward, Stat };