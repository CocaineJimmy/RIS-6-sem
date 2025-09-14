const abiturientRepo = require('./abiturient.memory.repository');
const examService = require('../exam/exam.service');

function getAllAbiturients() {
  return abiturientRepo.getAllAbiturients();
}

function getAbiturientById(id) {
  return abiturientRepo.getAbiturientById(id);
}

function getExamsByAbiturientId(abiturientId) {
  return examService.getExamsByAbiturientId(abiturientId);
}

function createAbiturient(data) {
  return abiturientRepo.createAbiturient(data);
}

function updateAbiturient(id, data) {
  return abiturientRepo.updateAbiturient(id, data);
}

function deleteAbiturient(id) {
  const exams = examService.getExamsByAbiturientId(id);
  exams.forEach(exam => {
    exam.abiturientId = null;
    if (exam.teacherId === null) {
      examService.deleteExam(exam.id);
    }
  });
  return abiturientRepo.deleteAbiturient(id);
}

module.exports = {
  getAllAbiturients,
  getAbiturientById,
  getExamsByAbiturientId,
  createAbiturient,
  updateAbiturient,
  deleteAbiturient
};