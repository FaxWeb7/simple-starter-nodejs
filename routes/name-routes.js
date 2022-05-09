const express = require('express');
const {
  getName,
} = require('../controllers/model-controller');

const router = express.Router();

router.get('/name', getName);

module.exports = router;


