const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const annSchema = new Schema({
    a_title: {
        type: String,
        required: true
    },
    a_body: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Ann', annSchema);


