import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Import your route components
import HomePage from "./components/HomePage";
import LearningResources from "./components/LearningResources";
import Tutorials from "./components/Tutorials";
import InteractiveTools from "./components/InteractiveTools";

import PracticeExercises from "./components/PracticeExercises";
import RealTimeCodeAnalysis from "./components/RealTimeCodeAnalysis";
import PersonalizedLearningPaths from "./components/PersonalizedLearningPaths";
import ProgressMonitoring from "./components/ProgressMonitoring";
import CommunityInteraction from "./components/CommunityInteraction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./components/Navbar.css";
import Documentation from "./components/Documentation";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigation();

  useEffect(() => {
    // Check for JWT in local storage to set authentication status
    const token = localStorage.getItem("jwt");
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    // Remove JWT from local storage and update authentication status
    localStorage.removeItem("jwt");
    setIsAuthenticated(false);
    // navigate('/'); // Navigate back to home on logout
  };
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <Link className="navbar-brand" to="/">
              CODEMENTOR
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {isAuthenticated ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module1">
                        Resources
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module2">
                        Exercises
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module3">
                        Code Analysis
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module4">
                        Learning Paths
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module5">
                        Progress Monitoring
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/module6">
                        Community Interaction
                      </Link>
                    </li>

                    <li className="nav-item">
                      <button className="btn nav-link" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module1" element={<LearningResources />} />
          <Route path="/module1/tutorials" element={<Tutorials />} />
          <Route
            path="/module1/InteractiveTools"
            element={<InteractiveTools />}
          />

          <Route path="/module2" element={<PracticeExercises />} />
          <Route path="/module3" element={<RealTimeCodeAnalysis />} />
          <Route path="/module4" element={<PersonalizedLearningPaths />} />
          <Route path="/module5" element={<ProgressMonitoring />} />
          <Route path="/module6" element={<CommunityInteraction />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Include other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
