const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
router.use("/users", usersRouter);

const loginRouter = require("./login");
router.use(loginRouter);

module.exports = router;
