const Exam = require('./exam.model');

let exams = [];

function getAllExams() {
  return exams;
}

function getExamById(id) {
  return exams.find(exam => exam.id === id);
}

function getExamsByAbiturientId(abiturientId) {
  return exams.filter(exam => exam.abiturientId === abiturientId);
}

function getExamsByTeacherId(teacherId) {
  return exams.filter(exam => exam.teacherId === teacherId);
}

function createExam(data) {
  const newExam = new Exam(data.id, data.abiturientId, data.teacherId, data.subject, data.score, data.date);
  exams.push(newExam);
  return newExam;
}

function updateExam(id, data) {
  const exam = getExamById(id);
  if (exam) {
    exam.abiturientId = data.abiturientId;
    exam.teacherId = data.teacherId;
    exam.subject = data.subject;
    exam.score = data.score;
    exam.date = data.date;
    return exam;
  }
  return null;
}

function deleteExam(id) {
  const index = exams.findIndex(exam => exam.id === id);
  if (index !== -1) {
    exams.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllExams,
  getExamById,
  getExamsByAbiturientId,
  getExamsByTeacherId,
  createExam,
  updateExam,
  deleteExam
};