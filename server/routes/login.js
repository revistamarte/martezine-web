const express = require("express");
const route = express.Router();
const { loginController } = require("../controllers");

// login
route.post("/login", validateFields, async (req, res) => {
    try {
        const tokens = await loginController.login({
            email: req.body.email,
            password: req.body.password
        });
        res.json(tokens);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});

// signup
route.post("/signup", validateFields, async (req, res) => {
    try {
        if (req.body.password !== req.body.repeatPassword) {
            res.status(400).json({
                message: "Passwords don't match."
            });
            return;
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
        res.status(400).json({
            message: e.message
        });
    }
});

/**
 * @type {express.RequestHandler}
 */
async function validateFields(req, res, next) {
    next();
}

module.exports = route;
