const express = require('express');

const myObject1Router = require('./myObject1');
const myObject2Router = require('./myObject2');
// TODO controller handler

// TODO errors handler

const router = express.Router();

// send json
router.use((_, res, next) => {
  res.type('json');
  next();
});

router.all('/'); // TODO controller

router.use('/myObject1', myObject1Router);
router.use('/myObject2', myObject2Router);

// 404
router.use(() => {
  // TODO error
});

module.exports = router;
