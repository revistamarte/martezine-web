const express = require("express");
const route = express.Router();
const { authController } = require("../controllers");

// refresh token
route.post("/token", async (req, res) => {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null) {
            return res.status(401).json({
                message: "No refresh token provided."
            });
        }
        const tokens = await authController.refreshAccessToken(refreshToken);
        res.json(tokens);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});

module.exports = route
