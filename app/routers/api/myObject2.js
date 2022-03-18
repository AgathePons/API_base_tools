const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/object2CreateSchema');
const updateSchema = require('../../validation/schemas/object2UpdateSchema');

const { object2Controller: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/myObjects2
   * @summary Get all objects 2
   * @tags Object2
   * @return {[object]} 200 - success response - application/json
   */
  .get(controllerHandler(controller.getAll))
  // TODO JSDOC
  .post(validate('body', createSchema), controllerHandler(controller.create));

router
  // number id only
  .route('/:id(\\d+)')
  /**
   * GET /api/myObjects2/{id}
   * @summary Get one object 2
   * @tags Object2
   * @param {number} id.path.required - object2 identifier
   * @return {object} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Post not found - application/json
   */
  .get(controllerHandler(controller.getOne))
  // TODO JSDOC
  .patch(validate('body', updateSchema), controllerHandler(controller.update))
  .delete(controllerHandler(controller.delete));

module.exports = router;
