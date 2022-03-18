const debug = require('debug')('model:object1');
const client = require('../config/db');
const { ApiError } = require('../helpers/errorHandler');

// TODO JSDOC

const object1DataMapper = {
  async findAll() {
    const result = await client.query('SELECT * FROM object1');
    return result.rows;
  },
};

module.exports = object1DataMapper;
