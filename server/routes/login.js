const express = require("express");
const route = express.Router();
const { loginController } = require("../controller");

// login
route.post("/login", async (req, res) => {
    try {
        const user = await loginController.login({
            email: req.body.email,
            password: req.body.password
        });
        if (user == null) {
            res.status(400).json({
                message: "Password is incorrect."
            });
            return;
        }
        res.json(user);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});

// sign up
route.post("/signup", async (req, res) => {
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

module.exports = route;
