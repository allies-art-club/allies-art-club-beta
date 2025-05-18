import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  console.log('Received POST request');

  let email, name, message;
  try {
    const data = await request.json();
    email = data.email;
    name = data.name;
    message = data.message;
    console.log('Parsed request body:', { email, name, message });
  } catch (err) {
    console.error('Error parsing JSON:', err);
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  console.log('Checking environment variables');
  if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
    console.error('Missing environment variables:', {
      MY_EMAIL: process.env.MY_EMAIL,
      MY_PASSWORD: process.env.MY_PASSWORD ? 'set' : 'not set',
    });
    return NextResponse.json(
      { error: 'Missing email configuration on server' },
      { status: 500 }
    );
  }

  console.log('Creating transport...');
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  console.log('Sending mail with options:', mailOptions);

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err, info) {
        if (!err) {
          console.log('Email sent successfully:', info);
          resolve('Email sent');
        } else {
          console.error('Error sending email:', err);
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
