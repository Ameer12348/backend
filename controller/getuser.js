const UserSchema = require("../schema/UserSchema");

const getuser = async(req,res)=>{
    const userName = req.params.userName;
    const usernamecheck = await UserSchema.findOne({userName: userName})
    if (usernamecheck) {
        res.send(usernamecheck)
    } else {
        res.send({message:'uset does not exist'})
    }
}
module.exports = getuser;