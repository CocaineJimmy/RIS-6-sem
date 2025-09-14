const Abiturient = require('./abiturient.model');

let abiturients = [];

function getAllAbiturients() {
  return abiturients;
}

function getAbiturientById(id) {
  return abiturients.find(abiturient => abiturient.id === id);
}

function createAbiturient(data) {
  const newAbiturient = new Abiturient(data.id, data.name, data.surname, data.birthDate);
  abiturients.push(newAbiturient);
  return newAbiturient;
}

function updateAbiturient(id, data) {
  const abiturient = getAbiturientById(id);
  if (abiturient) {
    abiturient.name = data.name;
    abiturient.surname = data.surname;
    abiturient.birthDate = data.birthDate;
    return abiturient;
  }
  return null;
}

function deleteAbiturient(id) {
  const index = abiturients.findIndex(abiturient => abiturient.id === id);
  if (index !== -1) {
    abiturients.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllAbiturients,
  getAbiturientById,
  createAbiturient,
  updateAbiturient,
  deleteAbiturient
};