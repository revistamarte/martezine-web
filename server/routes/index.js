const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
router.use("/user", usersRouter);

const loginRouter = require("./login");
router.use(loginRouter);

const authRouter = require("./auth");
router.use(authRouter);

module.exports = router;
