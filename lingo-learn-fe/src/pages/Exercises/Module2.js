import React, { useState, useEffect } from 'react';
import GlassContainer from '../../common/container';
import image from '../../images/reading.svg'
import result from '../../images/jelly-got-a-good-grade.png'

export default function SpanishVocabularyQuiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/Spanish_Quiz')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
       setQuizData(data);
       console.log(data)
    })
    .catch((error) => {
      console.error('Error fetching quiz data:', error);
    });},[])
  

  const handleAnswerClick = (selectedAnswer) => {
    if (!quizData[currentQuestion]) {
      return; // Check if quizData[currentQuestion] is undefined
    }

    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer, isCorrect }]);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter((answer) => answer.isCorrect);
    return (correctAnswers.length / quizData.length) * 100;
  };

  // Check if quizData[currentQuestion] is undefined before accessing its properties
  const currentQuestionData = quizData[currentQuestion];

  return (
    <div>
      {showScore ? (
        <GlassContainer>
        <div>
          <h2 className='font-bold p-2'>Quiz Results</h2>
          <p className='font-bold p-2'>Your score: {calculateScore()}%</p>
          <button onClick={resetQuiz} className='bg-red-400 p-2 text-white m-2 rounded-md'>Restart Quiz</button>
          <img src={result} width={'300px'}/>
        </div>
        </GlassContainer>
      ) : (
        <GlassContainer>
          <div className='p-2'>
            <h2 className='font-bold bg-red-400 p-2 rounded-md'>Question {currentQuestion + 1}</h2>
            {currentQuestionData ? (
              <div className='p-2'>
                <p className='font-bold'>{currentQuestionData.question}</p>
                <ul>
                  {currentQuestionData.options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                      style={{ cursor: 'pointer' }}
                      className='hover:bg-yellow-500 rounded-md p-2 hover:text-white'
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Loading question...</p>
            )}
          </div>
          <img src={image} width={'300px'}/>
        </GlassContainer>
      )}
     
    </div>
  );
}
