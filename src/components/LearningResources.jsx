import React from 'react';
import { Link } from 'react-router-dom';
import './LearningResources.css';
import Tutorials from './Tutorials';


function LearningResources() {
  return (
    <div className="learning-resources container my-5">
      <h1 className="text-center mb-4 text-white">Learning Resources</h1>
      
      <div className="row">
        {/* Card for Tutorials */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 ">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Tutorials</h5>
              <p className="card-text">Step-by-step guides to learn Java and C++ from basics to advanced topics.</p>
              
              <Link to="/module1/Tutorials" className="btn btn-primary">Browse Tutorials</Link> 

 
            </div>
           
          </div>
          
        </div>
           

        {/* Card for Interactive Tools */}
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Interactive Tools</h5>
              <p className="card-text">Engage with interactive coding simulators and quizzes to test your knowledge.</p>
              <Link to="/module2" className="btn btn-primary">Try Tools</Link>
            </div>
          </div>
        </div>

        {/* Card for Documentation */}
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Documentation</h5>
              <p className="card-text">Access comprehensive documentation for in-depth understanding of concepts.</p>
              <Link to="/documentation" className="btn btn-primary">Read Documentation</Link>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default LearningResources;
