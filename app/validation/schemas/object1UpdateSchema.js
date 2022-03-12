const Joi = require('joi');

module.exports = Joi.object({
  key1: Joi.string(),
  key2: Joi.string()
    .pattern(/^\/[a-zA-Z\\/]*[^\\/]$/),
}).min(1).required();
