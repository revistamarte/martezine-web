import express from "express";
const router = express.Router();

import loginRouter from "./login.js";
router.use(loginRouter);

import authRouter from "./auth.js";
router.use(authRouter);

import usersRouter from "./users.js";
router.use("/user", usersRouter);

import editionRouter from "./editions.js";
router.use("/edition", editionRouter);

import subscriptionRouter from "./subscriptions.js";
router.use("/subscription", subscriptionRouter);

export default router;
