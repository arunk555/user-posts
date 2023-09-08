const winston = require('winston');
const { NODE_ENV } = require('../config');
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'while'
};
winston.addColors(colors);
const level = () => {
    const isdev = NODE_ENV || 'development';
    return isdev === 'development' ? 'debug' : 'warn';
};
/* To create timestamp format */
const time_format = winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss ms'
});
/* To create print format */
const print_format = winston.format.printf((info) => `${info.timestamp} [${info.level}] ${info.message}`);
/* To combine formats */
const format = winston.format.combine(time_format, print_format);
/* To Create Transporter */
const console_trpt = new winston.transports.Console({
    format: winston.format.colorize({
        all: true
    })
});

const err_trpt = new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
});

const acc_trpt = new winston.transports.File({
    filename: 'logs/access.log'
});

const transports = [console_trpt, err_trpt, acc_trpt];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});
module.exports = logger;
