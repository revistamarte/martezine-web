import HttpError from "../models/error.js";
import User from "../models/user.js";
import authController from "./auth.js";
import credentialController from "./credential.js";

/**
 * @typedef UserModel
 * @property {String} name
 * @property {String} lastName
 * @property {String} email
 * @property {String} pronouns
 * @property {String} subscription
 * @property {String} role
 */

export async function getAllUsers() {
    return await User.find();
}

/**
 * @param {String} id
 */
export async function getUser(id) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    const user = await User.findById(id);
    if (user == null) throw new HttpError(404, "User not found.");
    return user;
}

/**
 * @param {String} email 
 */
export async function getUserByEmail(email) {
    const user = await User.findOne({ email: email });
    if (user == null) throw new HttpError(404, "User not found.");
    return user;
}

/**
 * @param {UserModel} model
 */
export async function createUser(model) {
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
export async function patchUser(id, model) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    return await User.findByIdAndUpdate(id, model, { new: true });
}

/**
 * @param {String} id 
 */
export async function deleteUser(id) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid user ID.");
    const user = await User.findByIdAndDelete(id);
    if (user == null) throw new HttpError(404, "User not found.");
    await credentialController.deleteCredential(id);
    await authController.deleteTokensByUserId(id);
    return user;
}

/**
 * @param {String} id 
 */
function isValidId(id) {
    return id.match(/^[0-9a-fA-F]{24}$/) != null;
}

const userController = {
    getAllUsers,
    getUser,
    getUserByEmail,
    createUser,
    patchUser,
    deleteUser
};
export default userController;
