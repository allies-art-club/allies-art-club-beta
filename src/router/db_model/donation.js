const {getDb}= require('../database/connection')

class Donation {
    constructor(name,email,organisation,billingAddress,amountDonated,cardType,message){
        this.name=name,
        this.email=email,
        this.organisation=organisation,
        this.billingAddress=billingAddress,
        this.amountDonated=amountDonated,
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