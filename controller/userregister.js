const UserSchema = require("../schema/UserSchema");
const bcrypt = require("bcrypt");


const userregister = async (req, res) => {
  const {password,...data} = req.body;
  if ( !data.userName || !data.email || !password) {
    res.send({ message: "please provide all information" });
  } else {
    const emailcheck = await UserSchema.findOne({ email: data.email });
    if (emailcheck) {
      res.send({ message: "email already registered" });
    } else {
      const usernamecheck = await UserSchema.findOne({
        userName: data.userName,
      });
      if (usernamecheck) {
        res.send({ message: "username already registered" });
      } else {
        const hash = await bcrypt.hash(password,10)
        const savedata1 = new UserSchema({...data,password:hash});
        const savedata2 = await savedata1.save();
        if (savedata2) {
          res.send({ message: "registered successfully" });
        } else {
          res.send({ message: "an error occurred" });
        }
      }
    }
  }
};
module.exports = userregister