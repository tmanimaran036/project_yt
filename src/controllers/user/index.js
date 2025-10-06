const {getAll,createUser }=require('../../services')

async function getUsers(req,res){
   try{
     const users= await getAll()
      res.json({
         users
      })   
    }
   catch(error){
      console.log(error)
   }

}

async function createUsers(req,res){
   try{
     console.log(req.body)
 
     const users= await createUser()
      res.json({
         users
      })   
    }
   catch(error){
      console.log(error)
   }

}

module.exports={ getUsers ,createUsers }
