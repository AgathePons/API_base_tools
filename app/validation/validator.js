const debug = require('debug')('Validator:log');
const { ApiError } = require('../helpers/errorHandler');

module.exports = (prop, schema) => async (req, _res, next) => {
  try {
    debug(req[prop]);
    await schema.validateAsync(req[prop]);
    next();
  } catch (err) {
    next(new ApiError(err.details[0].message, { statusCode: 400 }));
  }
};
