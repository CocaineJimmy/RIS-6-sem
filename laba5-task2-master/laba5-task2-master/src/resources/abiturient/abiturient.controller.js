const abiturientService = require('./abiturient.service');

function getAllAbiturients(req, res) {
  const abiturients = abiturientService.getAllAbiturients();
  res.status(200).json(abiturients);
}

function getAbiturientById(req, res) {
  const abiturient = abiturientService.getAbiturientById(req.params.abiturientId);
  if (abiturient) {
    res.status(200).json(abiturient);
  } else {
    res.status(404).json({ message: 'Абитуриент не найден' });
  }
}

function getExamsByAbiturientId(req, res) {
  const exams = abiturientService.getExamsByAbiturientId(req.params.abiturientId);
  res.status(200).json(exams);
}

function createAbiturient(req, res) {
  const { id, name, surname, birthDate } = req.body;
  if (!id || !name || !surname || !birthDate) {
    return res.status(400).json({ message: 'Все поля обязательны' });
  }
  const newAbiturient = abiturientService.createAbiturient(req.body);
  res.status(201).json(newAbiturient);
}

function updateAbiturient(req, res) {
  const updatedAbiturient = abiturientService.updateAbiturient(req.params.abiturientId, req.body);
  if (updatedAbiturient) {
    res.status(200).json(updatedAbiturient);
  } else {
    res.status(404).json({ message: 'Абитуриент не найден' });
  }
}

function deleteAbiturient(req, res) {
  const deleted = abiturientService.deleteAbiturient(req.params.abiturientId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Абитуриент не найден' });
  }
}

module.exports = {
  getAllAbiturients,
  getAbiturientById,
  getExamsByAbiturientId,
  createAbiturient,
  updateAbiturient,
  deleteAbiturient
};