const express = require ('express');
const mongoose =require('mongoose');

const router = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express();
const PORT = process.env.port || 5000 

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connect To MongoDB...`))
.catch((err)=> console.log(err))

app.use(router)
app.listen(PORT , ()=>console.log(`Listening on : ${PORT}`))