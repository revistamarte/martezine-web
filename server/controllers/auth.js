import express from "express";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { fileURLToPath } from "url";
import userController from "./user.js";
import Token from "../models/token.js";
import HttpError from "../models/error.js";
import Mailer from "../models/mailer.js";
import Credential from "../models/credential.js";
import { UserRole, TokenType } from "../models/enums.js";
import "dotenv/config.js";

const emailConfirmationTemplate = handlebars.compile(
    fs.readFileSync(
        path.join(path.dirname(fileURLToPath(import.meta.url)), "../resources/userconfirmationemail.html"
    )).toString()
);

/**
 * @type {express.RequestHandler}
 */
export async function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        return new HttpError(401, "No access token provided.").send(res);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return new HttpError(403, "Invalid access token.").send(res);
        }
        req.user = user;
        req.isAdmin = user.role == UserRole.ADMIN;
        req.isEditor = user.role == UserRole.EDITOR;
        next();
    });
}

/**
 * @typedef TokenPair
 * @property {String} accessToken
 * @property {String} refreshToken
 */

/**
 * @returns {Promise<TokenPair>}
 */
export async function generateTokens(user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);
    return {
        accessToken, refreshToken
    };
}

/**
 * @returns {String}
 */
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
     });
}

/**
 * @returns {Promise<String>}
 */
async function generateRefreshToken(user) {
    await deleteTokensByUserId(user.id, TokenType.REFRESH);
    const token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 0 });
    const tokenModel = new Token({
        token: token,
        userId: user.id,
        type: TokenType.REFRESH
    });
    await tokenModel.save();
    return token;
}

async function generateEmailConfirmationToken(user) {
    await deleteTokensByUserId(user.id, TokenType.USER_CONFIRMATION);
    const token = jwt.sign(user, process.env.EMAIL_TOKEN_SECRET, { expiresIn: 0 });
    const tokenModel = new Token({
        token: token,
        userId: user.id,
        type: TokenType.USER_CONFIRMATION
    });
    await tokenModel.save();
    return token;
}

/**
 * @param {import("./user").UserModel} user 
 */
export async function sendConfirmationEmail(user) {
    const token = await generateEmailConfirmationToken(user.toJSON());
    const redirectionUrl = `${process.env.HOST}/confirmation/${token}`
    const emailBody = emailConfirmationTemplate({
        redirectionUrl: redirectionUrl
    });
    const info = await Mailer.sendMail({
        to: user.email,
        subject: "Confirm you account",
        body: emailBody
    });
    return info;
}

/**
 * @param {String} token
 */
export async function confirmUserWithToken(token) {
    const tokenFromDb = await getTokenFromDbAndDelete(token);
    if (tokenFromDb == null || tokenFromDb.type != TokenType.USER_CONFIRMATION) {
        throw new HttpError(400, "Invalid refresh token.");
    }
    const user = await userController.getUser(tokenFromDb.userId);
    await Credential.findOneAndUpdate({ userId: user.id }, { $set: { confirmed: true } });
    return user;
}

/**
 * @param {String} refreshToken
 * @returns {Promise<TokenPair>}
 */
export async function refreshAccessToken(refreshToken) {
    const tokenFromDb = await getTokenFromDbAndDelete(refreshToken);
    if (tokenFromDb == null || tokenFromDb.type != TokenType.REFRESH) {
        throw new HttpError(400, "Invalid refresh token.");
    }
    const user = await userController.getUser(tokenFromDb.userId);
    return await generateTokens(user.toJSON());
}

/**
 * @param {String} token
 */
async function getTokenFromDbAndDelete(token) {
    return await Token.findOneAndDelete({ token: token });
}

/**
 * @param {String} token
 * @param {TokenType} type
 */
export async function deleteTokensByUserId(userId, type = null) {
    return await Token.deleteMany({ userId: userId, type: type });
}

const authController = {
    generateTokens,
    refreshAccessToken,
    authenticateToken,
    sendConfirmationEmail,
    confirmUserWithToken,
    deleteTokensByUserId
};
export default authController;
