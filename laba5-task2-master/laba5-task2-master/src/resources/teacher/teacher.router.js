const express = require('express');
const teacherController = require('./teacher.controller');

const router = express.Router();

router.get('/', teacherController.getAllTeachers);
router.get('/:teacherId', teacherController.getTeacherById);
router.get('/:teacherId/exams', teacherController.getExamsByTeacherId);
router.post('/', teacherController.createTeacher);
router.put('/:teacherId', teacherController.updateTeacher);
router.delete('/:teacherId', teacherController.deleteTeacher);

module.exports = router;