
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

interface DevEnv {
    dev: {};
}

interface ProdEnv {
    prod: {};
}

type Env = DevEnv | ProdEnv;

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

interface FightStatus {
    "$ref": string;
    "clock": number;
    "displayClock": string;
    "period": number;
    "type": {
        "id": string;
        "name": string;
        "state": string;
        "completed": boolean;
        "description": string;
        "detail": string;
        "shortDetail": string;
    },
    "result": {
        "id": number;
        "name": string;
        "displayName": string;
        "shortDisplayName": string;
    },
    "featured": boolean;
}



interface AttributeRange {
    min: number;
    max: number;
}

interface RarityAttributes {
    power: AttributeRange;
    lifespan: AttributeRange;
}

interface Common {
    common: RarityAttributes;
}

interface Uncommon {
    uncommon: RarityAttributes;
}

interface Rare {
    rare: RarityAttributes;
}

interface Epic {
    epic: RarityAttributes;
}

interface Legendary {
    legendary: RarityAttributes;
}

type FighterRarityType = Common | Uncommon | Rare | Epic | Legendary;


interface ValueRange {
    min: number;
    max: number;
}

interface BoosterRarityAttributes {
    value: ValueRange;
}

interface CommonBooster {
    common: BoosterRarityAttributes;
}

interface UncommonBooster {
    uncommon: BoosterRarityAttributes;
}

interface RareBooster {
    rare: BoosterRarityAttributes;
}

interface EpicBooster {
    epic: BoosterRarityAttributes;
}

interface LegendaryBooster {
    legendary: BoosterRarityAttributes;
}

type BoosterRarityType = CommonBooster | UncommonBooster | RareBooster | EpicBooster | LegendaryBooster;

// Export the interfaces
export { PrelimsType, EarlyPrelimsType, MainCardType, TournamentType, RankReward, Stat, FightStatus, Env, FighterRarityType, BoosterRarityType };