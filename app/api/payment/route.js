
import connect from '../../../utils/connection'
import {Donation} from '../../../utils/schema'
import {uuid} from 'uuid'
export async function POST(req){
    try{
        const  body = JSON.parse(req.body);
        const email= body.email
        if(!email){
            throw new Error('No email detected')
        }
        const idempotencyKey = uuid();
        // add product to database + return id
    
            var paymentIntent = await stripe.paymentIntents.create({
                amount: body.donationAmount*100,
                currency: 'GBP',
                metadata: {integration_check: 'accept_a_payment'},
                receipt_email: email
            },{
                //prevents double payments, additional layer of protection on front end (disable button + spinner until payment over)
                idempotencyKey: idempotencyKey
            });
            body.paymentIntentId=paymentIntent.id;
            var donation = await new Donation(body);
            return Response.status(200).json({
                'client_secret': paymentIntent['client_secret'],
                'paymentIntentId': paymentIntent['id']
            });
        }
        catch(e){
            e.status=500;
            e.input=req.body;
            if(e.statusCode){
                //delete from database
                var statusCode=e.statusCode.toString();
                if(statusCode.match(/^4/)){
                    return res.status(e.statusCode).json({success:false,'error':'An error has occurred. Please return later while we fix the error.'});
                }
                else if(statusCode.match(/^5/)){
                    return res.status(e.statusCode).json({success:false,'error':'An error has occurred with our payment provider. Please try again later.'});
                }
            }
            else {
                return Response.status(500).json({success:false,'error':e});
            }
            
        }
    
    }
export async function PUT(req){
        try{
            //complete
            await connect()
            const body=JSON.parse(req.body)
            var result = await Donation.findOneAndUpdate({paymentIntendId:body.paymentIntentId},{status:'DONATION_ATTEMPT_RECEIVED'});
            //SEND EMAIL
            return Response.status(200).json({updated:true})
        }
        catch(e){
            e.status=500;
            e.input=req.body;
            return Response.status(500).json({success:false,error:e.toString()});
        }
    
}

export async function DELETE(req){
    try{
        await connect()
        const body=JSON.parse(req.body)
        
        var result = await Donation.findOneAndDelete({paymentIntentId:body.paymentIntentId})
        return Response.status(200).json({deleted:true})
    }
    catch(err){
        err.status=500
        err.input=req.body;
        return Response.status(500).json({success:false})
    }
}

export async function GET(req){
    
}