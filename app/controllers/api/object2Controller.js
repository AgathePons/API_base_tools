const debug = require('debug')('controller:objects2');
// TODO datamapper
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
  async getAll(_req, res) {
    debug('getAll called');
    const objects2 = 'datamapper object2 getAll';
    return res.json(objects2);
  },
  async getOne(req, res) {
    debug(`getOne called params: ${req.params.id}`);
    const object2 = 'datamapper object2 getOne';
    if (!object2) {
      throw new ApiError('Object2 not found', { statusCode: 404 });
    }
    return res.json(object2);
  },
  // TODO create
  // TODO update
  // TODO delete
};
