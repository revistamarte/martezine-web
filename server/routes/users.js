import express from "express";
import userController from "../controllers/user.js";
import { authenticateToken } from "../controllers/auth.js";
import HttpError from "../models/error.js";

const router = express.Router();

// Getting own user
router.get("/", authenticateToken, async (req, res) => {
    try {
        const user = await userController.getUser(req.user.id);
        res.json(user);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting all users
router.get("/all", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const user = await userController.getAllUsers();
        res.json(user);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting one
router.get("/:id", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const user = await userController.getUser(req.params.id);
        res.json(user);
    } catch (e) {
        return res.status(e.status).json(e.body);
    }
});

// Updating one
router.patch("/:id", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin && req.user.id != req.params.id) {
            return new HttpError(403, "You can only update your own information.").send(res);
        }
        const user = await userController.patchUser(req.params.id, req.body);
        return res.json(user);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Deleting one
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin && req.user.id != req.params.id) {
            return new HttpError(403, "You can only delete your own account.").send(res);
        }
        const user = await userController.deleteUser(req.params.id);
        return res.json({
            message: `User '${user.email}' deleted`
        });
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

export default router;
