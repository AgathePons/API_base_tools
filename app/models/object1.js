const debug = require('debug')('model:object1');
const client = require('../config/db');
const { ApiError } = require('../helpers/errorHandler');

// TODO JSDOC

const object1DataMapper = {
  async findAll() {
    debug('findAll called');
    const result = await client.query('SELECT * FROM object1;');
    return result.rows;
  },
  async findByPk(object1Id) {
    debug(`findByPk called for id ${object1Id}`);
    const result = await client.query('SELECT * FROM object1 WHERE id = $1;', [object1Id]);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },
  async insert(object1) {
    debug('insert called');
    const insertedObject1 = await client.query(
      `
      INSERT INTO object1 (title, content, object2_id) VALUES
      ($1, $2, $3) RETURNING *;
      `,
      [object1.title, object1.content, object1.object2_id],
    );
    return insertedObject1.rows[0];
  },
  async update(object1Id, object1) {
    debug(`update called for id ${object1Id}`);
    const fields = Object.keys(object1);
    debug(fields);
    return 'test';
  },
  async delete(object1Id) {
    debug(`delete called for id ${object1Id}`);
    const result = await client.query('DELETE FROM object1 WHERE id = $1', [object1Id]);
    return !!result.rowCount;
  },
  async isUnique(inputData, object1Id) {
    const fields = [];
    const values = [];
    Object.entries(inputData).forEach(([key, value], index) => {
      if (['title', 'content'].includes(key)) {
        fields.push((`"${key}" = $${index + 1}`));
        values.push(value);
      }
    });
    const preparedQuery = {
      text: `SELECT FROM object1 WHERE (${fields.join(' OR ')})`,
      values,
    };
    // if object1Id is prvided (in update case) we have to complete the preparedQuery
    // to ignore this object1
    if (object1Id) {
      preparedQuery.text += ` AND is <> $${values.length + 1}`;
      preparedQuery.values.push(object1Id);
    }
    const result = await client.query(preparedQuery);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },
};

module.exports = object1DataMapper;
