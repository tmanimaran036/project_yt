const express=require('express')
const userController=express.Router();


userController.use('/',(req,res)=>{
    console.log(req.url)
    res.json({message:'hii is userController'})
})

module.exports= userController