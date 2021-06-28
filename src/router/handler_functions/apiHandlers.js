const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY,{
    maxNetworkRetries: 3
});
const uuid = require('uuid/v4');
const {postDonation,putDonation,deleteDonation,postSupplies,postMember} = require('./dbHandlers.js');
const sgMail=require('../mail/sgMail.js');
const fs = require('fs');
const path = require('path');

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
                next(e);
            }
            else if(statusCode.match(/^5/)){
                console.log('SOMETHING UP WITH STRIPE');
                res.status(e.statusCode).json({'error':'An error has occurred with our payment provider. Please try again later.'});
                e.status=500;
                next(e);
            }
        }
        else {
            console.log('ERRR')
            res.json({'error':e});
            e.status=e.statusCode;
            next(e);
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
        next(e);
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
        next(err)
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
const contactUs=async(req,res,next)=>{
    try {
        var from = req.body.email;
        var name = req.body.name;
        var message = req.body.message
        var response = await sgMail.send({
          to:'harryyy27@gmail.com',
          from: `${from}`,
          subject: `Message from ${name}`,
          text: `${message}`,
          html: `<p>${message}</p>`
        })

        res.send({received:true})
    }
    catch(e){
        console.log(e);
        const error = new Error('Email not sent',e);
        error.status=500;
        next(e);
    }
}
const membershipPost = async(req,res,next)=>{
    try {
        await postMember(req,res,next);
        res.send({success:true});
    }
    catch(e){
        console.log(e);
        e.status=500;
        throw e;
    }
}
const supplies = async(req,res,next)=>{
    try {
        const response = await postSupplies(req,res,next);
        console.log('yohoo',response);
        res.send({success: true})
    }
    catch(e){
        console.log('YERRR',e)
        e.status=500;
        next(e);
    }
}
const resourceHandler=(req,res,next)=>{
    try{
        const article= req.url.split('/')[2];
        var file = fs.readFileSync(path.join(__dirname,'..','resources',req.body,article+'.pdf'));
        res.download(file);

    }
    catch(e){
        console.log(e);
        e.status=500;
        throw e;
    }

}
const route_404 = (req,res,next) => {
    const error = new Error(`404 - ${req.url} route not found`);
    error.status=404;
    throw error;
}

module.exports = {payment,supplies,updatePayment,deletePayment,membershipPost,contactUs,csrfToken,resourceHandler,route_404};