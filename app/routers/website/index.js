const express = require('express');

// TODO controller
// TODO errors handler
// TODO controller handler

const router = express.Router();

// send html
router.use((_req, res, next) => {
  res.type('html');
  next();
});

router.get('/'); // TODO controller

// 404
router.use(() => {
  // TODO error
});

module.exports = router;
