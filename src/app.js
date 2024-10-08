import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './router/apiRouter.js';
import dbRouter from './router/dbrouter.js';
import exemptRouter from './router/csrfExemptRouter.js';
import session from 'express-session';
import path from 'path';
import devGenerateTransport from './router/mail/devsgMail.js';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import MongoDBStore from 'connect-mongodb-session';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import sslRedirect from 'heroku-ssl-redirect';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
if(process.env.NODE_ENV==='production'){
  app.use(sslRedirect.default());
}

var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}
app.use(bodyParser.urlencoded({verify: rawBodySaver, extended: true }));
app.use(bodyParser.json({verify: rawBodySaver}));
//do not run the following during tests
if(process.env.NODE_ENV!=='test'){
   var MongoConnect= MongoDBStore(session);
let store;
  store = new MongoConnect({
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5ykkl.mongodb.net/${process.env.DB_NAME}`,
    collection: 'sessions',
    expires: 1000*60*60*24
  }) 
  store.on('error',function(err){
    console.log(err)
    throw new Error('Mongodb failed to create session', err)
    
  })

app.use(session(
  {
    secret: process.env.EXPRESS_SESSION_KEY,
    resave:false,
    saveUninitialized: false,
    store:store
}));
app.use('/exempt',exemptRouter)
 var csrfProtection= csrf()
 app.use(cookieParser())
//cross site request forgery protection
app.use(csrfProtection);
}


//serve from build folder in prod
if(process.env.NODE_ENV==='production'||'localprod'){
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}
app.use('/api',apiRouter);
app.use('/db',dbRouter);
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '..','client','build','index.html'),)
})
//if this error is csrf has been detected (need response for this - email / error log)
app.use(function (err,req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN'){
      return next(err)
  }
  console.log(err)
  // handle CSRF token errors here
  res.status(403);
  res.send('form tampered with');
  err.status=403;
  next(err);
})
app.use(async (err,req,res,next)=>{
  //LOGGING FUNCTION + EMAIL SEND TO ME
  console.log(err);
  if(!err.status){
    res.status(500).send({error:"Something peculiar has happend here"})
  }
  else if(err.status===404){
    console.log('404')
    res.status(404).send({error: 'Endpoint could not be found'})
  }
  else if(err.status===500){
    res.status(500).send({error: 'An error has occurred, we are working to resolve this'})
  }
  else {
    res.status(err.status).send({error:"An unknown error has occurred. We are working to fix this."})
  }
  const mailOptions = {
    from: process.env.DEV_EMAIL, // sender
    to: process.env.DEV_EMAIL, // receiver
    subject: 'Error', // Subject
    html: `<h1>New Error!</h1>
    <p>ERROR - ${err}</p>
    <p>STACK - ${err.stack}</p>
    <p>INPUT BODY - ${err.input.toString()}</p>`// html body
    }
  if(process.env.NODE_ENV!=='test'){
    const transport = await devGenerateTransport()
    transport.sendMail(mailOptions)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }
})


export default app;