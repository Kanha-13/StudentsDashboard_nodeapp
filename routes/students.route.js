const express = require('express');
const { getStudents, createStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');

const router = express.Router();

router.get('/students', getStudents);
router.post('/students', createStudent);
router.patch('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
