const ProductSchema = require("../schema/ProductSchema");

const updateproduct = async (req, res) => {
  const id = req.params.id;
  const checkid = await ProductSchema.findById(id);
  if (checkid) {
    const update = await ProductSchema.findByIdAndUpdate(id,req.body,{
      edit:true
    })
    if (update) {
      res.send({message:'data updated successfully'})
    } else {
      res.send({message:'an error occurred '})      
    }
    
  } else {
    res.send({message:'product not found'})
  }
};
module.exports = updateproduct;