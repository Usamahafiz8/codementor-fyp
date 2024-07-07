import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProgressMonitoring.css';

function ProgressMonitoring() {
  const [userProfile, setUserProfile] = useState({
    name: "Loading...",
    email: "Loading...",
    level: "Loading...",
    avatar: "path/to/default/avatar.png"  // Default avatar path
  });

  const [progressReport, setProgressReport] = useState({
    coursesCompleted: 0,
    currentCourse: "Loading...",
    performance: "0%" 
  });

  const [totalRegisteredCourses, setTotalRegisteredCourses] = useState(0); 
  const [currentSection, setCurrentSection] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(true); // New state to handle loading status
  const [error, setError] = useState(null); // New state to handle errors

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
        });
        const profileData = response.data;
        setUserProfile({
          name: profileData.username || "No Name",
          email: profileData.email || "No Email Provided",
          level: profileData.skillLevel || "No Level Defined",
          avatar: profileData.avatar || 'path/to/default/avatar.png'
        });

        // Example static data for progress report
        setProgressReport({
          coursesCompleted: profileData.coursesCompleted || 0,
          currentCourse: profileData.currentCourse || "No current course",
          performance: profileData.performance || "0%"
        });

        setTotalRegisteredCourses(profileData.totalRegisteredCourses || 0);
        setCurrentSection(profileData.currentSection || "No current section");
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch data. Please try again.');
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;  // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error state
  }

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
              <h5 className="card-title">{userProfile.name}</h5>
              <p className="card-text">Email: {userProfile.email}</p>
              <p className="card-text">Level: {userProfile.level}</p>
              <img src={userProfile.avatar} alt="Avatar" className="avatar-img" />
            </div>
          </div>
        </div>

        {/* Progress Report Card */}
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header">
              Progress Report
            </div>
            <div className="card-body">
              <p className="card-text">Courses Completed: {progressReport.coursesCompleted}</p>
              <p className="card-text">Current Course: {progressReport.currentCourse}</p>
              <p className="card-text">Performance: {progressReport.performance}</p>
              <p className="card-text">Total Registered Courses: {totalRegisteredCourses}</p>
              <p className="card-text">Current Section: {currentSection}</p>
            </div>
          </div>
        </div>
        
        {/* Additional cards for course recommendations, upcoming sections, etc., can be added here */}
      </div>
    </div>
  );
}

export default ProgressMonitoring;
