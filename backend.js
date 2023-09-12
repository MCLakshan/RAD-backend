require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const teacher = require('./routes/teacherRouters')

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/teacher',teacher)

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