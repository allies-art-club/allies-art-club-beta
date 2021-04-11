const app = require('./app.js');
const {dbConnect} = require('./router/database/connection');
const port = process.env.PORT || 5000;


dbConnect(()=>{
  //start up after connection to database established
  console.log('Connected to database')
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
})