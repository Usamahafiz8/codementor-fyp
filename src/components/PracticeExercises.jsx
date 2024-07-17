import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PracticeExercises.css";
import javaQuizQuestions from "./javaQuizQuestions"; // Import quiz questions from the separate file

function PracticeExercises() {
  const exercises = [
    {
      id: 1,
      title: "Basic Java Exercise",
      description: "Sharpen your Java skills with basic exercises.",
      difficulty: "Easy",
    },
    {
      id: 1,
      title: "Intermediate Java Exercise",
      description: "Sharpen your Java skills with Intermediate exercises.",
      difficulty: "Intermediate",
    },
    {
      id: 1,
      title: "Advance Java Exercise",
      description: "Sharpen your Java skills with Advance exercises.",
      difficulty: "Advance",
    },
    // ... more exercises
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const selectRandomQuestions = () => {
      const shuffledQuestions = javaQuizQuestions.sort(
        () => 0.5 - Math.random()
      );
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
      calculateResult();
    }
  };

  const calculateResult = async () => {
    let calculatedScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/quiz/store`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify({
                        score: calculatedScore,
          }),
        }
      );

      const data = await response.json();
      console.log("Quiz record saved:", data);
    } catch (error) {
      console.error("Error saving quiz record:", error.message);
    }
  };

  return (
    <div className="practice-exercises container my-5">
      {!quizStarted ? (
        <div>
          <h1 className="text-center mb-4 text-white">Practice Exercises</h1>
          <div className="row">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{exercise.title}</h5>
                    <p className="card-text">{exercise.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Difficulty: {exercise.difficulty}
                      </small>
                    </p>
                    {/* <Link to={`/exercises/${exercise.id}`} className="btn btn-primary">Start Exercise</Link> */}
                    <button
                      onClick={startQuiz}
                      className="btn btn-primary mt-3"
                    >
                      Start Quiz
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {showResult ? (
            <div>
              <h1 className="text-center text-white mb-4">Quiz Result</h1>
              <div className="text-center text-white">
                <p>
                  Your score is {score} out of {quizQuestions.length}
                </p>
                <Link to="/" className="btn btn-primary mt-3">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            quizQuestions.length > 0 && (
              <div>
                <h1 className="text-center mb-4 text-white">Quiz</h1>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {quizQuestions[currentQuestion].question}
                    </h5>
                    <div className="options">
                      {quizQuestions[currentQuestion].options.map(
                        (option, index) => (
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
                            <label
                              className="form-check-label"
                              htmlFor={`option-${index}`}
                            >
                              {option}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="btn btn-primary mt-3"
                    >
                      Next
                    </button>
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
