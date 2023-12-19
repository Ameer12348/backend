const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:{
        type:String,
        default:'N/a'
    },
    image:String,
    category:String,
    discount:{
        type:Number,
        default:0
    },
    rating:Object

    
})
 
module.exports = mongoose.model('products', ProductSchema)