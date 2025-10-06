class curd {
    constructor(model){
        this.model=model
    }  
    
   async getAll(){
      try{  
        const response =await this.model.findAll()
        return response;
      }
      catch(error){
         console.log(error)
        throw new Error(error)
      }
   }

   async  getOne(data){
     try{
            const response =await this.model.findById({data})
            if(!response){
               return '!Not Found'
            }
            return response;
        }
        catch(error){
            console.log(error)
             throw new Error(error)
        }

   }

    async create(data){
        try{
            const response =await this.model.create(data)
            return response;
        }
        catch(error){
            console.log(error)
             throw new Error(error)
        }
    }

    async  updated(id,data){
          try{
            const response = this.getOne(id);
            return response.model.save(data)
        }
        catch(error){
            console.log(error)
             throw new Error(error)
        }
    }
    
   async delete(data){
     try{
            const response =await this.model.findById({data})
            if(!response){
               return '!Not Found'
            }
            return  this.model.delete({data});
        }
        catch(error){
            console.log(error)
             throw new Error(error)
        }

   }



}            