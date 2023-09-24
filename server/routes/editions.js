import express from "express";
import editionController from "../controllers/edition.js";
import { authenticateToken } from "../controllers/auth.js";
import HttpError from "../models/error.js";

const router = express.Router();

// Getting all editions
router.get("/", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const editions = await editionController.getAllEditions();
        res.json(editions);
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
        const edition = await editionController.getEdition(req.params.id);
        res.json(edition);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Creating one
router.post("/", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            throw new HttpError(403, "You must be an admin to register a new edition");
        }
        if (!req.body.name) throw new HttpError(400, "Name was not provided");
        if (!req.body.editionId) throw new HttpError(400, "Edition ID was not provided");
        if (!req.body.releaseDate) throw new HttpError(400, "Release date was not provided");
        const dateComponents = req.body.releaseDate.split("-");
        req.body.releaseDate = new Date(+dateComponents[0], +dateComponents[1] - 1, +dateComponents[2]);
        const edition = await editionController.createEdition(req.body);
        return res.json(edition);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

export default router;
