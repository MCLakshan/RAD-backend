require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const student = require('./routes/studentRouters')

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/student',student)

//connect mongodb
mongoose.connect(process.env.URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
    .catch(err=>{
    console.log(err)
})