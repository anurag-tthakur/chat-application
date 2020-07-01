/**
 * Created by Sanjeet on 14/03/18.
 */
"use strict";
const Config = require('../../config');

class Utils {
    static response(res, data, message, success, code = 200) {
        let messageObj = {
            "msg": message
        };

        let responseObj = {
            responseData: data,
            message: [messageObj],
            success: success,
            code: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    }

    static webLog(message, payload = {}, methodName, requestID = 0, developerName = 'Developer', type = 'info') {
        if (Config.IS_CONSOLE_LOG === "true") {
            console.log(JSON.stringify({
                message: message,
                developerAlias: developerName,
                requestID: requestID,
                type: type,
                timestamp: new Date(),
                payload: payload
            }));
        }
    }

    static async parseResponse(promise) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => [err]);
    }

    static handleError(err, req, res) {
        if (!res)
            return false;
        err = err || {};
        console.log(err);
        const msg = err.message ? err.message : 'error message';
        const code = err.code ? err.code : 502;
        this.response(res, {}, msg, false, code);
    }
}
module.exports = Utils;
