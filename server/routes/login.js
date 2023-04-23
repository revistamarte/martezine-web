const express = require("express");
const route = express.Router();
const { loginController } = require("../controllers");
const { HttpError } = require("../models");

// login
route.post("/login", validateFields, async (req, res) => {
    try {
        const tokens = await loginController.login({
            email: req.body.email,
            password: req.body.password
        });
        res.json(tokens);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// signup
route.post("/signup", validateFields, async (req, res) => {
    try {
        if (req.body.password !== req.body.repeatPassword) {
            return new HttpError(400, "Passwords don't match.").send(res);
        }
        const info = await loginController.signup({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            pronouns: req.body.pronouns
        });
        res.json(info);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

/**
 * @type {express.RequestHandler}
 */
async function validateFields(req, res, next) {
    next();
}

module.exports = route;
