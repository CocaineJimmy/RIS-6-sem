const teacherService = require('./teacher.service');

function getAllTeachers(req, res) {
  const teachers = teacherService.getAllTeachers();
  res.status(200).json(teachers);
}

function getTeacherById(req, res) {
  const teacher = teacherService.getTeacherById(req.params.teacherId);
  if (teacher) {
    res.status(200).json(teacher);
  } else {
    res.status(404).json({ message: 'Преподаватель не найден' });
  }
}

function getExamsByTeacherId(req, res) {
  const exams = teacherService.getExamsByTeacherId(req.params.teacherId);
  res.status(200).json(exams);
}

function createTeacher(req, res) {
  const { id, name, surname, subject } = req.body;
  if (!id || !name || !surname || !subject) {
    return res.status(400).json({ message: 'Все поля обязательны' });
  }
  const newTeacher = teacherService.createTeacher(req.body);
  res.status(201).json(newTeacher);
}

function updateTeacher(req, res) {
  const updatedTeacher = teacherService.updateTeacher(req.params.teacherId, req.body);
  if (updatedTeacher) {
    res.status(200).json(updatedTeacher);
  } else {
    res.status(404).json({ message: 'Преподаватель не найден' });
  }
}

function deleteTeacher(req, res) {
  const deleted = teacherService.deleteTeacher(req.params.teacherId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Преподаватель не найден' });
  }
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  getExamsByTeacherId,
  createTeacher,
  updateTeacher,
  deleteTeacher
};