const express=require('express')
const crudController=express.Router();

crudController.use('/',(req,res)=>{
    console.log(req.url)
    res.json({message:'hii is crudController'})
})

module.exports=crudController