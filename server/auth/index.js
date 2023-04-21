const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Token } = require("../models");
const { getUser } = require("../controllers/user");

/**
 * @type {express.RequestHandler}
 */
async function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        return res.status(401).json({
            message: "No access token provided."
        });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                message: "Invalid access token."
            });
        }
        req.user = user;
        next()
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
async function generateTokens(user) {
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
    await Token.deleteMany({ userId: user.id })
    const token = crypto.randomBytes(128).toString("hex");;
    const tokenModel = new Token({
        token: token,
        userId: user.id
    });
    await tokenModel.save();
    return token;
}

/**
 * @param {String} refreshToken
 * @returns {TokenPair}
 */
async function refreshAccessToken(refreshToken) {
    const tokenFromDb = await getTokenFromDbAndDelete(refreshToken);
    if (tokenFromDb == null) {
        throw new Error("Invalid refresh token.");
    }
    let user = await getUser(tokenFromDb.userId);
    return await generateTokens(user.toJSON());
}

/**
 * @param {String} token
 */
async function getTokenFromDbAndDelete(token) {
    return await Token.findOneAndDelete({ token: token });
}

module.exports = {
    generateTokens,
    refreshAccessToken,
    authenticateToken
}
