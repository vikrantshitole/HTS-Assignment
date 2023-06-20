const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())

app.get('/',(req,res,next)=>{
    res.send('Hello HTS')
})
app.listen(3000,()=>{
    console.log('App running on http://localhost:3000');
})
