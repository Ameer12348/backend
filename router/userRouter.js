const express = require('express')
const userregister = require('../controller/userregister')
const usercheck = require('../controller/usercheck')
const getuser = require('../controller/getuser')
const edituser = require('../controller/edituser')



const userRouter = express.Router()



userRouter.post('/register',userregister)
userRouter.put('/login',usercheck)
userRouter.get('/getuser/:userName',getuser)
userRouter.put('/edituser/:userName',edituser)


module.exports = userRouter