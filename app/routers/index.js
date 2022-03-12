const express = require('express');

const apiRouter = require('./api');
const websiteRouter = require('./website');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', websiteRouter);

router.use((err, _req, res, next) => {
  errorHandler(err, res, next);
});

module.exports = router;
