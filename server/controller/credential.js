const { Credential } = require("../models");

/** 
 * @typedef CredentialModel
 * @property {String} userId
 * @property {String} encodedPassword
 */

/**
 * @param {String} userId
 */
async function getEncodedPassword(userId) {
    const credential = await Credential.findOne({ userId: userId });
    return credential.encodedPassword;
}

/**
 * @param {CredentialModel} model 
 */
async function createCredential(model) {
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
async function patchCredential(userId, model) {
    return await Credential.findOneAndUpdate({ userId: userId }, model, { new: true });
}

/**
 * @param {String} userId
 */
async function deleteCredential(userId) {
    return await Credential.findOneAndDelete({ userId: userId });
}

module.exports = {
    getEncodedPassword,
    createCredential,
    patchCredential,
    deleteCredential
}
