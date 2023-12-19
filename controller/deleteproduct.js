const ProductSchema = require("../schema/ProductSchema");



const deleteproduct = async (req,res)=>{
        const id = req.params.id;
        const idcheck = await ProductSchema.findById(id);    
        if (!idcheck) {
            res.send({message:'product not found'})
        } else {
           const deleted = await ProductSchema.findByIdAndDelete(id)
           if (deleted) {
            res.send({message:'item delted successfully'})
           }
           else{
            res.send({message:'item not deleted'})
           }

        }
}
module.exports = deleteproduct