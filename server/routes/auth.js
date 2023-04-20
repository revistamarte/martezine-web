const express = require("express");
const route = express.Router();
const { authController } = require("../controllers");
const { refreshAccessToken } = require("../auth");

// login
route.post("/login", async (req, res) => {
    try {
        const tokens = await authController.login({
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
route.post("/signup", async (req, res) => {
    try {
        if (req.body.password !== req.body.repeatPassword) {
            res.status(400).json({
                message: "Passwords don't match."
            });
            return;
        }
        const info = await authController.signup({
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

// refresh token
route.post("/token", async (req, res) => {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null) {
            return res.status(401).json({
                message: "No refresh token provided."
            });
        }
        const tokens = await refreshAccessToken(refreshToken);
        res.json(tokens);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});

module.exports = route;
