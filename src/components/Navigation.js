// src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link,  useRoutes } from 'react-router-dom';
import HomePage from './HomePage';
import LearningResources from './LearningResources';
import Tutorials from './Tutorials';
import InteractiveTools from './InteractiveTools';
import PracticeExercises from './PracticeExercises';
import RealTimeCodeAnalysis from './RealTimeCodeAnalysis';
import PersonalizedLearningPaths from './PersonalizedLearningPaths';
import ProgressMonitoring from './ProgressMonitoring';
import CommunityInteraction from './CommunityInteraction';
import Login from './Login';
import Signup from './Signup';

function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useRoutes();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">CODEMENTOR</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/module1">Resources</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/module2">Exercises</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn nav-link" onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/module1" element={isAuthenticated ? <LearningResources /> : <Login />} />
        <Route path="/module2" element={isAuthenticated ? <PracticeExercises /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default Navigation;
