const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/dbConect');
const {readdirSync} = require('fs');
const path = require('path');


require('dotenv').config()
//middlewares
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello video play")
})
//routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

//serve static files
app.use('/public', express.static(path.join(__dirname, 'public')))


dbConnection()

app.listen(3003, () => {
console.log("server is connected")
 })


