const Donation = require('../db_model/donation');

const postDonation = (req,res,next)=>{
    //post donation to mongo db
    // (name,email,organisation,billingAddress,amountDonated,cardType,message)
    console.log('BODY',req.body)
    const name = req.body.name;
    const email = req.body.email;
    const organisation = req.body.organisation;
    const donationAmount = req.body.donationAmount;
    const cardType = req.body.cardType;
    const message = req.body.message;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const date = dd + '-' + mm + '-' + yyyy;
    const donation = new Donation(date,name,email,organisation,donationAmount,cardType,message);
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