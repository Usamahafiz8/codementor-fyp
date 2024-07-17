import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProgressMonitoring.css";

function ProgressMonitoring() {
  const [userProfile, setUserProfile] = useState({
    name: "Loading...",
    email: "Loading...",
    level: "Loading...",
    avatar: "path/to/default/avatar.png", // Default avatar path
  });

  const [totalRegisteredCourses, setTotalRegisteredCourses] = useState(0);
  const [currentSection, setCurrentSection] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true); // New state to handle loading status
  const [error, setError] = useState(null); // New state to handle errors
  const [quizRecords, setQuizRecords] = useState([]); // New state to handle quiz records

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
        const profileData = response.data;
        setUserProfile({
          name: profileData.username || "No Name",
          email: profileData.email || "No Email Provided",
          level: profileData.skillLevel || "No Level Defined",
        });
        setQuizRecords(profileData.quizRecords || []);
        console.log(profileData);

        setTotalRegisteredCourses(profileData.totalRegisteredCourses || 0);
        setCurrentSection(profileData.currentSection || "No current section");
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to fetch data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error state
  }

  return (
    <div className="progress-monitoring container my-5">
      <h1 className="text-center mb-4 text-white">Your Progress Monitoring</h1>
      <div className="row">
        {/* User Profile Card */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-header">User Profile</div>
            <div className="card-body">
              <h5 className="card-title">{userProfile.name}</h5>
              <p className="card-text">Email: {userProfile.email}</p>
              <p className="card-text">Level: {userProfile.level}</p>
              {/* <img src={userProfile.avatar} alt="Avatar" className="avatar-img" /> */}
            </div>
          </div>
        </div>

        {/* Progress Report Card */}
        <div className="col-md-8 mb-3">
          <div className="card">
            <div className="card-header">Quiz Report</div>
            <div className="card-body">
              {quizRecords.length > 0 ? (
                quizRecords.map((quiz, index) => (
                  <div key={index} className="quiz-record" style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}} >
                    <p>Score: {quiz.score}</p>
                    <p>Date: {new Date(quiz.timestamp).toLocaleString()}</p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No quiz records available.</p>
              )}
              {/* Additional fields can be added here */}
            </div>
          </div>
        </div>

        {/* Additional cards for course recommendations, upcoming sections, etc., can be added here */}
      </div>
    </div>
  );
}

export default ProgressMonitoring;
