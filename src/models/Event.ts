// models/Event.ts
import mongoose from 'mongoose';

const fightCardSchema = new mongoose.Schema({
    pubkey: String,
    category: String,
    fighterBlue: {
        name: String
    },
    fighterRed: {
        name: String
    },
    title: Boolean,
    winner: String
});

const ranksSchema = new mongoose.Schema({
    startRank: Number,
    endRank: Number,
    prizeAmount: Number,
    fighterAmount: Number,
    boosterAmount: Number,
    championsPassAmount: Number
});

const eventSubSchema = new mongoose.Schema({
    pubkey: String,
    type: String,
    fightCards: [fightCardSchema],
    prizePool: Number,
    ranks: [ranksSchema],
    participants: Number
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
