const path = require('path');

exports.get = (req,res) => {
    res.sendFile(path.join(__dirname,'..','..','..','client','build'))
}