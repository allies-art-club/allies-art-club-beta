const mongodb = require('mongodb');
const {getDb}= require('../database/connection');

class DonationSupplies {
    constructor(date, name,email,organisation,supplies,otherSupplies,message){
        this.date = date,
        this.name=name,
        this.email=email,
        this.organisation=organisation,
        this.supplies=supplies,
        this.otherSupplies=otherSupplies,
        this.message =message,
        this.status='DONATION_DECLARATION_RECEIVED'
    }
    save(){
        const db = getDb();
        return db.collection('supplies')
        .insertOne(this)
        .then((res)=>{
            return res;
        })
        .catch((e)=>{
            console.log(e);
            e.status=500;
            e.input=this;
            next(e);
        })
    }
    

}
module.exports = DonationSupplies;