import React, { useState } from "react";
import "./RealTimeCodeAnalysis.css";
import { JSHINT } from "jshint";

function RealTimeCodeAnalysis() {
  const [code, setCode] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    // Dummy analysis result update
    setAnalysisResult("No errors found. Keep coding!");
  };

  // Function to simulate code analysis
  // const analyzeCode = () => {
  //   // Logic for analyzing code goes here
  //   // For now, it just sets a dummy analysis result
  //   setAnalysisResult('Analysis complete. No issues detected.');
  // };

  const [result, setResult] = useState("");

  const handleLint = () => {
    JSHINT(code);
    const errors = JSHINT.errors;
    const output =
      errors && errors.length > 0
        ? errors
            .map(
              (err) => `Line ${err.line}, Col ${err.character}: ${err.reason}`
            )
            .join("\n")
        : "Code is good, no errors found.";
    setResult(output);
  };

  return (
    <div className="real-time-code-analysis container my-5">
      <h1 className="text-center mb-4">Real-time Code Analysis</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body ">
              <h5 className="card-title">Write Your Code</h5>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your JavaScript code here..."
                rows="10"
                cols="50"
                className="analysis-result bg-light p-3 border rounded"
              />
              {/* <button onClick={handleLint}>Check Code</button> */}
            </div>
              <button className="btn btn-primary mt-3" onClick={handleLint}>
                Analyze Code
              </button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Analysis Results</h5>
              <div className="analysis-result bg-light p-3 border rounded">
                {/* {analysisResult} */}
                {result}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeCodeAnalysis;
