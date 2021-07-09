const mongo = require('mongodb');
const {getDb} = require('../database/connection.js');

class Member {
    constructor(date,name,email,dob,opportunities,otherOpportunities,art,otherArt){
        this.date=date,
        this.name=name,
        this.email=email,
        this.dob=dob,
        this.opportunities=opportunities,
        this.otherOpportunities=otherOpportunities,
        this.art=art,
        this.otherArt=otherArt
    }
    save(req,res,next){
        let db = getDb();
            return db.collection('members')
            .insertOne(this)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                next(err);
            })
    }
}

module.exports = Member;