import bcrypt from "bcrypt";
import userController from "./user.js";
import credentialController from "./credential.js";
import { generateTokens } from "./auth.js";
import HttpError from "../models/error.js";

/**
 * @typedef LoginModel
 * @property {String} email
 * @property {String} password
 */

/**
 * @param {LoginModel} model
 */
export async function login(model) {
    const user = await userController.getUserByEmail(model.email);
    const encodedPassword = await credentialController
        .getEncodedPassword(user.id);
    if (!await bcrypt.compare(model.password, encodedPassword)) {
        throw new HttpError(400, "Password is incorrect.");
    }
    if (!await credentialController.isConfirmedUser(user.id)) {
        throw new HttpError(403, "User is not confirmed");
    }
    const userObj = user.toJSON();
    const tokens = await generateTokens(userObj);
    return tokens;
}

/**
 * @typedef SignupModel
 * @property {String} name
 * @property {String} lastName
 * @property {String} email
 * @property {String} password
 * @property {String} pronouns
 */

/**
 * @param {SignupModel} model
 */
export async function signup(model) {
    const user = await userController.createUser({
        fullname: model.fullname,
        birthday: model.birthday,
        email: model.email,
        pronouns: model.pronouns,
        subscription: model.subscription,
    });
    const encodedPassword = await bcrypt.hash(model.password, 10);
    await credentialController.createCredential({
        userId: user.id, encodedPassword: encodedPassword
    });
    return { user };
}

const loginController = {
    login, signup
};
export default loginController;
