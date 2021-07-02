const mongo = require('mongodb');
const {getDb} = require('../database/connection.js');

class Member {
    constructor(name,email,dob,opportunities,art,date){
        this.date=date,
        this.name=name,
        this.email=email,
        this.dob=dob,
        this.opportunities=opportunities,
        this.art=art
    }
    save(req,res,next){
        try{
        let db = getDb();
            return db.collection('members')
            .insertOne(this)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log('err');
                next(err);
            })

        }
        catch(e){
            console.log(e);
            throw e;
        }

    }
}

module.exports = Member;