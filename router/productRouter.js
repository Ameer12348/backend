const express = require('express')
const postproduct = require('../controller/postproduct')
const getproducts = require('../controller/getproducts')
const getproductid = require('../controller/getproductid')
const updateproduct = require('../controller/updateproduct')
const deleteproduct = require('../controller/deleteproduct')
const getproductscategory = require('../controller/getproductscategory')



const productRouter = express.Router()

//////////////// posting a product //////////////////
productRouter.post('/products/post',postproduct) 

//////////////// getting products //////////////////
productRouter.get('/products',getproducts)

//////////////// getting product by id //////////////////
productRouter.get('/products/:id',getproductid)

//////////////// getting product by category //////////////////
productRouter.get('/products/category/:category',getproductscategory)
 
//////////////// updating a product //////////////////
productRouter.put('/products/edit/:id',updateproduct)

//////////////// deleting a product //////////////////
productRouter.delete('/products/delete/:id',deleteproduct)

module.exports = productRouter