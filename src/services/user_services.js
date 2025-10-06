const { UserRepository }= require('../repositories')
const userRepository = new UserRepository();



async  function getAll(){
    try{
       const user= await userRepository.getAll()   
       return user
    }
    catch(error){
       console.error(error)
    }
}


async  function createUser(data){
    try{
       const user= await userRepository.create(data)   
       return user
    }
    catch(error){
       console.error(error)
    }
}

module.exports={ getAll,createUser }