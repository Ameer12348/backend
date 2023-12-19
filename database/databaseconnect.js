const mongoose = require('mongoose');
const colors = require('colors')

const databaseconnect = async()=>{
    try{
        await mongoose.connect('mongodb+srv://ameer:1276@dans.3magesj.mongodb.net/dans?retryWrites=true&w=majority')
        console.log('database connection established'.bgGreen);
    }
    catch(er){
        console.log(er.bgRed);
    }

}
module.exports = databaseconnect
