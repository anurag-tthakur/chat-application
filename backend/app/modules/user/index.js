/**
 * Created by Anurag on 05/16/20.
 */

/**Require models/files**/
import BLManager from './blManager';
const Utils = require('../../utils');
const Constants = require('../../../app/common/constants');

module.exports = {

    addUser: async function (request, response) {
        Utils.webLog('addUser', request.body, 'addUser', 1.0, 'Anurag');
        let [error, data] = await Utils.parseResponse(new BLManager().addUser(request.body));
        if (!data)
            return Utils.handleError(error, request, response);
        return Utils.response(response, data, 'success message', true, 200);
    },
    getUsers: async function (request, response) {
        Utils.webLog('getUsers', request.body, 'getUsers', 1.0, 'Anurag');
        let [error, data] = await Utils.parseResponse(new BLManager().getUsers(request.body));
        if (!data)
            return Utils.handleError(error, request, response);
        return Utils.response(response, data, 'success message', true, 200);
    }
}
