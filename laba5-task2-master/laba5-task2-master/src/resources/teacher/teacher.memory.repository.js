const Teacher = require('./teacher.model');

let teachers = [];

function getAllTeachers() {
  return teachers;
}

function getTeacherById(id) {
  return teachers.find(teacher => teacher.id === id);
}

function createTeacher(data) {
  const newTeacher = new Teacher(data.id, data.name, data.surname, data.subject);
  teachers.push(newTeacher);
  return newTeacher;
}

function updateTeacher(id, data) {
  const teacher = getTeacherById(id);
  if (teacher) {
    teacher.name = data.name;
    teacher.surname = data.surname;
    teacher.subject = data.subject;
    return teacher;
  }
  return null;
}

function deleteTeacher(id) {
  const index = teachers.findIndex(teacher => teacher.id === id);
  if (index !== -1) {
    teachers.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
};