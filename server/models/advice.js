const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  question: String,
  answer: String,
  // more fields to be added
});

const Advice = mongoose.model('Advice', adviceSchema);
module.exports = Advice;
