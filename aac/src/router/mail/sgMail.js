import nodemailer from 'nodemailer';
import {google} from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})
const generateTransport = async()=>{
  const accessToken = await oAuth2Client.getAccessToken;
  const transport = nodemailer.createTransport({
    service:'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      clientId:process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken

    }
  });
  return transport;
};
export default generateTransport;