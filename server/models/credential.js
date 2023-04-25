import mongoose from "mongoose";

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
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("credential", credentialSchema);
