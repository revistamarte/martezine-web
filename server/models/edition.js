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

editionSchema.method("toJSON", function () {
    const object = this.toObject();
    return {
        _id: object._id,
        name: object.name,
        editionId: object.editionId,
        releaseDate: object.releaseDate,
        description: object.description,
    }
})

export default mongoose.model("Edition", editionSchema);
