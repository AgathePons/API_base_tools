const Joi = require('joi');

module.exports = Joi.object({
  key1: Joi.string().required(),
  key2: Joi.string()
    .pattern(/^\/[a-zA-Z\\/]*[^\\/]$/)
    .required(),
}).required();
