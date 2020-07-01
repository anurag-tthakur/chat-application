/**
 * Created by Anurag on 05/16/20.
 */

/**Require models/files**/
import BLManager from './blManager';
const Utils = require('../../utils');
const Constants = require('../../../app/common/constants');

module.exports = {

    getUserDetails: async function (request, response) {
        Utils.webLog('getUserDetails', request.body, 'getUserDetails', request.headers[Constants.HEADER_KEY_REQUEST_ID_KEY], 'Anurag');
        let [error, data] = await Utils.parseResponse(new BLManager().getUserDetails(request.body));
        if (!data)
            return Utils.handleError(error, request, response);
        return Utils.response(response, data, 'success message', true, 200);
    }
}
