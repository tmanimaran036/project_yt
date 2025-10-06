const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name:'User',
  tableName:'users',
  columns:{
    id :{
        primary:true,
        type:'int',
        generated:true
    },
    name: {
      type: 'varchar'
    },
    email: {
      type: 'varchar',
      unique: true
    },
    age: {
      type: 'int'
    },
    password:{
      type:'varchar'
    }
  }
});
