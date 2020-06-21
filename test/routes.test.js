const supertest = require('supertest');
const tape = require('tape');
const app = require('../src/app.js');

tape('Tape be working', (t)=>{
    supertest(app)
    .get('/')
    .then((response)=>{
        t.equals(response.statusCode,200)
        t.end()
    })
    
})