const express = require('express');
const {stripeWebhook} = require('./handler_functions/csrfExemptHandlers.js');
const router = express.Router();
router.post('/webhook', stripeWebhook);
module.exports = router;