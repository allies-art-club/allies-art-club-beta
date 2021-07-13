import stripe from 'stripe';
stripe(process.env.STRIPE_SECRET_KEY,{
    maxNetworkRetries: 3
});
import {putDonation} from './dbHandlers.js';
const webhookSecret = "whsec_g0ox62SlHmIwTkhTaTJV95CRMWUcMHGY";
import generateTransport from '../mail/sgMail.js';
const stripeWebhook = async(req,res,next)=>{
    let event;
    const sig = req.headers['stripe-signature'];

    try {
        event = await stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
        
      }
      catch (err) {
        const error = new Error(`Webhook Error: ${err.message}`);
        error.status=500;
        res.status(400).send(`Webhook Error: ${err.message}`);
        return next(error)
      }
    // Handle the event
    try{
        switch (event.type) {
          case 'charge.dispute.created':
            let chargeDisputeCreated = event.data.object;
            req.body.stripeId = chargeDisputeCreated.id;
            // Then define and call a method to handle the successful payment intent.
            // handlePaymentIntentSucceeded(paymentIntent);

            var result = await putDonation(req,res,next,'CHARGE_DISPUTE_CREATED');
            break;
          case 'charge.dispute.funds_reinstated':
            let chargeDisputeFundsReinstated= event.data.object;
            req.body.stripeId = chargeDisputeFundsReinstated.id;

            var result = await putDonation(req,res,next,'CHARGE_DISPUTE_FUNDS_REINSTATED');
            break;
                      
          case 'charge.dispute.funds_withdrawn':
            let chargeDisputeFundsWithdrawn = event.data.object;
            req.body.stripeId = chargeDisputeFundsWithdrawn.id;

            var result = await putDonation(req,res,next,'CHARGE_DISPUTE_FUNDS_WITHDRAWN');
            break;
          case 'charge.succeeded':
            let chargeSucceeded = event.data.object;
            req.body.stripeId = chargeSucceeded.payment_intent;
            var result = await putDonation(req,res,next,'DONATION_SUCCESSFUL');
            const transport = await generateTransport();
            await transport.sendMail({
              to:req.body.email,
              from: process.env.EMAIL,
              subject: `Thank you for your contributuion`,
              html: `<p>Thanks</p>`
            })
            break;

          default:

          // ... handle other event types
              console.log(`Unhandled event type ${event.type}`);
        }
      
        // Return a response to acknowledge receipt of the event
        return res.json({received: true});

    }
    catch(e){
        const error = new Error(`Error with webhook event payments: ${e}`)
        error.status= 500
        e.input=req.body;
        res.json({received:false});
        next(error);
    }

}

export {stripeWebhook};