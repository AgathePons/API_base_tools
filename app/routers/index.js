const express = require('express');

const apiRouter = require('./api');
const websiteRouter = require('./website');
// TODO errors

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', websiteRouter);

// TODO use errors handler

module.exports = router;
