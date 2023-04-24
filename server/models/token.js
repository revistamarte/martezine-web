const mongoose = require("mongoose");

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

module.exports = mongoose.model("Token", tokenSchema);
