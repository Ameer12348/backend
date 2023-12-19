const express = require('express');
const cors = require('cors');
const colors = require('colors');
const databaseconnect = require('./database/databaseconnect');
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');


 

////////////////////// database connect fuction start //////////////////////
databaseconnect()
////////////////////// database connect fuction end //////////////////////


 


const port = 8080;
const app = express();
app.use(express.json())
app.use(cors())
app.use('/',productRouter)
app.use('/',userRouter)


app.listen(port,()=>{
    
    console.log(`listening on ${port}`.bgWhite.black);
});






///////////////// listening on port 8080 /////////////////

