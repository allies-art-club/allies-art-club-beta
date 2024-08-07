import nodemailer from 'nodemailer';
import {google} from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(process.env.DEV_CLIENT_ID,process.env.DEV_CLIENT_SECRET,process.env.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: process.env.DEV_REFRESH_TOKEN})
const devGenerateTransport = async()=>{
  const accessToken = await oAuth2Client.getAccessToken;
  const transport = nodemailer.createTransport({
    service:'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.DEV_EMAIL,
      clientId:process.env.DEV_CLIENT_ID,
      clientSecret: process.env.DEV_CLIENT_SECRET,
      refreshToken: process.env.DEV_REFRESH_TOKEN,
      accessToken: accessToken

    }
  });
  return transport;
};
export default devGenerateTransport;