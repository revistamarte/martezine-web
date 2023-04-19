const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    subscription: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

module.exports = mongoose.model("User", userSchema);
