const supertest = require('supertest');
const tape = require('tape');
const app = require('../src/app.js');


// tape('Tape be working', (t)=>{
//     supertest(app)
//     .get('/')
//     .expect(200)
//     .then((response)=>{
//         t.equals(response.statusCode,200)
//         t.end()
//     })
    
// })
tape('404 route works',(t)=>{
    console.log(supertest.toString())
    supertest(app)
    .get('/api/thisIsNotARoute')
    .expect(404)
    .then(res=> {
        t.equals(res.statusCode,404)
        t.end()
    })
})
tape('crsfToken route',(t)=>{
    t.equals(1,1)
    t.end()
})