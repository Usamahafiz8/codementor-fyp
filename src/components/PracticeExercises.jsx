import React from 'react';
import { Link } from 'react-router-dom';
import './PracticeExercises.css';

function PracticeExercises() {
  // Placeholder data for exercises
  const exercises = [
    { id: 1, title: "Basic Java Exercise", description: "Sharpen your Java skills with basic exercises.", difficulty: "Easy" },
    { id: 2, title: "Intermediate C++ Challenge", description: "Take on challenges to master C++.", difficulty: "Intermediate" },
    // ... more exercises
  ];

  return (
    <div className="practice-exercises container my-5">
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
    </div>
  );
}

export default PracticeExercises;
