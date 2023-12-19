const ProductSchema = require("../schema/ProductSchema");

const getproductid = async (req, res) => {
  const id = req.params.id;
  const response = await ProductSchema.findById( id );
  if (!response) {
    res.send('productid not found');    
  } else {
    res.send(response)
  }
};
module.exports = getproductid;
