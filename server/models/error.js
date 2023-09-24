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
        if (status == 500) {
            console.error(message);
        }
    }

    /** @type {Number} */
    status;
    /** @type {String} */
    message;
    /** @type {HttpErrorBody} */
    body;

    /**
     * @param {import("express").Response} res 
     */
    send(res) {
        res.status(this.status).json(this.body);
    }

}

export default HttpError;
