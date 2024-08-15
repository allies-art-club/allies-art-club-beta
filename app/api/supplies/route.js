import generateTransport from '../../../utils/nodemailer'
import donateEmail from '../../../utils/emailTemplates/donateEmail'
import {DonationSupplies} from '../../../utils/schema'
import connect from '../../../utils/connection'
export async function POST(req){
    try {
        await connect()
        const body = JSON.parse(req.body)
        const date = Date.now()
        body.date=date;
        const response = await DonationSupplies(body);
        console.log(response);
        const transport = await generateTransport();
        await transport.sendMail({
            to:req.body.email,
            from: `"Allie's Art Club" <${process.env.EMAIL}>`,
            subject: `Thank you`,
            html: donateEmail(req.body.name)
          })
        return Response.send({success: true})
    }
    catch(e){
        console.log('ahaa',e)
        e.status=500;
        e.input=req.body;
        return Response.status(500).json({success:false,error:e.toString()});
    }
}