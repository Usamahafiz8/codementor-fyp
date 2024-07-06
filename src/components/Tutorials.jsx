import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import './Tutorials.css'; 

function Tutorials() {
  const [isLoading, setIsLoading] = useState(true); // Start with loading state
  const [error, setError] = useState(null);

  // Mock Data (Replace with backend calls later)
  const mockTutorials = [
    { 
      id: 1, 
      title: "Introduction to Java", 
      description: "Learn the basics of Java programming...",
      difficulty: "Beginner",
      // Add an image URL later 
    },
    // Add more mock tutorial objects as needed
  ];

  useEffect(() => {
    // Simulate slight delay for demonstration
    setTimeout(() => {
      setIsLoading(false); // Update loading state
    }, 1000); // 1-second delay
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Learning Resources</h1>

      {/* Filter Options (Add implementation later) */}
      {/* <div className="mb-3"> ... Add filtering here ...</div> */}

      {isLoading && ( 
        <div className="text-center">
          <Spinner animation="border" /> Loading Tutorials... 
        </div>
      )}

      {error && ( 
        <div className="text-center text-danger">Error: {error.message}</div>
      )}

      {!isLoading && !error && (
        <Row xs={1} md={2} lg={3} className="g-4"> 
          {mockTutorials.map((tutorial) => ( 
            <Col key={tutorial.id}>
              <Card>
                {/* Image (Add image URLs later) */}
                {/* <Card.Img variant="top" src={tutorial.image} /> */}
                <Card.Body>
                  <Card.Title>{tutorial.title}</Card.Title>
                  <Card.Text>
                    {tutorial.description} 
                    <div className="mt-2"> 
                      <span className="badge bg-secondary me-1">{tutorial.difficulty}</span>
                    </div>
                  </Card.Text> 
                  <Button variant="primary" href={`/tutorials/${tutorial.id}`}>
                    View Tutorial
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Tutorials;
