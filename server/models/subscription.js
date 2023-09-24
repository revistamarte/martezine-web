import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: String,
        immutable: true,
        required: true
    },
    editionId: {
        type: String,
        immutable: true,
        required: true
    },
    subscribedSince: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    expiration: {
        type: Date,
        default: null
    }
});

export default mongoose.model("Subscription", subscriptionSchema);
