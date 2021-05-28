const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY,{
    maxNetworkRetries: 3
});
const uuid = require('uuid/v4');
const {postDonation,putDonation,deleteDonation} = require('./dbHandlers.js');


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
        console.log('yerrrr');
        var result = await deleteDonation(req,res,next)
        return res.status(200).json({deleted:true})
    }
    catch(err){
        console.log(err);
        err.status=500
        throw err
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

module.exports = {payment,updatePayment,deletePayment,csrfToken,route_404};