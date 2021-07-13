import express from 'express';
import {stripeWebhook} from './handler_functions/csrfExemptHandlers.js';
const exemptRouter = express.Router();
exemptRouter.post('/webhook', stripeWebhook);
export default exemptRouter;