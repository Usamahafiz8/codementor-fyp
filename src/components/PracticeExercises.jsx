// PracticeExercises.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PracticeExercises.css';
import javaQuizQuestions from './javaQuizQuestions'; // Import quiz questions from the separate file

function PracticeExercises() {
  // Placeholder data for exercises
  const exercises = [
    { id: 1, title: "Basic Java Exercise", description: "Sharpen your Java skills with basic exercises.", difficulty: "Easy" },
    // ... more exercises
  ];

  // State for managing quiz
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Function to select 10 random questions from javaQuizQuestions
    const selectRandomQuestions = () => {
      const shuffledQuestions = javaQuizQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffledQuestions.slice(0, 10);
      setQuizQuestions(selectedQuestions);
    };

    if (quizStarted) {
      selectRandomQuestions();
    }
  }, [quizStarted]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelection = (selectedAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate result
      setShowResult(true);
    }
  };

  const calculateResult = async () => {
    // Calculate the user's score based on correct answers
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score++;
      }
    });

    // Display the result to the user
    alert(`Quiz completed! Your score is ${score} out of ${quizQuestions.length}`);

    // Save the quiz record to the database
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'your_user_id', // Replace with actual user ID
          quizId: 'java_quiz_id', // Replace with actual quiz ID or pass it from your quiz component
          score: score
        })
      });

      const data = await response.json();
      console.log('Quiz record saved:', data);
    } catch (error) {
      console.error('Error saving quiz record:', error.message);
    }
  };

  return (
    <div className="practice-exercises container my-5">
      {!quizStarted ? (
        <div>
          <h1 className="text-center mb-4">Practice Exercises</h1>
          <div className="row">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{exercise.title}</h5>
                    <p className="card-text">{exercise.description}</p>
                    <p className="card-text"><small className="text-muted">Difficulty: {exercise.difficulty}</small></p>
                    <Link to={`/exercises/${exercise.id}`} className="btn btn-primary">Start Exercise</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={startQuiz} className="btn btn-primary mt-3">Start Quiz</button>
        </div>
      ) : (
        <div>
          {showResult ? (
            <div>
              <h1 className="text-center mb-4">Quiz Result</h1>
              <div className="text-center">
                <button onClick={calculateResult} className="btn btn-primary mt-3">Show Result</button>
              </div>
            </div>
          ) : (
            quizQuestions.length > 0 && (
              <div>
                <h1 className="text-center mb-4">Quiz</h1>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{quizQuestions[currentQuestion].question}</h5>
                    <div className="options">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <div key={index} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`question-${currentQuestion}`}
                            id={`option-${index}`}
                            value={option}
                            onChange={() => handleAnswerSelection(option)}
                            checked={userAnswers[currentQuestion] === option}
                          />
                          <label className="form-check-label" htmlFor={`option-${index}`}>
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    <button onClick={nextQuestion} className="btn btn-primary mt-3">Next</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default PracticeExercises;
