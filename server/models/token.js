import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
        immutable: true,
        required: true
    },
    userId: {
        type: String,
        immutable: true,
        required: true
    },
    type: {
        type: String,
        immutable: true,
        required: true
    }
});

export default mongoose.model("Token", tokenSchema);
