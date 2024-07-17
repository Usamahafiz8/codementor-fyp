import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalizedLearningPaths.css';

function PersonalizedLearningPaths() {
  // Placeholder data for personalized learning paths
  const learningPaths = [
    { id: 1, title: "Beginner Java Track", description: "Start your journey with Java by learning the basics." },
    { id: 2, title: "Intermediate C++ Track", description: "Take your C++ skills to the next level with intermediate concepts." },
    // ... more paths
  ];

  return (
    <div className="personalized-learning-paths container my-5">
      <h1 className="text-center mb-4 text-white">Personalized Learning Paths</h1>
      <div className="row">
        {learningPaths.map((path) => (
          <div key={path.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{path.title}</h5>
                <p className="card-text">{path.description}</p>
                <Link to={`/learning-paths/${path.id}`} className="btn btn-primary">Explore Path</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalizedLearningPaths;
