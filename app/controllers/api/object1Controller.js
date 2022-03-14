const debug = require('debug')('controller:objects1');
// TODO datamapper
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
  async getAll(_req, res) {
    debug('getAll called');
    const objects1 = 'datamapper object1 getAll';
    return res.json(objects1);
  },
  async getOne(req, res) {
    debug(`getOne called params: ${req.params.id}`);
    const object1 = 'datamapper object1 getOne';
    if (!object1) {
      throw new ApiError('Object1 not found', { statusCode: 404 });
    }
    return res.json(object1);
  },
  // TODO create
  // TODO update
  // TODO delete
};
