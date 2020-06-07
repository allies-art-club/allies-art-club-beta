const express = require('express');
const home = require('./handler_functions/home.js')
const router = express.Router();

router.get('/',home.get);

module.exports = router;