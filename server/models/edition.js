import mongoose from "mongoose";

const editionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    editionId: {
        type: String,
        immutable: true,
        required: true,
        unique: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model("Edition", editionSchema);
