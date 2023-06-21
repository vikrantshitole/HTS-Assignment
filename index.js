const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config();
const db = require('./Models')
const app = express()
const routes = require('./routes')
app.use(bodyParser.json())
db()

app.use('/users',routes)

app.listen(3000,()=>{
    console.log('App running on http://localhost:3000');
})
