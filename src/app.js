
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbRouter = require('./router/dbrouter');

const app = express();
// set up cors for server
const cors = require('cors');
let corsOptions = {
    //specifies domain to allow
    origin: ['http://localhost:3000'],
    //shows headers exposed to front end
    exposedHeaders: ['Set-Cookie'],
    //allow sending of cookies
    credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use('/db',dbRouter)

// app.use(router);

module.exports = app;