const express = require('express');
const {postDonation,putDonation,deleteDonation} = require('./handler_functions/dbHandlers')
const router = express.Router();

router.post('/createDonation',postDonation);
router.put('/updateDonation',putDonation);
router.delete('/deleteDonation',deleteDonation);
// router.get('/ping', ping.get)
module.exports = router;