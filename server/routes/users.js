const express = require("express");
const router = express.Router();
const { userController } = require("../controller");

// Getting all
router.get("/", async (req, res) => {
    try {
        const users = await userController.getAllUsers();
        res.json(users);
    } catch (e) {
        res.status(500).json({ message: e.message });
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

// // Creating one
// router.post("/", async (req, res) => {
//     try {
//         const user = await controller.createUser({
//             name: req.body.name,
//             email: req.body.email,
//             subscription: "free"
//         });
//         res.status(201).json(user);
//     } catch (e) {
//         res.status(400).json({
//             message: e.message
//         });
//     }
// });

// Updating one
router.patch("/:id", async (req, res) => {
    try {
        const user = await userController.patchUser(req.params.id, req.body);
        res.json(user);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
});

// Deleting one
router.delete("/:id", async (req, res) => {
    try {
        const user = await userController.deleteUser(req.params.id);
        res.json({
            message: `User '${user.email}' deleted`
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
});

module.exports = router;
