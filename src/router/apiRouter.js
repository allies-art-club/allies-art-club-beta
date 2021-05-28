const express = require('express');
const {payment,updatePayment,deletePayment,csrfToken,route_404} = require('./handler_functions/apiHandlers');
const router = express.Router();

router.post('/payment',payment);
router.put('/updatePayment',updatePayment);
router.delete('/deletePayment',deletePayment);

router.get('/csrfToken',csrfToken)
router.get('*',route_404)
// router.get('/ping', ping.get)
module.exports = router;