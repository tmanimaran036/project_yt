const express = require('express');
const app = express();
const { PORT }=require('./config/index.js')
const { indexRouter } = require('./routes')

app.get('/',(req,res)=>{
    res.json({"message":"welcome our application "})
})
app.use('/api',indexRouter)

app.listen(PORT,()=>{
    console.log(`server on port number is ${PORT}  `)
});