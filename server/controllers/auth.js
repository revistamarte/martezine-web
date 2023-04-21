const bcrypt = require("bcrypt");
const userController = require("./user");
const credentialController = require("./credential");
const { generateTokens } = require("../auth");
const { Token } = require("../models")

/**
 * @typedef LoginModel
 * @property {String} email
 * @property {String} password
 */

/**
 * @param {LoginModel} model
 */
async function login(model) {
    const user = await userController.getUserByEmail(model.email);
    const encodedPassword = await credentialController
        .getEncodedPassword(user.id);
    if (!await bcrypt.compare(model.password, encodedPassword)) {
        throw new Error("Password is incorrect.");
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
async function signup(model) {
    const user = await userController.createUser({
        name: model.name,
        lastName: model.lastName,
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

module.exports = {
    login, signup
}
