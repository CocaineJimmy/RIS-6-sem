class Exam {
  constructor(id, abiturientId, teacherId, subject, score, date) {
    this.id = id;
    this.abiturientId = abiturientId;
    this.teacherId = teacherId;
    this.subject = subject;
    this.score = score;
    this.date = date;
  }
}

module.exports = Exam;