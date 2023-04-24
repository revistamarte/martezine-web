const { User, Token, HttpError } = require("../models");
const credentialController = require("./credential");

/**
 * @typedef UserModel
 * @property {String} name
 * @property {String} lastName
 * @property {String} email
 * @property {String} pronouns
 * @property {String} subscription
 * @property {String} role
 */

async function getAllUsers() {
    return await User.find();
}

/**
 * @param {String} id
 */
async function getUser(id) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    const user = await User.findById(id);
    if (user == null) throw new HttpError(404, "User not found.");
    return user;
}

/**
 * @param {String} email 
 */
async function getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    if (user == null) throw new HttpError(404, "User not found.");
    return user;
}

/**
 * @param {UserModel} model
 */
async function createUser(model) {
    const userModel = new User({
        name: model.name,
        lastName: model.lastName,
        email: model.email,
        pronouns: model.pronouns,
        subscription: model.subscription
    });
    return await userModel.save();
}
/**
 * @param {String} id
 * @param {UserModel} model
 */
async function patchUser(id, model) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    return await User.findByIdAndUpdate(id, model, { new: true });
}

/**
 * @param {String} id 
 */
async function deleteUser(id) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    const user = await User.findByIdAndDelete(id);
    if (user == null) throw new HttpError(404, "User not found.");
    await credentialController.deleteCredential(id);
    await Token.deleteMany({ userId: id });
    return user;
}

/**
 * @param {String} id 
 */
function isValidId(id) {
    return id.match(/^[0-9a-fA-F]{24}$/) != null;
}

module.exports = {
    getAllUsers,
    getUser,
    getUserByEmail,
    createUser,
    patchUser,
    deleteUser
}
