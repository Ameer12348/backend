const UserSchema = require("../schema/UserSchema");
const bcrypt = require("bcrypt");

const usercheck = async(req,res)=>{
    const data  = req.body;
    if (!data.userName || !data.password) {
        res.send({message:'please enter your username and password'})
        
    } else {
        
        const usernamecheck = await UserSchema.findOne({userName:data.userName})
        if (usernamecheck) {
            const checkpass = await bcrypt.compare(data.password,usernamecheck.password)
            if (checkpass) {
                
                res.send({message:'Loged in'})
            } else {
                res.send({message:'incorrect password'})
                
            }

        }
        else{
            res.send({message:'username does not exists'} ) 
        }
    }
}
module.exports = usercheck