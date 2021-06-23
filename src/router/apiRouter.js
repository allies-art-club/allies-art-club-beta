const express = require('express');
const {payment,supplies,updatePayment,deletePayment,membershipPost,contactUs,csrfToken,resourceHandler,route_404} = require('./handler_functions/apiHandlers');
const router = express.Router();

router.post('/payment',payment);
router.post('/supplies',supplies);
router.put('/updatePayment',updatePayment);
router.delete('/deletePayment',deletePayment);
router.post('/postMember',membershipPost);
router.post('/contactUs',contactUs);
router.get('/csrfToken',csrfToken);
router.post('/resources/*',resourceHandler);
router.get('*',route_404);
// router.get('/ping', ping.get)
module.exports = router;