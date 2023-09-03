const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const annSchema = new Schema({
    a_title: {
        type: String,
        requried: true
    },
    a_body: {
        type: String,
        requried: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Ann', annSchema);


