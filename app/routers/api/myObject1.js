const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/object1CreateSchema');
const updateSchema = require('../../validation/schemas/object1UpdateSchema');

const { object1Controller: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/myObjects1
   * @summary Get all objects 1
   * @tags Object1
   * @return {[object]} 200 - success response - application/json
   */
  .get(controllerHandler(controller.getAll));

router
  // number id only
  .route('/:id(\\d+)')
  /**
   * GET /api/myObjects1/{id}
   * @summary Get one object 1
   * @tags Object1
   * @param {number} id.path.required - object1 identifier
   * @return {object} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Post not found - application/json
   */
  .get(controllerHandler(controller.getOne));

module.exports = router;
