const Joi = require('joi');

module.exports = Joi.object({
  key1: Joi.string()
    .pattern(/^[^-][a-zA-Z0-9-]+[^-]$/)
    .required(),
  key2: Joi.string().required(),
  key3: Joi.number().integer().min(1).required(),
  key4: Joi.string(),
  key5: Joi.string(),
}).required();
