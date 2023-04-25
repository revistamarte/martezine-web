import express from "express";
import authController from "../controllers/auth.js";
import userController from "../controllers/user.js";
import credentialController from "../controllers/credential.js";
import HttpError from "../models/error.js";

const route = express.Router();

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

// send email confirmation
route.post("/confirmation", async (req, res) => {
    try {
        const email = req.body.email;
        if (!email) {
            return new HttpError(400, "No email provided.").send(res);
        }
        const user = await userController.getUserByEmail(email);
        const isConfirmed = await credentialController.isConfirmedUser(user.id);
        if (isConfirmed) {
            return new HttpError(400, "User is already confirmed.").send(res);
        }
        authController.sendConfirmationEmail(user);
        return res.json({
            message: `Email sent to '${email}'.`
        });
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// confirm user with token
route.post("/confirmation/:token", async (req, res) => {
    try {
        const confirmedUser = await authController.confirmUserWithToken(req.params.token);
        return res.json({
            message: `User '${confirmedUser.email}' was confirmed.`
        });
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

export default route;
