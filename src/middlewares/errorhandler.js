const { NODE_ENV } = require('../config')
const errorhandler = function (error, req, res, next) {
  const { statusCode, name, message, stack } = error;
  const code = statusCode || 500;
  const msg = message || 'Something went wrong!';
  const errname = name || '';

  res.status(code).json({
    success: false,
    message: errname + ' ' + msg,
    stack: (NODE_ENV === 'development') ? stack : {}
  });
};

module.exports = errorhandler;
