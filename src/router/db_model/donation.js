const {getDb}= require('../database/connection')

class Donation {
    constructor(date, name,email,organisation,donationAmount,cardType,message){
        this.date = date
        this.name=name,
        this.email=email,
        this.organisation=organisation,
        this.donationAmount=donationAmount,
        this.cardType=cardType,
        this.message =message
    }
    save(){
        const db = getDb();
        return db.collection('donation')
        .insertOne(this)
        .then((res)=>{
            console.log('created product');
            return res;
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
module.exports = Donation;