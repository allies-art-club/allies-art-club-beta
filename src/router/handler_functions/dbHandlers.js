const Donation = require('../db_model/donation');

const postDonation = (req,res,next)=>{
    //post donation to mongo db
    // (name,email,organisation,billingAddress,amountDonated,cardType,message)
    const name = req.body.name;
    const email = req.body.email;
    const organisation = req.body.organisation;
    const billingAddress = req.body.billingAddress;
    const amountDonated = req.body.amountDonated;
    const cardType = req.body.cardType;
    const message = req.body.message;
    const donation = new Donation(name,email,organisation,billingAddress,amountDonated,cardType,message);
    donation
    .save()
    .then((res)=>{
        console.log('fuck yes', res)
    })
}

// postDonation({body:{
//     name: 'HARRY',
//     email: 'harry@harry.harry',
//     organisation: 'mead ltd',
//     billingAddress: 'harrys house',
//     amountDonated: '75 quid',
//     cardType: 'Visa',
//     message: 'that was quick'
// }})

module.exports = postDonation;