const express = require('express');
const {payment,updatePayment,deletePayment,stripeWebhook,csrfToken} = require('./handler_functions/apiHandlers');
const router = express.Router();

router.post('/payment',payment);
router.put('/updatePayment',updatePayment);
router.delete('/deletePayment',deletePayment);

router.post('/webhook', stripeWebhook)
router.get('/csrfToken',csrfToken)
// router.get('/ping', ping.get)
module.exports = router;