import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Button,
  Modal,
} from "react-bootstrap";
import "./Tutorials.css";
import { mockData } from "./JavatotorialData";
import TopicList from "./TopicList";

function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        // Simulated fetch data
        setTutorials(mockData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  const openModal = (tutorial) => {
    setSelectedTutorial(tutorial);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Learning Resources</h1>

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
          {tutorials.map((tutorial) => (
            <Col key={tutorial.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{tutorial.title}</Card.Title>
                  <Card.Text>
                    {tutorial.description}
                    <div className="mt-2">
                      <span className="badge bg-secondary me-1">
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </Card.Text>
                  <Button variant="primary" onClick={() => openModal(tutorial)}>
                    View Tutorial
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Render TopicList in modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedTutorial && selectedTutorial.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTutorial && (
            <TopicList topics={[selectedTutorial]} /> // Pass selectedTutorial as an array
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Tutorials;
