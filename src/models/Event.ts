// models/Event.ts
import mongoose from 'mongoose';

const fightCardSchema = new mongoose.Schema({
    pubkey: String,
    category: String,
    fighterBlue: {
        id: String,
        name: String,
        shortName:String,
        winner: Boolean,
        stats: {
            takedownsAttempted: Number,
            takedownsLanded: Number,
            takedownsSlams: Number,
            sigClinchHeadStrikesAttempted: Number,
            sigClinchHeadStrikesLanded: Number,
            sigClinchBodyStrikesAttempted: Number,
            sigClinchBodyStrikesLanded: Number,
            sigClinchLegStrikesAttempted: Number,
            sigClinchLegStrikesLanded: Number,
            sigGroundHeadStrikesAttempted: Number,
            sigGroundHeadStrikesLanded: Number,
            sigGroundBodyStrikesAttempted: Number,
            sigGroundBodyStrikesLanded: Number,
            sigGroundLegStrikesAttempted: Number,
            sigGroundLegStrikesLanded: Number,
            strikingStrength: {
                knockDowns: Number,
                sigDistanceHeadStrikesAttempted: Number,
                sigDistanceHeadStrikesLanded: Number,
                sigDistanceBodyStrikesAttempted: Number,
                sigDistanceBodyStrikesLanded: Number,
                sigDistanceLegStrikesAttempted: Number,
                sigDistanceLegStrikesLanded: Number,
            },
            grapplingStrength: {
                submissions: Number,
                secondsInControl: Number,
                advanceToHalfGuard: Number,
                advanceToSide: Number,
                advanceToMount: Number,
                advanceToBack: Number,
            }
        }
    },
    fighterRed: {
        id: String,
        name: String,
        shortName:String,
        winner: Boolean,
        stats: {
            takedownsAttempted: Number,
            takedownsLanded: Number,
            takedownsSlams: Number,
            sigClinchHeadStrikesAttempted: Number,
            sigClinchHeadStrikesLanded: Number,
            sigClinchBodyStrikesAttempted: Number,
            sigClinchBodyStrikesLanded: Number,
            sigClinchLegStrikesAttempted: Number,
            sigClinchLegStrikesLanded: Number,
            sigGroundHeadStrikesAttempted: Number,
            sigGroundHeadStrikesLanded: Number,
            sigGroundBodyStrikesAttempted: Number,
            sigGroundBodyStrikesLanded: Number,
            sigGroundLegStrikesAttempted: Number,
            sigGroundLegStrikesLanded: Number,
            strikingStrength: {
                knockDowns: Number,
                sigDistanceHeadStrikesAttempted: Number,
                sigDistanceHeadStrikesLanded: Number,
                sigDistanceBodyStrikesAttempted: Number,
                sigDistanceBodyStrikesLanded: Number,
                sigDistanceLegStrikesAttempted: Number,
                sigDistanceLegStrikesLanded: Number,
            },
            grapplingStrength: {
                submissions: Number,
                secondsInControl: Number,
                advanceToHalfGuard: Number,
                advanceToSide: Number,
                advanceToMount: Number,
                advanceToBack: Number,
            }
        }
    },
    title: Boolean,
    result: String
});

const ranksSchema = new mongoose.Schema({
    startRank: Number,
    endRank: Number,
    prizeAmount: Number,
    fighterAmount: Number,
    boosterAmount: Number,
    championsPassAmount: Number
});

const playerSchema = new mongoose.Schema({
    pubkey: String,
    name: String,
    totalPoints: Number,
    rank: Number,
    nonce: Number,
    collected: Boolean
});

const eventSubSchema = new mongoose.Schema({
    pubkey: String,
    type: String,
    fightCards: [fightCardSchema],
    prizePool: Number,
    ranks: [ranksSchema],
    participants: [String],
    players: [playerSchema] // Include player rankings in each event
});

const eventSchema = new mongoose.Schema({
    gameWeek: Number,
    title: String,
    dateStart: Number,
    dateEnd: Number,
    image: String,
    events: [eventSubSchema]
});

export default mongoose.models.events || mongoose.model('events', eventSchema);
