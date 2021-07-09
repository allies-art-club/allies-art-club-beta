const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
//create closure containing instance of db, only functions in this file have direct access to db
let _db;
const dbConnect = (callback) => {
    //connect to mongo db, needs to be used as soon as possible in application (wrap the server.listen)
    MongoClient
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5ykkl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{ useUnifiedTopology: true })
        .then((client)=>{

            //store access to the data base in _db (could acess alternative database by e.g client.db(db_name))
            //if db_name does not exist yet, it will create it as soon as you start writing to it
            _db=client.db()
            callback();
        })
        .catch((e)=>{
            console.log(e);
            throw e;
        })
        
}
const getDb=()=>{
//return access to database when required
    if(_db){
        return _db
    }
    throw new Error('Database not found')
}
module.exports = {getDb,dbConnect};