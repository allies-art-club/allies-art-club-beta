const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(router);

module.exports = app;