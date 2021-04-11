const { Router } = require('express');
const express = require('express');
const postDonation = require('./handler_functions/dbHandlers')
const router = express.Router();

router.post('/donation',postDonation);
// router.get('/ping', ping.get)
module.exports = router;