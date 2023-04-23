const express = require("express");

class HttpError {

    /**
     * @typedef HttpErrorBody
     * @property {Number} status
     * @property {String} message
    */

    /**
     * @param {Number} status 
     * @param {String} message 
     */
    constructor(status, message) {
        this.status = status || 500;
        this.message = message;
        this.body = {
            status: this.status,
            message: this.message
        }
    }

    /** @type {Number} */
    status;
    /** @type {String} */
    message;
    /** @type {HttpErrorBody} */
    body;

    /**
     * @param {express.Response} res 
     */
    send(res) {
        res.status(this.status).json(this.body);
    }

}

module.exports = HttpError;
