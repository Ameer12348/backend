const mongoose = require('mongoose');
const colors = require('colors')

const databaseconnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connection established'.bgGreen);
    }
    catch(er){
        console.log(er.bgRed);
    }

}
module.exports = databaseconnect
