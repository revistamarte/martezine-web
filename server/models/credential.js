const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        immutable: true,
        unique: true
    },
    encodedPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("credential", credentialSchema);
