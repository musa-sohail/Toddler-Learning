import React, { useState } from 'react';

const questions = [
  {
    question: 'Match the animal with its name:',
    options: ['Lion', 'Goat', 'Zebra', 'Hare', 'Monkey'],
    answer: 'Zebra',
    imageUrl: 'images/animals/zebra.jpg', // Path to the image of the animal
  },
  {
    question: 'Match the animal with its name:',
    options: ['Lion', 'Goat', 'Zebra', 'Hare', 'Monkey'],
    answer: 'Monkey',
    imageUrl: 'images/animals/monkey.jpg', // Path to the image of the animal
  },
  {
    question: 'Match the animal with its name:',
    options: ['Lion', 'Goat', 'Zebra', 'Hare', 'Monkey'],
    answer: 'Hare',
    imageUrl: 'images/animals/hare.jpg', // Path to the image of the animal
  },
  {
    question: 'Match the animal with its name:',
    options: ['Lion', 'Goat', 'Zebra', 'Hare', 'Monkey'],
    answer: 'Goat',
    imageUrl: 'images/animals/goat.jpg', // Path to the image of the animal
  },
  {
    question: 'Match the animal with its name:',
    options: ['Lion', 'Goat', 'Zebra', 'Hare', 'Monkey'],
    answer: 'Lion',
    imageUrl: 'images/animals/lion.jpg', // Path to the image of the animal
  }
];

const AnimalsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [marks, setMarks] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setMarks((prevMarks) => prevMarks + 1);
    }
    setSelectedOption('');
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setMarks(0);
    setQuizCompleted(false);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {!quizCompleted ? (
        <div className="p-6 rounded-lg w-full lg:w-3/4 mx-auto shadow-md bg-transparent">
         
          <div className="mt-4">
            <img src={questions[currentQuestion].imageUrl} alt="Animal" className="mx-auto mb-4" />
            <h3 className="text-xl text-dark">{questions[currentQuestion].question}</h3>
            <div className="mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full p-2 mt-2 rounded-lg ${
                    selectedOption === option ? 'bg-sky-600' : 'bg-sky-500'
                  } hover:bg-sky-600 text-white`}
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
        <div className="p-6 rounded-lg w-full lg:w-3/4 mx-auto shadow-md bg-transparent text-dark text-center">
          <h2 className="text-2xl font-bold text-sky-600">Quiz Completed!</h2>
          <p className="mt-4 text-dark text-lg">Your score: {marks}/{questions.length}</p>
          <button
            className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg"
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimalsQuiz;
