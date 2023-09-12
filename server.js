require('dotenv').config();

const express = require('express');

const annroutes = require('./routes/anns');
const courseroutes = require('./routes/courses');

const mongoose = require('mongoose');

//The express app...
const app = express();

//middlewear...
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});



app.use('/api/Anns', annroutes);

app.use('/api/courses', courseroutes);


//Connet to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //lisitn for requests...
        app.listen(process.env.PORT, () => {
            console.log('Connected to Database & Listeneing on port :', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })



