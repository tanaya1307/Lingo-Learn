const express = require('express');
const router = express.Router();
const QuizQuestion = require('../models/quiz'); // Adjust the path accordingly

// Define a route to fetch quiz questions
router.get('/Spanish_Quiz', async (req, res) => {
  try {
    const questions = await QuizQuestion.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
