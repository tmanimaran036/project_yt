const {getAll,createUser,getByEmail }=require('../../services')
const { StatusCodes } =require('http-status-codes')
const { successResponse,errorResponse } = require('../../utils/common')


async function  info(req,res){
   console.log(req.originalUrl )
   successResponse.message='user info page api';
   successResponse.data={};
   res
    .status(StatusCodes.OK)
    .json({successResponse})
}

async function getUsers(req,res){
   try{
     const users= await getAll()
     successResponse.data=users
     res
     .status(StatusCodes.OK)
     .json(successResponse)
    }
   catch(error){
      
      console.log(error)
   }

}

async function createUsers(req,res){
   try{
     console.log(req.body)
     const users= await createUser( req.body)
       res.json({
         users
      })   
    }
   catch(error){
      console.log(error)
   }

}

async function  getEmail(req,res){
   try{
     console.log(req.body)
      if(!req.body.email){
         return res
         .status(StatusCodes.BAD_REQUEST)
         .json({
            success:false,
            message:'Empty value',
            error: " get/email must be pares a email",
            data:{}
         })
      }
     const users= await getByEmail( req.body.email)
       res.json({
         users
      })   
    }
   catch(error){
      console.log(error)
   }

}


module.exports={ info,getUsers ,createUsers,getEmail }
