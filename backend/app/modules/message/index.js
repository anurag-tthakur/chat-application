/**
 * Created by Anurag on 05/16/20.
 */

/**Require models/files**/
import BLManager from './blManager';
const Utils = require('../../utils');
const Constants = require('../../../app/common/constants');

module.exports = {
    addMessages: async function (request, response) {
        Utils.webLog('addMessages', request.body, 'addMessages', 1.0, 'Anurag');
        let [error, data] = await Utils.parseResponse(new BLManager().addMessages(request.body));
        if (!data)
            return Utils.handleError(error, request, response);
        io.emit('newMessage', data);
        return Utils.response(response, data, 'success message', true, 200);
    },
    getMessages: async function (request, response) {
        Utils.webLog('getMessages', request.body, 'getMessages', 1.0, 'Anurag');
        let [error, data] = await Utils.parseResponse(new BLManager().getMessages(request.body));
        if (!data)
            return Utils.handleError(error, request, response);
        return Utils.response(response, data, 'success message', true, 200);
    }
}
