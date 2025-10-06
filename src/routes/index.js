const express = require('express');
const indexRouter =express.Router();
const { controllerRouter, crudController,customerController,userController }= require('../controllers')



indexRouter.get(/^\/$|\/home?(.html)$/,(req,res)=>{
    res.json({message:'index router'})
});
indexRouter.use('/role',controllerRouter)
indexRouter.use('/user',userController)
indexRouter.use('/crud',crudController )
indexRouter.use('/customer',customerController)


module.exports={ indexRouter}