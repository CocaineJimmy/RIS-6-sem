const teacherRepo = require('./teacher.memory.repository');
const examService = require('../exam/exam.service');

function getAllTeachers() {
  return teacherRepo.getAllTeachers();
}

function getTeacherById(id) {
  return teacherRepo.getTeacherById(id);
}

function getExamsByTeacherId(teacherId) {
  return examService.getExamsByTeacherId(teacherId);
}

function createTeacher(data) {
  return teacherRepo.createTeacher(data);
}

function updateTeacher(id, data) {
  return teacherRepo.updateTeacher(id, data);
}

function deleteTeacher(id) {
  const exams = examService.getExamsByTeacherId(id);
  exams.forEach(exam => {
    exam.teacherId = null;
    if (exam.abiturientId === null) {
      examService.deleteExam(exam.id);
    }
  });
  return teacherRepo.deleteTeacher(id);
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  getExamsByTeacherId,
  createTeacher,
  updateTeacher,
  deleteTeacher
};