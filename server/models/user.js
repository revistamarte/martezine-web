const mongoose = require("mongoose");

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
        default: "none"
    },
    subscription: {
        type: String,
        required: true,
        default: "free"
    },
    memberSince: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

module.exports = mongoose.model("User", userSchema);
