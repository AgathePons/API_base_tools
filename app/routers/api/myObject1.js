const express = require('express');

const validate = require('../../validation/validator');
const createSchema = require('../../validation/schemas/object1CreateSchema');
const updateSchema = require('../../validation/schemas/object1UpdateSchema');

const { object1Controller: controller } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler');

const router = express.Router();

router
  .route('/')
  .get(controllerHandler(controller.getAll));

router
  // number id only
  .route('/:id(\\d+)')
  .get(controllerHandler(controller.getOne));

module.exports = router;
