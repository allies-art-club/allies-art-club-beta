const Donation = require('../db_model/donation');
const DonationSupplies = require('../db_model/donationSupplies');
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
    const hours = String(today.getHours());
    const minutes = String(today.getMinutes());
    const seconds = String(today.getSeconds());
    const date = dd + '-' + mm + '-' + yyyy+'T'+hours+':'+minutes+':'+seconds;
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
        console.log('delete donation res',res)
        return res
    })
    .catch((err)=>{
        console.log('delete donation err',err)
        err.status(500);
        next(err);
    })
}
const postSupplies=(req,res,next)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const organisation = req.body.organisation;
        const supplies = req.body.supplies;
        const message = req.body.message;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const hours = String(today.getHours());
        const minutes = String(today.getMinutes());
        const seconds = String(today.getSeconds());
        const date = dd + '-' + mm + '-' + yyyy+'T'+hours+':'+minutes+':'+seconds;
        var donation = new DonationSupplies(date,name,email,organisation,supplies,message);
    }
    catch(e){
        console.log(e)
        next(e)
    }
    return donation
    .save()
    .then((res)=>{
        console.log('post supplies res',res)
        return res
    })
    .catch((e)=>{
        console.log('delete donation err',err)
        e.status=500;
        next(err)
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

module.exports = {postDonation,putDonation,deleteDonation,postSupplies};