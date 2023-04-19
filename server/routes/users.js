const express = require("express");
const router = express.Router();
const { user } = require("../models");

const getUser = async (req, res, next) => {
    let oneUser;
    try {
        oneUser = await user.findById(req.params.id);
        if (oneUser == null) {
            return res.send(404).json({
                message: "User not found."
            });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: e.message
        });
    }
    req.user = oneUser;
    next();
}

// Getting all
router.get("/", async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// Getting one
router.get("/:id", getUser, async (req, res) => {
    res.send(req.user.name);
});
// Creating one
router.post("/", async (req, res) => {
    const userModel = new user({
        name: req.body.name,
        email: req.body.email,
        subscription: req.body.subscription
    });
    try {
        const newUser = await userModel.save();
        res.status(201).json(newUser);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});
// Updating one
router.patch("/:id", async (req, res) => {

});
// Deleting one
router.delete("/:id", async (req, res) => {

});

module.exports = router;
