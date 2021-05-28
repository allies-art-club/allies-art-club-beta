require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./router/apiRouter');
const dbRouter = require('./router/dbrouter');
const exemptRouter =require('./router/csrfExemptRouter')
const session = require('express-session');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const app = express();

var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}
app.use(bodyParser.urlencoded({verify: rawBodySaver, extended: true }));
app.use(bodyParser.json({verify: rawBodySaver}));
//do not run the following during tests
if(process.env.NODE_ENV!=='test'){
  var MongoDBStore = require('connect-mongodb-session')(session);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let store;
  console.log('yep');
  store = new MongoDBStore({
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vkke3.mongodb.net/${process.env.DB_NAME}`,
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
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}
console.log('yes');
app.use('/api',apiRouter);
app.use('/db',dbRouter);
app.get('*', (req,res)=>{
    console.log('YEYEYEYEYEYE')
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
app.use((err,req,res,next)=>{
  //LOGGING FUNCTION + EMAIL SEND TO ME
  console.log(err)
  if(err.status===404){
    console.log('404')
    res.status(404).send({error: 'Endpoint could not be found'})
  }
  else if(err.status===403){
    res.send({error: 'Forbidden, access denied'})
  }
  else if(err.status===500){
    res.send({error: 'An error has occurred, we are working to resolve this'})
  }
  else {
    res.send({error: 'An error has occurred, we are working to resolve this'})
  }
  console.log('yo i erred');
  if(process.env.NODE_ENV!=='test'){
    sgMail.send({
      to:'harryyy27@gmail.com',
      from: 'harryyy27@gmail.com',
      subject: 'error',
      text: 'YESe',
      html: `<h1>${err}</h1>`
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }
})


module.exports = app;