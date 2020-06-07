const supertest = require('supertest');
const tape = require('tape')
const app = require('../src/app.js');

tape('Tape be working', (t)=>{
    t.equals(1,1)
    t.end()
})