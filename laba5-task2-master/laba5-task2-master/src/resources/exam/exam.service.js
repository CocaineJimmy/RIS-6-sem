const examRepo = require('./exam.memory.repository');

function getAllExams() {
  return examRepo.getAllExams();
}

function getExamById(id) {
  return examRepo.getExamById(id);
}

function getExamsByAbiturientId(abiturientId) {
  return examRepo.getExamsByAbiturientId(abiturientId);
}

function getExamsByTeacherId(teacherId) {
  return examRepo.getExamsByTeacherId(teacherId);
}

function createExam(data) {
  return examRepo.createExam(data);
}

function updateExam(id, data) {
  return examRepo.updateExam(id, data);
}

function deleteExam(id) {
  return examRepo.deleteExam(id);
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