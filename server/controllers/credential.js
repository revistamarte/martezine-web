import Credential from "../models/credential.js";

/** 
 * @typedef CredentialModel
 * @property {String} userId
 * @property {String} encodedPassword
 */

/**
 * @param {String} userId
 */
export async function getEncodedPassword(userId) {
    const credential = await Credential.findOne({ userId: userId });
    return credential.encodedPassword;
}

/**
 * @param {CredentialModel} model 
 */
export async function createCredential(model) {
    const credential = new Credential({
        userId: model.userId,
        encodedPassword: model.encodedPassword
    });
    return await credential.save();
}

/**
 * @param {String} userId
 * @param {CredentialModel} model 
 */
export async function patchCredential(userId, model) {
    return await Credential.findOneAndUpdate({ userId: userId }, model, { new: true });
}

/**
 * @param {String} userId
 */
export async function deleteCredential(userId) {
    return await Credential.findOneAndDelete({ userId: userId });
}

/**
 * @param {String} userId
 */
export async function isConfirmedUser(userId) {
    const credential = await Credential.findOne({ userId: userId });
    return credential.confirmed;
}

const credentialController = {
    getEncodedPassword,
    createCredential,
    patchCredential,
    deleteCredential,
    isConfirmedUser
};
export default credentialController;
