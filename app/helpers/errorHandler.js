/**
 * Middleware errors handler
 */
const logger = require('./logger');
const ApiError = require('../errors/apiError');
const WebsiteError = require('../errors/websiteError');

const errorHandler = (err, res) => {
  let { message } = err;
  let statusCode = err.infos?.statusCode;

  if (!statusCode || Number.isNaN(Number(statusCode))) {
    statusCode = 500;
  }
  if (statusCode === 500) {
    logger.error(err);
  }
  // if api in prod
  if (statusCode === 500 && res.app.get('env') !== 'development') {
    message = 'Internal Servor Error, contact API administrator';
  }

  if (res.get('Content-type').includes('html')) { // if html sent render pug view with infos
    res.status(statusCode).render('error', {
      statusCode,
      message,
      title: `Error ${err.statusCode}`,
    });
  } else { // else, send infos in json
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
    });
  }
};

module.exports = { ApiError, WebsiteError, errorHandler };
