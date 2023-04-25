import express from "express";
const router = express.Router();

import usersRouter from "./users.js";
router.use("/user", usersRouter);

import loginRouter from "./login.js";
router.use(loginRouter);

import authRouter from "./auth.js";
router.use(authRouter);

export default router;
