// models/Competition.ts
import mongoose from 'mongoose';


const mysteryBoxSchema = new mongoose.Schema({
    pubkey: String,
    fighterMintAllowance: Number,
    boosterMintAllowance: Number,
    championsMintAllowance: Number,
    nonce: Number
});


const gameAssetAttributesSchema = new mongoose.Schema({
    traitType: String,
    value: String,
});

const gameAssetMetadataSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    animation_url: String,
    external_url: String,
    attributes: [gameAssetAttributesSchema],
});
const gameAssetSchema = new mongoose.Schema({
    pubkey: String,
    isLocked: Boolean,
    isBurned: Boolean,
    isMinted: Boolean,
    owner: String,
    metadata: gameAssetMetadataSchema,
    nonce: Number,
});

const gameAssetLinkSchema = new mongoose.Schema({
    pubkey: String,
    gameAsset: gameAssetSchema,
    isFree: Boolean,
    nonce: Number
});

const userSchema = new mongoose.Schema({
    pubkey: String,
    mysteryBoxes: [mysteryBoxSchema],
    gameAssets: [gameAssetLinkSchema]
});

export default mongoose.models.player || mongoose.model('player', userSchema);
