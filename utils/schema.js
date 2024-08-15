import {Schema, model, models} from 'mongoose';
  // OUR TODO SCHEMA


const MemberSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:false
    },
    dob: {

        type: Date,
        required:true,
    },
    opportunities: {
        type:String,
        required:true,
    },
    otherOpportunities: {

        type: Number,
        required:true
    },
    art:{
        type:Number,
        required:false,
    },
    otherArt: {
        type:Boolean,
        required:true
    },
    
    
})
// OUR TODO MODEL
const Member = function(){
    return models.Member || model("Member", MemberSchema)
}


const DonationSchema = new Schema({
        date: {
            type: Date,
            required: true
        },
        stripeId: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required:false
        },
        name: {
    
            type: String,
            required:true,
        },
        organisation: {
            type:String,
            required:true,
        },
        donationAmount: {
    
            type: Number,
            required:true
        },
        message:{
            type:Number,
            required:false,
        },
        status: {
            type:Boolean,
            required:true
        },
        
        
    })
const Donation = function(){
    return models.Donation || model("Donation", DonationSchema)
}

const DonationSuppliesSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required:false
    },
    name: {

        type: String,
        required:true,
    },
    organisation: {
        type:String,
        required:true,
    },
    supplies: {

        type: Number,
        required:true
    },
    otherSupplies: {
        type: String,
        required:true,
    },
    message:{
        type:Number,
        required:false,
    },
    status: {
        type:Boolean,
        required:true
    },
})
const DonationSupplies = function(){
    return models.DonationSupplies || model("DonationSupplies", DonationSuppliesSchema)
}
export {Member,Donation,DonationSupplies}