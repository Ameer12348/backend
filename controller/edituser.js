const UserSchema = require("../schema/UserSchema");


const edituser = async (req,res)=>{
    const data = req.body;
    const userName = req.params.userName ;
    const userNameCheck = await UserSchema.findOne({userName: userName})
    if (userNameCheck) {
        const updatedata = await UserSchema.findOneAndUpdate(userNameCheck, data,{
            edit:true
        })
        if (updatedata) {
            res.send({message:'updated'})
            
        } else {
            res.send({message:'an error occurred'})
        }

    }
    else{
        res.send({message:'user not found'})
    }
}
module.exports = edituser