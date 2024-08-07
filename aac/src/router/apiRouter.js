import express from 'express';
import {payment,supplies,updatePayment,deletePayment,membershipPost,contactUs,csrfToken,resourceHandler,route_404} from './handler_functions/apiHandlers.js';
const apiRouter = express.Router();

apiRouter.post('/payment',payment);
apiRouter.post('/supplies',supplies);
apiRouter.put('/updatePayment',updatePayment);
apiRouter.delete('/deletePayment',deletePayment);
apiRouter.post('/postMember',membershipPost);
apiRouter.post('/contactUs',contactUs);
apiRouter.get('/csrfToken',csrfToken);
apiRouter.post('/resources/*',resourceHandler);
apiRouter.get('*',route_404);
// apiRouter.get('/ping', ping.get)
export default apiRouter;