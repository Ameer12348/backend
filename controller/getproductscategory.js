const ProductSchema = require("../schema/ProductSchema")


const getproductscategory = async (req,res)=>{
    const category = req.params.category;
  const response = await ProductSchema.find( {category:category} );
  if (!response) {
    res.send('no category found');    
  } else {
    res.send(response)
  } 
}
module.exports = getproductscategory