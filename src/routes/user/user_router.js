const express=require('express')
const UserRouter=express.Router()
const { userController } =require('../../controllers')  
const { userMiddlewares } = require('../../middlewares')
   
const {  createSchema ,validation} = require('../../validation/joi')

 UserRouter.get('/info',userController.info)
 UserRouter.get('/email',userController.getEmail)
 
 UserRouter.get('/', userController.getUsers);
//  UserRouter.post('/create', userMiddlewares.userCrete,userController.createUsers);
 UserRouter.post('/create',validation(createSchema,'body'),userController.createUsers);

module.exports= UserRouter  