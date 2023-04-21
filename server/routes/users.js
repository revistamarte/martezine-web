const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { authenticateToken } = require("../auth");

// Getting own user
router.get("/", authenticateToken, async (req, res) => {
    try {
        const user = await userController.getUser(req.user.id);
        res.json(user);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

// Getting one
router.get("/:id", async (req, res) => {
    try {
        const user = await userController.getUser(req.params.id);
        if (user == null) {
            return res.status(404).json({
                message: "User not found."
            });
        } else {
            res.json(user);
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
});

// Updating one
router.patch("/:id", authenticateToken, async (req, res) => {
    try {
        if (req.user.id != req.params.id) {
            res.status(403).json({
                message: "You can only update your own information."
            });
        }
        const user = await userController.patchUser(req.params.id, req.body);
        return res.json(user);
    } catch (e) {
        return res.status(400).json({
            message: e.message
        });
    }
});

// Deleting one
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        if (req.user.id != req.params.id) {
            res.status(403).json({
                message: "You can only delete your own account."
            });
        }
        const user = await userController.deleteUser(req.params.id);
        return res.json(user);
        // res.json({
        //     message: `User '${user.email}' deleted`
        // });
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            message: e.message
        });
    }
});

module.exports = router;
