const Donation = require('../db_model/donation');

const postDonation = (req,res,next)=>{
    //post donation to mongo db
    // (name,email,organisation,billingAddress,amountDonated,message)
    const stripeId = req.body.stripeId
    const name = req.body.name;
    const email = req.body.email;
    const organisation = req.body.organisation;
    const donationAmount = req.body.donationAmount;
    const message = req.body.message;
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const date = dd + '-' + mm + '-' + yyyy;
    const status = 'DONATION_CREATED';
    const donation = new Donation(stripeId,date,name,email,organisation,donationAmount,message,status);
    return donation
    .save()
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        console.log(err);
        err.status=500;
        next(err);
    })
}

const putDonation = (req,res,next,status)=>{
    return Donation
    .updateDonationStatus(req.body.stripeId,status)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        console.log(err);
        err.status(500);
        next(err);

    })
}

const deleteDonation = (req,res,next)=>{
    return Donation
    .deleteDonation(req.body.stripeId)
    .then((res)=>{
        console.log(res)
        return res
    })
    .catch((err)=>{
        console.log(err)
        err.status(500);
        next(err);
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

module.exports = {postDonation,putDonation,deleteDonation};