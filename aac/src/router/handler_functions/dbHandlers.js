import Donation from '../db_model/donation.js';
import DonationSupplies from '../db_model/donationSupplies.js';
import Member from '../db_model/member.js';

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
        err.status(500);
        err.input=req.body;
        next(err);

    })
}

const deleteDonation = (req,res,next)=>{
    return Donation
    .deleteDonation(req.body.stripeId)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
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
        const otherSupplies = req.body.suppliesOther;
        const message = req.body.message;
        const date = createDate();
        var donation = new DonationSupplies(date,name,email,organisation,supplies,otherSupplies,message);
    }
    catch(e){
        next(e)
    }
    return donation
    .save()
    .then((res)=>{
        return res
    })
    .catch((e)=>{
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
        const otherOpportunities= req.body.opportunitiesOther;
        const art = req.body.art;
        const otherArt = req.body.artOther;
        const date = createDate();
        var member = new Member(date,name,email,dob,opportunities,otherOpportunities,art,otherArt);
    }
    catch(e){
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
        e.status=500;
        e.input=req.body;
        next(e);
    })

}

export {postDonation,putDonation,deleteDonation,postSupplies,postMember};