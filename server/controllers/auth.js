const express = require("express");
const jwt = require("jsonwebtoken");
const { Token, User, HttpError } = require("../models");
const { UserRole } = require("../models/enums");

/**
 * @type {express.RequestHandler}
 */
async function authenticateToken(req, res, next) {
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
    await deleteTokensByUserId(user.id)
    const token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 0 });
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
        throw new HttpError(401, "Invalid refresh token.");
    }
    let user = await User.findById(tokenFromDb.userId);
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
 */
async function deleteTokensByUserId(userId) {
    return await Token.deleteMany({ userId: userId });
}

module.exports = {
    generateTokens,
    refreshAccessToken,
    authenticateToken
}
