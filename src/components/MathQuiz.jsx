import React, { useState } from 'react';

const questions = [
  { question: 'What is 1 + 1?', options: ['1', '2', '3', '4'], answer: '2' },
  { question: 'What is 2 + 2?', options: ['2', '3', '4', '5'], answer: '4' },
  { question: 'What is 3 + 1?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'What is 4 + 0?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'What is 5 - 3?', options: ['2', '3', '4', '1'], answer: '2' },
  { question: 'What is 6 - 2?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'What is 7 - 4?', options: ['3', '4', '5', '6'], answer: '3' },
  { question: 'What is 8 - 3?', options: ['3', '4', '5', '6'], answer: '5' },
  { question: 'What is 9 - 5?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'What is 10 - 2?', options: ['3', '4', '5', '8'], answer: '8' },
];

const MathQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {!showScore ? (
        <div className="p-6 rounded-lg w-full lg:w-3/4 mx-auto shadow-md bg-transparent">
          
          <div className="mt-4">
            <h3 className="text-xl text-dark">{questions[currentQuestion].question}</h3>
            <div className="mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full p-2 mt-2 rounded-lg bg-sky-500 hover:bg-sky-800 text-white ${
                    selectedOption === option ? 'bg-sky-600' : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-lg w-full lg:w-3/4 mx-auto shadow-md bg-transparent text-center">
          <h2 className="text-2xl font-bold text-sky-600">Quiz Completed!</h2>
          <p className="text-lg text-dark mt-4">
            Your score: {score}/{questions.length}
          </p>
          <button
            className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-lg"
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MathQuiz;
