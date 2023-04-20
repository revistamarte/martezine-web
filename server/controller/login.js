const userController = require("./user");
const credentialController = require("./credential");
const bcrypt = require("bcrypt");

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
    if (await bcrypt.compare(model.password, encodedPassword)) {
        return user;
    }
    return null;
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
    const credential = await credentialController.createCredential({
        userId: user.id, encodedPassword: encodedPassword
    });
    return { user, credential };
}

module.exports = {
    login, signup
}
