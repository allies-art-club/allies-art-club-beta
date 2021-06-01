const mongodb = require('mongodb');
const {getDb}= require('../database/connection');

class DonationSupplies {
    constructor(date, name,email,organisation,supplies,message){
        this.date = date,
        this.name=name,
        this.email=email,
        this.organisation=organisation,
        this.supplies=supplies,
        this.message =message,
        this.status='DONATION_DECLARATION_RECEIVED'
    }
    save(){
        const db = getDb();
        return db.collection('supplies')
        .insertOne(this)
        .then((res)=>{
            console.log('created donation');
            return res;
        })
        .catch((e)=>{
            console.log(e);
            e.status=500;
            next(e);
        })
    }
    

}
module.exports = DonationSupplies;