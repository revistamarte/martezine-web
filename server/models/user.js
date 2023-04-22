const mongoose = require("mongoose");
const { UserRole, UserSubscription, UserPronouns } = require("./enums");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    pronouns: {
        type: String,
        default: UserPronouns.NONE
    },
    role: {
        type: String,
        default: UserRole.REGULAR
    },
    subscription: {
        type: String,
        required: true,
        default: UserSubscription.FREE
    },
    memberSince: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

userSchema.method("toJSON", function() {
    const object = this.toObject();
    const id = object._id;
    delete object._id;
    delete object.__v;
    return { id, ...object };
})

module.exports = mongoose.model("User", userSchema);
