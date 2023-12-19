const UserSchema = require("../schema/UserSchema");

const usercheck = async(req,res)=>{
    const data  = req.body;
    if (!data.userName || !data.password) {
        res.send({message:'please enter your username and password'})
        
    } else {
        
        const usernamecheck = await UserSchema.findOne({userName:data.userName, password:data.password})
        if (usernamecheck) {
            res.send({message:'Loged in'})
        }
        else{
            res.send({message:'incorrect username or password'} ) 
        }
    }
}
module.exports = usercheck