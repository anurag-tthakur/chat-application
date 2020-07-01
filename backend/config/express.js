/**
 * Created by Anurag on 05/16/20.
 */
const MORGAN = require('morgan');
const BODY_PARSER = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
module.exports = function (app) {

    //For print APIs Logs
    app.use(MORGAN(':method :url :response-time'));
    // parse application/x-www-form-urlencoded
    app.use(BODY_PARSER.urlencoded({limit: '50mb', extended: true}));
    // parse application/json
    app.use(BODY_PARSER.json({limit: '50mb', extended: true}));
    app.use(helmet());
    app.use(cors());
    app.use(compression(9));
};