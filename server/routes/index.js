const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
router.use("/users", usersRouter);

const authRouter = require("./auth");
router.use(authRouter);

module.exports = router;
