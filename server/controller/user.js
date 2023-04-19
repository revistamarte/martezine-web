const { User } = require("../models");
const credentialsController = require("./credential");

/**
 * @typedef UserModel
 * @property {String} [name]
 * @property {String} email
 * @property {String} [subscription]
 */

async function getAllUsers() {
    return await User.find();
}

/**
 * @param {String} id
 */
async function getUser(id) {
    return await User.findById(id);
}

/**
 * @param {UserModel} model
 */
async function createUser(model) {
    const userModel = new User({
        name: model.name,
        email: model.email,
        subscription: model.subscription
    });
    return await userModel.save();
}
/**
 * @param {String} id
 * @param {UserModel} model
 */
async function patchUser(id, model) {
    return await User.findByIdAndUpdate(id, model, { new: true });
}

async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    patchUser,
    deleteUser
}
