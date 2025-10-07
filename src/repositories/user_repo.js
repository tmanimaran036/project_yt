
const Curd = require('./crud_repo')
const { AppDataSource } =require('../config/db')
const { User } =require('../model/ormEntities')


class UserRepository extends Curd{
 constructor(){
    const user= AppDataSource.getRepository(User);
    super(user)
 }
 
 async findByEmail(email){
    return this.repository.findOneBy({email})
 }

}


module.exports=UserRepository