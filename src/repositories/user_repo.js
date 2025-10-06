
const Curd = require('./crud_repo')
const { AppDataSource } =require('../config/db')
const { User } =require('../model/ormEntities')


class UserRepository extends Curd{
 constructor(){
    const user= AppDataSource.getRepository(User);
    super(user)
 }
}


module.exports=UserRepository