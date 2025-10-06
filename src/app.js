const express = require('express');
const app = express();
const { indexRouter } = require('./routes')


app.get('/',(req,res)=>{
    res.json({"message":"welcome our application "})
})
app.use('/api',indexRouter)


module.exports=app