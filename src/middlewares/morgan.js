const morgan = require('morgan');
const logger = require('../utils/logger');
const { NODE_ENV } = require('../config');

const stream = {
    write: (message) => logger.http(message)
};

const skip = () => {
    const isdev = NODE_ENV || 'development';
    return isdev !== 'development';
};

const morganlogger = morgan(':remote-addr :user-agent :method :url :status :res[content-length] - :response-time ms', {
    stream,
    skip
});

module.exports = morganlogger;
