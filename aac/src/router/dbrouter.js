import express from 'express';
import {postDonation,putDonation,deleteDonation} from './handler_functions/dbHandlers.js';
const dbRouter = express.Router();

dbRouter.post('/createDonation',postDonation);
dbRouter.put('/updateDonation',putDonation);
dbRouter.delete('/deleteDonation',deleteDonation);
// router.get('/ping', ping.get)
export default dbRouter;