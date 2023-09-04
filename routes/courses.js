const express = require('express');
const{
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse
} = require('../controllers/coursesController');

const router = express.Router();

//To GET all courses
router.get('/', getCourses);


//To GET single course
router.get('/:id', getCourse);

//POST a new course
router.post('/', createCourse);

//DELETE a new course
router.delete('/:id', deleteCourse);

//UPDATE a new course
router.patch('/:id', updateCourse);

module.exports = router;