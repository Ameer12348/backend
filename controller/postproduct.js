const ProductSchema = require("../schema/ProductSchema");


const postproduct = async (req, res) => {
  const data = req.body;
  if (!data.title || !data.image || !data.price || !data.category) {
    
  }
  else{
    const productcheck = await ProductSchema.findOne({
      title: data.title,
    });
    if (productcheck) {
      res.send({ meassage: "product already exists" });
    } else {
      const savedata = await new ProductSchema(data).save();
      if (savedata) {
        res.send({ meassage: "data saved successfully" });
      } else {
        res.send({ meassage: "an error occurred saving" });
      }
    }
  
  }
};

module.exports = postproduct;
