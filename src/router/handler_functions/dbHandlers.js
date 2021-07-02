const Donation = require('../db_model/donation');
const DonationSupplies = require('../db_model/donationSupplies');
const Member = require('../db_model/member.js')

const createDate =()=>{

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const hours = String(today.getHours());
    const minutes = String(today.getMinutes());
    const seconds = String(today.getSeconds());
    const date = dd + '-' + mm + '-' + yyyy+'T'+hours+':'+minutes+':'+seconds;
    return date
}
/**********************DONATE FUNDS ***************************************/
const postDonation = (req,res,next)=>{
    //post donation to mongo db
    // (name,email,organisation,billingAddress,amountDonated,message)
    const stripeId = req.body.stripeId
    const name = req.body.name;
    const email = req.body.email;
    const organisation = req.body.organisation;
    const donationAmount = req.body.donationAmount;
    const message = req.body.message;
    const status = 'DONATION_CREATED';
    const date = createDate()
    const donation = new Donation(stripeId,date,name,email,organisation,donationAmount,message,status);
    return donation
    .save()
    .then((res)=>{
        return res;
    })
    .catch((err)=>{
        console.log(err);
        err.status=500;
        err.input=req.body;
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
        err.input=req.body;
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
        err.input=req.body;
        next(err);
    })
}
/**********************DONATE SUPPLIES  ***************************************/
const postSupplies=(req,res,next)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const organisation = req.body.organisation;
        const supplies = req.body.supplies;
        const message = req.body.message;
        const date = createDate();
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
        console.log('delete donation err',e)
        e.status=500;
        e.input=req.body;
        next(err)
    })
}

/********************** MEMBER  ***************************************/

const postMember=(req,res,next)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const dob = req.body.dob;
        const opportunities = req.body.opportunities;
        const art = req.body.art;
        const date = createDate();
        var member = new Member(date,name,email,dob,opportunities,art)
    }
    catch(e){
        console.log('post member error',e)
        e.status=500
        e.input=req.body;
        throw e;
    }
    return member
    .save(req,res,next)
    .then((res)=>{
        return res
    })
    .catch((e)=>{
        console.log('Submission error',)
        e.status=500;
        e.input=req.body;
        next(e);
    })

}

module.exports = {postDonation,putDonation,deleteDonation,postSupplies,postMember};