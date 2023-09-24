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

subscriptionSchema.method("toJSON", function () {
    const object = this.toObject();
    return {
        _id: object._id,
        userId: object.userId,
        editionId: object.editionId,
        subscribedSince: object.subscribedSince,
        expiration: object.expiration,
        isExpired: object.expiration != null && object.expiration < Date.now()
    };
})

export default mongoose.model("Subscription", subscriptionSchema);
