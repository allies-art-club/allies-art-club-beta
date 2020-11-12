const supertest = require('supertest');
const tape = require('tape');
const app = require('../src/app.js');

tape('Tape be working', (t)=>{
    supertest(app)
    .get('/')
    .expect(200)
    .then((response)=>{
        t.equals(response.statusCode,200)
        t.end()
    })
    
})
tape('404 route works',(t)=>{
    supertest(app)
    .get('/thisIsNotARoute')
    .expect(404)
    .then(res=> {
        t.equals(res.statusCode,404)
        t.end()
    })
})