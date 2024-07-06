import React, { useState } from 'react';
import './RealTimeCodeAnalysis.css';

function RealTimeCodeAnalysis() {
  const [code, setCode] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    // Dummy analysis result update
    setAnalysisResult('No errors found. Keep coding!');
  };

  // Function to simulate code analysis
  const analyzeCode = () => {
    // Logic for analyzing code goes here
    // For now, it just sets a dummy analysis result
    setAnalysisResult('Analysis complete. No issues detected.');
  };

  return (
    <div className="real-time-code-analysis container my-5">
      <h1 className="text-center mb-4">Real-time Code Analysis</h1>

      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Write Your Code</h5>
              <textarea
                className="form-control"
                id="codeInput"
                rows="10"
                value={code}
                onChange={handleCodeChange}
                placeholder="Type your code here..."
              ></textarea>
              <button
                className="btn btn-primary mt-3"
                onClick={analyzeCode}
              >
                Analyze Code
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Analysis Results</h5>
              <div className="analysis-result bg-light p-3 border rounded">
                {analysisResult}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeCodeAnalysis;
