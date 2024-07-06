import React, { useState, useEffect } from 'react';
import './ProgressMonitoring.css'; 

function ProgressMonitoring() {
  // Placeholder data (Replace with data fetched from backend later)
  const [userProfile, setUserProfile] = useState({
    name: "Masab",
    email: "@example.com",
    level: "Advanced",
    avatar: "" 
  });

  const [progressReport, setProgressReport] = useState({
    coursesCompleted: 2,
    currentCourse: "React Fundamentals",
    performance: "85%" 
  });

  const [totalRegisteredCourses, setTotalRegisteredCourses] = useState(5); 
  const [currentSection, setCurrentSection] = useState('Module 3');

  // ... (useEffect for fetching data - remains conceptually the same)

  return (
    <div className="progress-monitoring container my-5">
      <h1 className="text-center mb-4">Your Progress Monitoring</h1>

      <div className="row">
        {/* User Profile Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              User Profile
            </div>
            <div className="card-body">
              <img src={userProfile.avatar} alt="User Avatar" className="avatar" />
              <h5 className="card-title">{userProfile.name}</h5>
              <p className="card-text">Email: {userProfile.email}</p>
              <p className="card-text">Level: {userProfile.level}</p>
            </div>
          </div>
        </div>

        {/* Total Registered Courses Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              Total Registered Courses
            </div>
            <div className="card-body">
              <h5 className="card-title">{totalRegisteredCourses}</h5>
            </div>
          </div>
        </div>

        {/* Current Section Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              Current Section
            </div>
            <div className="card-body">
              <p className="card-text">{currentSection}</p> 
            </div>
          </div>
        </div>

        {/* Progress Report Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              Progress Report
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Courses Completed: {progressReport.coursesCompleted}</li>
              <li className="list-group-item">Current Course: {progressReport.currentCourse}</li>
              <li className="list-group-item">Overall Performance: {progressReport.performance}</li>
            </ul>
          </div>
        </div>

        {/* Course Recommendations Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">
              Course Recommendations
            </div>
            <ul className="list-group list-group-flush"> 
              <li className="list-group-item">Advanced JavaScript Techniques</li>
              <li className="list-group-item">Data Structures with Python</li>
              <li className="list-group-item">Mastering C++ Concepts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressMonitoring;
