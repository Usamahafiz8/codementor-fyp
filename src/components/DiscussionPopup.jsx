import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './DiscussionPopup.css'; // Import CSS for chat styling

function DiscussionPopup({ show, handleClose, forumId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const commentsEndRef = useRef(null);

  useEffect(() => {
    if (show) {
      // Fetch comments when the modal opens
      axios.get(`${process.env.REACT_APP_API_URL}/api/all-comments`)
        .then(response => {
          setComments(response.data.comments);
        })
        .catch(error => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [show]);

  useEffect(() => {
    // Scroll to the last comment when comments change
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  const handleAddComment = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/comments/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        text: newComment,
        forumId: forumId
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.comment) {
          setComments([...comments, data.comment]);
          setNewComment("");
          commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error("Error adding comment:", data);
        }
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="comments-section">
          <div className="comments-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {comments.map(comment => (
              <div key={comment._id} className="comment">
                <div className="comment-bubble">
                  <strong>{comment.userId.username} 
                    {/* ({comment.userId.email}) */}
                    </strong>{comment.text}
                </div>
              </div>
            ))}
            <div ref={commentsEndRef}></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Control
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddComment}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DiscussionPopup;
