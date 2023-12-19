const ProductSchema = require("../schema/ProductSchema");

const getproducts = async (req, res) => {
  const response = await ProductSchema.find();
  if(response.length>0){
    res.send(response);
  }
  else{
    res.send({message:'no items found'})
  }
};
module.exports = getproducts;
