const express = require("express");
const route = express.Router();
const { authController } = require("../controllers");
const { HttpError } = require("../models");

// refresh token
route.post("/token", async (req, res) => {
    try {
        const refreshToken = req.body.token;
        if (refreshToken == null) {
            return new HttpError(400, "No token provided.").send(res);
        }
        const tokens = await authController.refreshAccessToken(refreshToken);
        res.json(tokens);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

module.exports = route
