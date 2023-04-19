const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    subscription: {
        type: String,
        require: true
    },
    memberSince: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

module.exports = mongoose.model("User", userSchema);
