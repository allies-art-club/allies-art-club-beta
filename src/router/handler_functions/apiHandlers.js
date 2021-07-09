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
    if(!email){
        res.status(500).json({'error':'Please enter your email address'})
        throw new Error('No email detected')
    }
    const idempotencyKey = uuid();
    // add product to database + return id

    try{
        var paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.donationAmount*100,
            currency: 'GBP',
            metadata: {integration_check: 'accept_a_payment'},
            receipt_email: email
        },{
            //prevents double payments, additional layer of protection on front end (disable button + spinner until payment over)
            idempotencyKey: idempotencyKey
        });
        req.body.stripeId=paymentIntent.id;
        var donation = await postDonation(req,res,next);
        return res.status(200).json({
            'client_secret': paymentIntent['client_secret'],
            'stripeId': paymentIntent['id']
        });
    }
    catch(e){
        e.status=500;
        e.input=req.body;
        if(e.statusCode){
            //delete from database
            var statusCode=e.statusCode.toString();
            if(statusCode.match(/^4/)){
                res.status(e.statusCode).json({'error':'An error has occurred. Please return later while we fix the error.'});
                next(e);
            }
            else if(statusCode.match(/^5/)){
                res.status(e.statusCode).json({'error':'An error has occurred with our payment provider. Please try again later.'});
                next(e);
            }
        }
        else {
            res.json({'error':e});
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
        e.input=req.body;
        next(e);
    }
}

const deletePayment = async(req,res,next)=>{
    try{
        var result = await deleteDonation(req,res,next)
        return res.status(200).json({deleted:true})
    }
    catch(err){
        err.status=500
        err.input=req.body;
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
        error.input=req.body;
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
        const error = new Error('Email not sent',e);
        error.status=500;
        e.input=req.body;
        next(e);
    }
}
const membershipPost = async(req,res,next)=>{
    try {
        await postMember(req,res,next);
        res.send({success:true});
    }
    catch(e){
        e.status=500;
        e.input=req.body;
        throw e;
    }
}
const supplies = async(req,res,next)=>{
    try {
        const response = await postSupplies(req,res,next);
        res.send({success: true})
    }
    catch(e){
        e.status=500;
        e.input=req.body;
        next(e);
    }
}
const resourceHandler=(req,res,next)=>{
    try{
        const article= req.url.split('/')[2]+'.pdf';
        // var file = fs.readFileSync(path.join(__dirname,'..','resources',req.body.category,article));
        res.download(path.join(__dirname,'..','resources',req.body.category,article),(err)=>{
            if(err){
                next(err)
            }
        });

    }
    catch(e){
        e.status=500;
        e.input=req.body;
        throw e;
    }

}
const route_404 = (req,res,next) => {
    const error = new Error(`404 - ${req.url} route not found`);
    error.status=404;
    throw error;
}

module.exports = {payment,supplies,updatePayment,deletePayment,membershipPost,contactUs,csrfToken,resourceHandler,route_404};