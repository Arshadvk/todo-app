const express = require ('express');
const mongoose =require('mongoose');
const app=express()
const cors = require('cors');




// Enable all CORS requests
app.use(cors());


const router = require('./routes/ToDoRoute')

require('dotenv').config()

const PORT = process.env.port || 5000 

app.use(express.json())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connect To MongoDB...`))
.catch((err)=> console.log(err))

app.use(router)
app.listen(PORT , ()=>console.log(`Listening on : ${PORT}`))