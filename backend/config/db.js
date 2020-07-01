/**
 * Created by anurag on 12/29/16.
 */

const CONFIG = require('./');
let mongoose = require('mongoose');
module.exports = {connect: connect};

function connect() {
    webLog(`DB trying to connect from ${CONFIG.DB} on ` + new Date());
    const options = {
        keepAlive: 1,
        autoReconnect: true,
        retryWrites:false,
        poolSize: 10
    };
    return mongoose.connect(CONFIG.DB, options);
}
