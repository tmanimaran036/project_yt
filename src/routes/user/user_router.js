const express=require('express')
const UserRouter=express.Router()
const { userController } =require('../../controllers/index')  

 UserRouter.get('/',userController.getUsers);
 UserRouter.post('/create',userController.createUsers);

module.exports= UserRouter