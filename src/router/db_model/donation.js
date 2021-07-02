const mongodb = require('mongodb');
const {getDb}= require('../database/connection');

class Donation {
    constructor(stripeId,date, name,email,organisation,donationAmount,message){
        this.stripeId=stripeId,
        this.date = date,
        this.name=name,
        this.email=email,
        this.organisation=organisation,
        this.donationAmount=donationAmount,
        this.message =message,
        this.status='PAYMENT_PROCESSING'
    }
    save(){
        const db = getDb();
        return db.collection('donation')
        .insertOne(this)
        .then((res)=>{
            console.log('created donation');
            return res;
        })
        .catch((e)=>{
            console.log(e);
            e.status=500;
            e.input=this;
            throw e;
        })
    }
    static fetchAll(){
        const db=getDb();
        return db.collection('donation')
        .find()
        .toArray()
        .then((res)=>{
            return res;
        })
        .catch((e)=>{
            console.log(e);
            e.status=500;
            e.input='Fetch All Requested - no input';
            console.log(e);
            next(e);
        })

    }
    static findById(stripeId){
        const db = getDb()
        return db.collection('donation')
        .find({stripeId:stripeId})
        .next()
        .then((donation)=>{
            return donation
        })
        .catch((err)=>{
            err.status=500;
            err.input=stripeId;
            console.log(err);
            next(err);
        })
    }
    static updateDonationStatus(stripeId,donationStatus){
        console.log('YESSSSS')
        const db= getDb()
        return db.collection('donation')
        .updateOne({
            stripeId: stripeId
        },{
            $set:{
                "status": donationStatus
            }
        })
        .then((donation)=>{
            return donation;
        })
        .catch((e)=>{
            console.log(e);
            e.status=500;
            e.input={
                stripeId:stripeId,
                donationStatus:donationStatus,
            };
            next(e);
        })
    }
    static deleteDonation(stripeId){
        const db=getDb()
        return db.collection('donation')
        .deleteOne({
            stripeId:stripeId
        })
        .then((res)=>{
            console.log('DELETED ENTRY',res)
            return res
        })
        .catch((err)=>{
            console.log(err)
            err.status=500;
            err.input=stripeId;
            next(err);
        })
    }

}
module.exports = Donation;