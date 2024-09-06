import connect from '../../../utils/connection'
import {Member}from '../../../utils/schema'
import {getCsrfToken} from 'next-auth/react'
import generateTransport from '../../../utils/nodemailer'
import newMember from '../../../utils/emailTemplates/newMemberEmail'
export default async function POST(req){
    try {
        await connect()

            if(!req.headers.csrftoken){
                var e=new Error('No csrf header found.')
                throw(e)
            }
            const csrftoken = await getCsrfToken({req:{headers:req.headers}})
            if(req.headers.csrftoken!==csrftoken){
                var e= new Error('CSRF authentication failed.')
                throw(e)
            }
            const body = JSON.parse(req.body);
            const date = Date.now()
            body.date=date;
            const member = await new Member(body);
            await member.save()
            const transport = await generateTransport()
            await transport.sendMail({
                to:req.body.email,
                from: `"Allie's Art Club" <${process.env.EMAIL}>`,
                subject: `Welcome to Allie's Art Club!`,
                html: newMember(req.body.name)
            })
            return Response.status(200).json({success:true})


    }
    catch(e){
        console.log(e)

        return Response.status(500).json({success:false,error:e.toString()})

    }
}