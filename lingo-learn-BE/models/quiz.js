const mongoose = require('mongoose');

// Define the quiz question schema
const quizQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'], // Define valid level values
    required: true,
  },
});

// Define the quiz question model
const QuizQuestion = mongoose.model('QuizQuestion', quizQuestionSchema,'Spanish_Quiz');

module.exports = QuizQuestion;
