import Edition from "../models/edition.js";
import HttpError from "../models/error.js";

/**
 * @typedef EditionModel
 * @property {String} name
 * @property {String} editionId
 * @property {Date} releaseDate
 * @property {String} description
 */

async function getAllEditions() {
    return await Edition.find();
}

/**
 * @param {String} id
 */
async function getEdition(id) {
    const edition = isValidId(id) ? await Edition.findById(id) : await Edition.find({ editionId: id });
    if (edition == null || (edition instanceof Array && edition.length == 0)) {
        throw new HttpError(404, "Edition not found.");
    }
    return edition;
}

/**
 * @param {EditionModel} model
 */
async function createEdition(model) {
    const editionModel = new Edition({
        name: model.name,
        editionId: model.editionId,
        releaseDate: model.releaseDate,
        description: model.description
    });
    return await editionModel.save();
}

/**
 * @param {String} id 
 */
function isValidId(id) {
    return id.match(/^[0-9a-fA-F]{24}$/) != null;
}

const editionController = {
    getAllEditions,
    getEdition,
    createEdition
};
export default editionController;