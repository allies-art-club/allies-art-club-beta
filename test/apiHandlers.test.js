const tape = require('tape');
const stripe = require('stripe')('test');
const sinon = require('sinon');
const nock = require('nock');
const {stripeWebhook}= require('../src/router/handler_functions/csrfExemptHandlers');
const uuid = require('uuid');
const donation = require('../src/router/db_model/donation.js');

const {payment,updatePayment,deletePayment,csrfToken,route_404} = require('../src/router/handler_functions/apiHandlers');

tape('crsf token generates',(t)=>{
    const req = {
        csrfToken: function(){
            return true
        }
    }
    const res = {
        send: function(obj){
            return obj
        }
    }
    t.equals(csrfToken(req,res).token,true)
    t.end()
})
tape('error thrown if no csrf token',(t)=>{
    const req= {

    }
    t.throws(()=>csrfToken(req,null),/Error/)
    t.end()
})

tape('404 route throws error',(t)=>{
    const req= {
        url: '/api/wrongroute'
    }
    t.throws(()=>route_404(req,null),"Error: 404 - /api/thisIsNotARoute route not found")
    t.end()
})

tape('Stripe webhook functions as expected',async(t)=>{
    nock('https://api.stripe.com:443')
    .post('/v1/customers', "email=user1%40example.com&card=tok_5I6lor706YkUbj")
    .reply(200,{
        object: 'customer',
        id: 'cus_somestripeid',
    })
    const req = {
        rawBody: 'YEHYEHYEH',
        headers: {
            'stripe-signature': 'yo'
        },
        body: {

        }
    }
    const res = {
        status: function(){
            return {
                send: function(err){
                    return err
                }
            }
        },
        json: function(obj){
            return obj;
        }

    }
    const next= function(err){
        return err
    }
    sinon.stub(stripe.webhooks,'constructEvent');
    sinon.stub(donation, 'updateDonationStatus');
    const potentialOutcomes = ['charge.dispute.created','charge.dispute.funds_reinstated','charge.dispute.funds_withdrawn','random.event','charge.succeeded']
    
    donation.updateDonationStatus.returns(new Promise((resolve,reject)=>{
        return resolve(true)
    }))
    for(var i = 0; i<potentialOutcomes.length; i++){
        stripe.webhooks.constructEvent.returns({
            type: potentialOutcomes[i],
            data: {
                object: {
                    id: 1
                }
            }
        })
        const result = await stripeWebhook(req,res,next);
        t.equals(result.received,true)
    }
    stripe.webhooks.constructEvent.restore();
    donation.updateDonationStatus.restore();
    nock.cleanAll();
    t.end()
})

tape('Stripe webhook throws error if signature not present',async(t)=>{
    nock('https://api.stripe.com:443')
    .post('/v1/customers', "email=user1%40example.com&card=tok_5I6lor706YkUbj")
    .reply(200,{
        object: 'customer',  
        id: 'cus_somestripeid'
    })
    const req = {
        rawBody: 'YEHYEHYEH',
        headers: {
            'stripe-signature': 'yo'
        },
        body: {

        }
    }
    const res = {
        status: function(){
            return {
                send: function(err){
                    return err
                }
            }
        },
        json: function(obj){
            return obj;
        }

    }
    const next= function(err){
        return err
    }
    sinon.stub(stripe.webhooks,'constructEvent');
    const error = new Error('Yep');
    stripe.webhooks.constructEvent.throws(error)

    const errorReturn = new Error(`Webhook Error: ${error.message}`);
    errorReturn.status=500;
    const result = await stripeWebhook(req,res,next);
    t.equals(result.toString(),errorReturn.toString())
    stripe.webhooks.constructEvent.restore();
    nock.cleanAll();
    t.end()
})
tape('Stripe database update errors are caught as required',async(t)=>{
    nock('https://api.stripe.com:443')
    .post('/v1/customers', "email=user1%40example.com&card=tok_5I6lor706YkUbj")
    .reply(200,{
        object: 'customer',  
        id: 'cus_somestripeid',
    })
    const req = {
        rawBody: 'YEHYEHYEH',
        headers: {
            'stripe-signature': 'yo'
        },
        body: {

        }
    }
    const res = {
        status: function(){
            return {
                send: function(err){
                    return err
                }
            }
        },
        json: function(obj){
            return obj;
        }

    }
    const next= function(err){
        return err
    }
    sinon.stub(stripe.webhooks,'constructEvent');
    sinon.stub(donation, 'updateDonationStatus');
    const error = new Error('yeah');
    donation.updateDonationStatus.throws(error);
    stripe.webhooks.constructEvent.returns({
        type: 'payment_intent.succeeded',
        data: {
            object: {
                id: 1
            }
        }
    })
    console.log('LOOOG')
    const returnError= `Error: Error with webhook event payments: ${error}`;
    returnError.status=500;
    try{
        await stripeWebhook(req,res,next)
    }
    catch(e){
        t.equals(e.toString(),returnError.toString())

    }
    stripe.webhooks.constructEvent.restore();
    donation.updateDonationStatus.restore();
    nock.cleanAll()
    t.end()
})

