const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY,{
    maxNetworkRetries: 3
});
const uuid = require('uuid/v4');
const {postDonation,putDonation,deleteDonation} = require('./dbHandlers.js');
const webhookSecret = "whsec_g0ox62SlHmIwTkhTaTJV95CRMWUcMHGY";
const payment = async(req,res,next) => {
    const {email} = req.body;
    console.log('YESSSSSSSSS', email)
    if(!email){
        console.log('yes')
        res.status(500).json({'error':'Please enter your email address'})
        throw new Error('No email detected')
    }
    const idempotencyKey = uuid();
    console.log(idempotencyKey);
    // add product to database + return id

    try{
        console.log('1')
        var paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'GBP',
            metadata: {integration_check: 'accept_a_payment'},
            receipt_email: email
        },{
            //prevents double payments, additional layer of protection on front end (disable button + spinner until payment over)
            idempotencyKey: idempotencyKey
        });
        console.log(paymentIntent);
        req.body.stripeId=paymentIntent.id;
        var donation = await postDonation(req,res,next);
        return res.status(200).json({
            'client_secret': paymentIntent['client_secret'],
            'stripeId': paymentIntent['id']
        });
    }
    catch(e){
        console.log(e);
        if(e.statusCode){
            //delete from database
            var statusCode=e.statusCode.toString();
            if(statusCode.match(/^4/)){
                console.log('YESYSYESYESYESYSY',e)
                console.log(e.statusCode);
                console.log(e.message);
                console.log('YAR');
                res.status(e.statusCode).json({'error':'An error has occurred. Please return later while we fix the error.'});
                e.status=500;
                throw e;
            }
            else if(statusCode.match(/^5/)){
                console.log('SOMETHING UP WITH STRIPE');
                res.status(e.statusCode).json({'error':'An error has occurred with our payment provider. Please try again later.'});
                e.status=500;
                throw e;
            }
        }
        else {
            console.log('ERRR')
            res.json({'error':e});
            e.status=e.statusCode;
            throw e;
        }
        
    }

}
const updatePayment = async(req,res,next)=>{
    try{
        //complete
        var result = await putDonation(req,res,next,'DONATION_ATTEMPT_RECEIVED');
        //SEND EMAIL
        return res.status(200).json({updated:true})
    }
    catch(e){
        e.status=500;
        throw e;
    }
}

const deletePayment = async(req,res,next)=>{
    try{
        var result = await deleteDonation(req,res,next)
        return res.status(200).json({deleted:true})
    }
    catch(err){
        console.log(err);
        err.status=500
        throw err
    }
}

const stripeWebhook = async(req,res,next)=>{
        let event;
        const sig = req.headers['stripe-signature'];

        try {
            console.log(Object.keys(req))
            console.log(webhookSecret)
            event = await stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
            
          }
          catch (err) {
            console.log('YOYOYOYO WHAT?', err);
            const error = new Error(`Webhook Error: ${err.message}`);
            error.status=500;
            res.status(400).send(`Webhook Error: ${err.message}`);
            return next(error)
          }
        // Handle the event
        try{
            switch (event.type) {
              case 'payment_intent.succeeded':
                console.log('PAYMENT INTENT SUCCEEDED');
                let paymentIntentSucceeded = event.data.object;
                req.body.stripeId = paymentIntentSucceeded.id
                var result = await putDonation(req,res,next,'PAYMENT_INTENT_SUCCEEDED')
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded(paymentIntent);
                break;
              case 'payment_intent.created':
                  console.log('PAYMENT INTENT CREATED');
                let paymentIntentCreated = event.data.object;
                req.body.stripeId = paymentIntentCreated.id;
                var result = await putDonation(req,res,next,'PAYMENT_INTENT_CREATED');
    
                break;
              case 'charge.succeeded':
                console.log('CHARGE SUCCEEDED');
                let chargeSucceeded = event.data.object;
                req.body.stripeId = chargeSucceeded.payment_intent;
                var result = await putDonation(req,res,next,'DONATION_SUCCESSFUL');
                break;
    
              default:

              // ... handle other event types
                  console.log(`Unhandled event type ${event.type}`);
            }
          
            // Return a response to acknowledge receipt of the event
            return res.json({received: true});

        }
        catch(e){
            console.log(e)
            const error = new Error(`Error with webhook event payments: ${e}`)
            error.status= 500
            res.json({received:false});
            throw error;
        }
   
}
const csrfToken = (req,res,next) => {
    if(req.csrfToken){
        return res.send({token:req.csrfToken()});
    }
    else{
        const error = new Error('No csrfToken present');
        error.status=500;
        throw error;
    }
}

const route_404 = (req,res,next) => {
    const error = new Error(`404 - ${req.url} route not found`);
    error.status=404;
    throw error;
}

module.exports = {payment,updatePayment,deletePayment,stripeWebhook,csrfToken,route_404};