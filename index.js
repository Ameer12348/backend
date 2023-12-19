require('dotenv').config()
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const databaseconnect = require('./database/databaseconnect');
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');


 




 


const port = process.env.PORT || 8080;
const app = express();
app.use(express.json())
app.use(cors())
app.use('/',productRouter)
app.use('/',userRouter)





////////////////////// database connect fuction start //////////////////////
databaseconnect().then(()=>{
 app.listen(port,()=>{
    
    console.log(`listening on ${port}`.bgWhite.black);
});
})
////////////////////// database connect fuction end //////////////////////








///////////////// listening on port 8080 /////////////////

