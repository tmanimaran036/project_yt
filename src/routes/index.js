const express = require('express');
const indexRouter =express.Router();
const { controllerRouter, crudController,customerController,}= require('../controllers');
const UserRouter = require('./user/user_router');

indexRouter.get(/^\/$|\/home?(.html)$/,(req,res)=>{
    res.json({message:'index router'})
});
indexRouter.use('/role',controllerRouter)
indexRouter.use('/users',UserRouter)
indexRouter.use('/crud',crudController)
indexRouter.use('/customer',customerController)


module.exports={ indexRouter}