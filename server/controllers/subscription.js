import Subscription from "../models/subscription.js";
import HttpError from "../models/error.js";

/**
 * @typedef SubscriptionModel
 * @property {String} userId
 * @property {String} editionId
 * @property {Date} subscribedSince
 * @property {Date} expiration
 */

async function getAllSubscriptions() {
    return await Subscription.find();
}

/**
 * @param {String} id
 */
async function getSubscription(id) {
    if (!isValidId(id)) throw new HttpError(400, "Invalid edition ID.");
    const subscription = await Subscription.findById(id);
    if (subscription == null) throw new HttpError(404, "Subscription not found.");
    return subscription;
}

/**
 * @param {String} userId
 */
async function getUserSubscriptions(userId) {
    if (!isValidId(userId)) throw new HttpError(400, "Invalid user ID.");
    const subscriptions = await Subscription.find({
        userId: userId, $or: [{ expiration: { $gt: Date.now() } }, { expiration: null }] 
    });
    if (subscriptions == null || subscriptions.length == 0) {
        throw new HttpError(404, "No subscriptions found for this user ID.");
    }
    return subscriptions;
}

/**
 * @param {String} userId
 */
async function getUserSubscriptionHistory(userId) {
    if (!isValidId(userId)) throw new HttpError(400, "Invalid user ID.");
    const subscriptions = await Subscription.find({ userId: userId }).sort({ subscribedSince: -1 });
    if (subscriptions == null || subscriptions.length == 0) {
        throw new HttpError(404, "No subscriptions history found for this user ID.");
    }
    return subscriptions;
}

/**
 * @param {SubscriptionModel} model
 */
async function createSubscription(model) {
    const subscriptionModel = new Subscription({
        userId: model.userId,
        editionId: model.editionId,
        subscribedSince: model.subscribedSince,
        expiration: model.expiration
    });
    return await subscriptionModel.save();
}

/**
 * @param {SubscriptionModel[]} models
 */
async function createSubscriptions(models) {
    const docs = models.map(model => new Subscription({
        userId: model.userId,
        editionId: model.editionId,
        subscribedSince: model.subscribedSince,
        expiration: model.expiration
    }));
    const result = await Subscription.insertMany(docs);
    return result;
}

/**
 * @param {String} id 
 */
function isValidId(id) {
    return id.match(/^[0-9a-fA-F]{24}$/) != null;
}

const editionController = {
    getAllSubscriptions,
    getSubscription,
    getUserSubscriptions,
    getUserSubscriptionHistory,
    createSubscription,
    createSubscriptions
};
export default editionController;