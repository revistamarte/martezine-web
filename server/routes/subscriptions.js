import express from "express";
import subscriptionController from "../controllers/subscription.js";
import { authenticateToken } from "../controllers/auth.js";
import HttpError from "../models/error.js";

const router = express.Router();

// Getting all subscriptions
router.get("/", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const subscriptions = await subscriptionController.getAllSubscriptions();
        res.json(subscriptions);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting all for the current user
router.get("/me", authenticateToken, async (req, res) => {
    try {
        const subscriptions = await subscriptionController.getUserSubscriptions(req.user.id);
        res.json(subscriptions);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting history for the current user
router.get("/me/history", authenticateToken, async (req, res) => {
    try {
        const subscriptions = await subscriptionController.getUserSubscriptionHistory(req.user.id);
        res.json(subscriptions);
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
        const subscription = await subscriptionController.getSubscription(req.params.id);
        res.json(subscription);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting all by user id
router.get("/user/:userId", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const subscriptions = await subscriptionController.getUserSubscriptions(req.params.userId);
        res.json(subscriptions);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Getting history by user id
router.get("/user/:userId/history", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            return res.sendStatus(403);
        }
        const subscriptions = await subscriptionController.getUserSubscriptionHistory(req.params.userId);
        res.json(subscriptions);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

// Creating many
router.post("/", authenticateToken, async (req, res) => {
    try {
        if (!req.isAdmin) {
            throw res.sendStatus(403);
        }
        if (!req.body || !(req.body instanceof Array)) throw new HttpError(400, "Subscription list was not provided");
        req.body.forEach((subs, index) => {
            if (!subs.userId) throw new HttpError(400, `User ID was not provided for item at index ${index}.`);
            if (!subs.editionId) throw new HttpError(400, `Edition ID was not provided for item at index ${index}.`);
            subs.expiration = subs.expiration ? stringToDate(subs.expiration) : null;
        })
        const subscriptions = await subscriptionController.createSubscriptions(req.body);
        return res.json(subscriptions);
    } catch (e) {
        return new HttpError(e.status, e.message).send(res);
    }
});

function stringToDate(str) {
    const dateComponents = str.split("-");
    return new Date(+dateComponents[0], +dateComponents[1] - 1, +dateComponents[2]);
}

export default router;
