const express=require('express')
const customerController=express.Router();

customerController.use('/',(req,res)=>{
    console.log(req.url)
    res.json({message:'hii is customerController'})
})

module.exports=customerController