const debug = require('debug')('controller:objects1');
const object1DataMapper = require('../../models/object1');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
  async getAll(_req, res) {
    debug('getAll called');
    const objects1 = await object1DataMapper.findAll();
    return res.json(objects1);
  },
  async getOne(req, res) {
    debug(`getOne called params: ${req.params.id}`);
    const object1 = await object1DataMapper.findByPk(req.params.id);
    if (!object1) {
      throw new ApiError(`Object1 not found for id ${req.params.id}`, { statusCode: 404 });
    }
    return res.json(object1);
  },
  async create(req, res) {
    // Check if unique fields values do not already exist
    const existingObject1 = await object1DataMapper.isUnique(req.body);
    if (existingObject1) {
      let field;
      if (existingObject1.title === req.body.title) {
        field = 'title';
      } else if (existingObject1.content === req.body.content) {
        field = 'content';
      }
      throw new ApiError(`Object1 already exists with this ${field}`, { statusCode: 404 });
    }
    const insertedObject1 = await object1DataMapper.insert(req.body);
    return res.json(insertedObject1);
  },
  async update(req, res) {
    const object1 = await object1DataMapper.findByPk(req.params.id);
    if (!object1) {
      throw new ApiError(`Object1 not found for id ${req.params.id}`, { statusCode: 404 });
    }
    // if at least one field has been updated
    if (req.body.title || req.body.content || req.body.object2_id) {
      const existingObject1 = await object1DataMapper.isUnique(req.body, req.params.id);
      if (existingObject1) {
        let field;
        // check if new unique fields values do not already exist
        if (existingObject1.title === req.body.title) {
          field = 'title';
        } else if (existingObject1.content === req.body.content) {
          field = 'content';
        }
        throw new ApiError(`Other object1 already exists with this ${field}`, { statusCode: 404 });
      }
    }
    const updatedObject1 = await object1DataMapper.update(req.params.id, req.body);
    return res.json(updatedObject1);
  },
  async delete(req, res) {
    const object1 = await object1DataMapper.findByPk(req.params.id);
    if (!object1) {
      throw new ApiError(`Object1 not found for id ${req.params.id}`, { statusCode: 404 });
    }
    await object1DataMapper.delete(req.params.id);
    return res.status(204).json();
  },
};
