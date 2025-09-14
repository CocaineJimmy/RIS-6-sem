const express = require('express');
const examController = require('./exam.controller');

const router = express.Router();

router.get('/', examController.getAllExams);
router.get('/:examId', examController.getExamById);
router.get('/:examId/teachers', examController.getTeachersByExamId);
router.post('/', examController.createExam);
router.put('/:examId', examController.updateExam);
router.delete('/:examId', examController.deleteExam);

module.exports = router;