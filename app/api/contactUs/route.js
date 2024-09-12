import generateTransport from '../../../utils/nodemailer'

export async function POST(req){
    try {
        var email = req.body.email;
        var name = req.body.name;
        var message = req.body.message
        var fromEmail = process.env.EMAIL
        const transport = await generateTransport()
        await transport.sendMail({
          to:process.env.EMAIL,
          from: `"Allie's Art Club - Contact Us" <${fromEmail}>`,
          subject: `Message from ${name}`,
          html: `<p>MESSAGE: ${message}</p>,
                <p>Reply to this message at ${email}`
        })

        return await Response.status(200).json({success:true})
    }
    catch(e){
        const error = new Error('Email not sent',e);
        error.status=500;
        e.input=req.body;
        Response.status(500).json({success:false,error:e});
    }
}