import React from 'react';
import './InteractiveTools.css';

function InteractiveTools() {
  return (
    <div className="interactive-tools container my-5">
      <h2 className="text-center mb-4">Interactive Tools</h2>
      <div className="row">
        {/* Coding Simulators */}
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Coding Simulators</h5>
              <p className="card-text">Practice coding in a simulated environment to refine your skills.</p>
              <button className="btn btn-primary">Try Coding Simulators</button>
            </div>
          </div>
        </div>

        {/* Quizzes */}
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Quizzes</h5>
              <p className="card-text">Test your knowledge with interactive quizzes covering various programming topics.</p>
              <button className="btn btn-primary">Take Quizzes</button>
            </div>
          </div>
        </div>

        {/* Puzzles */}
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Puzzles</h5>
              <p className="card-text">Solve coding puzzles to challenge yourself and improve problem-solving skills.</p>
              <button className="btn btn-primary">Solve Puzzles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveTools;
