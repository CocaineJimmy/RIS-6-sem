const examService = require('./exam.service');
const teacherService = require('../teacher/teacher.service');

function getAllExams(req, res) {
  const exams = examService.getAllExams();
  res.status(200).json(exams);
}

function getExamById(req, res) {
  const exam = examService.getExamById(req.params.examId);
  if (exam) {
    res.status(200).json(exam);
  } else {
    res.status(404).json({ message: 'Экзамен не найден' });
  }
}

function getTeachersByExamId(req, res) {
  const exam = examService.getExamById(req.params.examId);
  if (exam && exam.teacherId) {
    const teacher = teacherService.getTeacherById(exam.teacherId);
    res.status(200).json([teacher]);
  } else {
    res.status(404).json({ message: 'Преподаватель не найден' });
  }
}

function createExam(req, res) {
  const { id, abiturientId, teacherId, subject, score, date } = req.body;
  if (!id || !abiturientId || !teacherId || !subject || !score || !date) {
    return res.status(400).json({ message: 'Все поля обязательны' });
  }
  const newExam = examService.createExam(req.body);
  res.status(201).json(newExam);
}

function updateExam(req, res) {
  const updatedExam = examService.updateExam(req.params.examId, req.body);
  if (updatedExam) {
    res.status(200).json(updatedExam);
  } else {
    res.status(404).json({ message: 'Экзамен не найден' });
  }
}

function deleteExam(req, res) {
  const deleted = examService.deleteExam(req.params.examId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Экзамен не найден' });
  }
}

module.exports = {
  getAllExams,
  getExamById,
  getTeachersByExamId,
  createExam,
  updateExam,
  deleteExam
};