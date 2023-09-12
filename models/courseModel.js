const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    course_name: {
        type: String,
        requried: true
    },
    course_id: {
        type: String,
        requried: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);


