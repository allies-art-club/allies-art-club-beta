const express = require('express');
const home = require('./handler_functions/home.js');
const ping = require('./handler_functions/ping.js');
const router = express.Router();

router.get('/',home.get);
router.get('/ping', ping.get)
module.exports = router;