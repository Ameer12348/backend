const mongoose = require('mongoose');


const UserSchema  = new mongoose.Schema({
    
    userName:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    }

})


module.exports = mongoose.model('user', UserSchema)