tape('Delete payment handler works',async(t)=>{
    sinon.stub(donation,'deleteDonation');

    const req={
        body: {
            stripeId: 'yes'
        }
    }
    const res = {
        status: function(){
            return {
                json: function(err){
                    return err
                }
            }
        }
    }
    const next = (err)=>{
        return err;
    }
    donation.deleteDonation.returns(new Promise((resolve,reject)=>{
        return resolve(true)}
        ));
    const payment = await deletePayment(req,res,next);
    console.log(payment)
    t.equals(payment.deleted,true)
    const error = new Error('yes');
    donation.deleteDonation.throws(error);
    try {
        const payment = await deletePayment(req,res,next);
    }
    catch(e){
        error.status=500
        t.equals(e,error)
    }
    donation.deleteDonation.restore();
    t.end();
})
tape('Update payment handler works',async(t)=>{
    sinon.stub(donation,'updateDonationStatus');

    const req={
        body: {
            stripeId: 'yes'
        }
    }
    const res = {
        status: function(){
            return {
                json: function(err){
                    return err
                }
            }
        }
    }
    const next = function(err){
        return err;
    }
    donation.updateDonationStatus.returns(new Promise((resolve,reject)=>{
        return resolve(true)}
    ));
    const payment = await updatePayment(req,res,next);
    console.log(payment)
    t.equals(payment.updated,true)
    const error = new Error('yes');
    donation.updateDonationStatus.throws(error);
    try {
        const payment = await updatePayment(req,res,next);
    }
    catch(e){
        error.status=500
        t.equals(e,error)
    }
    donation.updateDonationStatus.restore();
    t.end();
})
// tape('Delete payment handler works',async(t)=>{
//     sinon.stub(donation,'deleteDonation');
//     donation.deleteDonation.restore();
//     t.end();
// })
tape('Email address not enterred',async(t)=>{
    var req = {
        body: {

        }
    }
    var res = {
        status: function(){
            return {
                json:function(obj){
                    return obj
                }
            }
        }
    }
    var next = {

    }
    const error = new Error('Please enter an email address');
    try {
        const result = await payment(req,res,next)
    }
    catch(e){
        t.equals(e.toString(),'Error: No email detected')
    }
    t.end()
})
tape('Payment function works',async(t)=>{
    nock('https://api.stripe.com:443')
    .post('/v1/customers', "email=user1%40example.com&card=tok_5I6lor706YkUbj")
    .reply(200,{
        object: 'customer',  
        id: 'cus_somestripeid',
    })
    .post('/v1/payment_intents',"amount=500&currency=GBP&metadata[integration_check]=accept_a_payment&receipt_email=bla%40gmail.com")
    .reply(200,{
        client_secret: 'yes;)',  
        id: '1',
    })
    var req = {
        body: {
            email: 'bla@gmail.com'
        }
    }
    var res = {
        status: function(){
            return {
                json:function(obj){
                    return obj
                }
            }
        },
        json: function(err){
            console.log(err)
        }
    }
    
    var next= function(err){
        return err
    }
    var donationReplace= {
        save:function(){return new Promise((resolve,reject)=>resolve())}
    }

    sinon.replace(donation.prototype, "save",sinon.fake(donationReplace.save))
    const result = await payment(req,res,next);
    t.equals(result.stripeId,"1");
    t.equals(result.client_secret,'yes;)');
    sinon.restore()
    nock.cleanAll();
    t.end()
})
// tape('Payment function handles 400 from stripe',async(t)=>{
//     nock('https://api.stripe.com:443')
//     .post('/v1/customers', "email=user1%40example.com&card=tok_5I6lor706YkUbj")
//     .reply(200,{
//         object: 'customer',  
//         id: 'cus_somestripeid',
//     })
//     .post('/v1/payment_intents',"amount=500&currency=GBP&metadata[integration_check]=accept_a_payment&receipt_email=bla%40gmail.com")
//     .reply(400,"YES")
//     var req = {
//         body: {
//             email: 'bla@gmail.com'
//         }
//     }
//     var res = {
//         status: function(){
//             return {
//                 json:function(obj){
//                     return obj
//                 }
//             }
//         },
//         json: function(err){
//             console.log(err)
//         }
//     }
    
//     var next= function(err){
//         return err
//     }
//     var donationReplace= {
//         save:function(){return new Promise((resolve,reject)=>resolve())}
//     }

//     sinon.replace(donation.prototype, "save",sinon.fake(donationReplace.save))
//     try{
//         const result = await payment(req,res,next);
//     }
//     catch(e){
//         console.log('YESSSSS',e)
//         t.equals(e,"yo");
//     }
//     sinon.restore();
//     nock.cleanAll();
//     t.end()
// })