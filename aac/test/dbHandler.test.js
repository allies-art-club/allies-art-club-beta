const {postDonation,putDonation,deleteDonation} = require('../src/router/handler_functions/dbHandlers');
const tape = require('tape');
const sinon = require('sinon');
const donation = require('../src/router/db_model/donation.js');

tape('put donation success handler works',async(t)=>{
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

    sinon.stub(donation, 'updateDonationStatus');

    donation.updateDonationStatus.returns(new Promise((resolve,reject)=>{
        return resolve(true)
    }))
    const result =await putDonation(req,res,next)
    t.equals(result,true)
    donation.updateDonationStatus.restore()
    t.end()

})
tape('put donation error handler works',async(t)=>{
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

    sinon.stub(donation, 'updateDonationStatus');

    donation.updateDonationStatus.throws(new Error('YES'))
    try{
        const result =await putDonation(req,res,next)

    }
    catch(e){
        console.log(e)
        t.equals(e.toString(),"Error: YES")

    }
    donation.updateDonationStatus.restore();
    t.end()

})

tape('delete donation success handler works',async(t)=>{
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

    sinon.stub(donation, 'deleteDonation');

    donation.deleteDonation.returns(new Promise((resolve,reject)=>{
        return resolve(true)
    }))
    const result =await deleteDonation(req,res,next)
    t.equals(result,true)
    donation.deleteDonation.restore()
    t.end()

})
tape('delete donation error handler works',async(t)=>{
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

    sinon.stub(donation, 'deleteDonation');

    donation.deleteDonation.throws(new Error('YES'))
    try{
        const result =await deleteDonation(req,res,next)

    }
    catch(e){
        console.log(e)
        t.equals(e.toString(),"Error: YES")

    }
    donation.deleteDonation.restore();
    t.end()

})

// tape('post donation success handler works',async(t)=>{
//     const req = {
//         rawBody: 'YEHYEHYEH',
//         headers: {
//             'stripe-signature': 'yo'
//         },
//         body: {

//         }
//     }
//     const res = {
//         status: function(){
//             return {
//                 send: function(err){
//                     return err
//                 }
//             }
//         },
//         json: function(obj){
//             return obj;
//         }

//     }
//     const next= function(err){
//         return err
//     }

//     sinon.stub(donation.prototype, 'save');

//     donation.prototype.save.returns(new Promise((resolve,reject)=>{
//         return resolve(true)
//     }))
//     const result =await postDonation(req,res,next)
//     t.equals(result,true)
//     donation.prototype.save.restore()
//     t.end()

// })
// tape('post donation error handler works',async(t)=>{
//     const req = {
//         rawBody: 'YEHYEHYEH',
//         headers: {
//             'stripe-signature': 'yo'
//         },
//         body: {

//         }
//     }
//     const res = {
//         status: function(){
//             return {
//                 send: function(err){
//                     return err
//                 }
//             }
//         },
//         json: function(obj){
//             return obj;
//         }

//     }
//     const next= function(err){
//         return err
//     }

//     sinon.stub(donation.prototype, 'save');

//     donation.prototype.save.throws(new Error('YES'))
//     try{
//         const result =await postDonation(req,res,next)

//     }
//     catch(e){
//         console.log(e)
//         t.equals(e.toString(),"Error: YES")

//     }
//     donation.prototype.save.restore();
//     t.end()

// })