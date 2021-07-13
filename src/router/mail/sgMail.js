import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({

    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
export default transport;