// components/CommunityInteraction.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunityInteraction.css';
import DiscussionPopup from './DiscussionPopup';
import { Modal, Button, Form } from 'react-bootstrap';


function CommunityInteraction() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentForumId, setCurrentForumId] = useState(null);

  const forums = [
    { id: 1, title: "General Discussion", description: "Share your thoughts and ideas with the community." },
    { id: 2, title: "Help and Support", description: "Get help from peers and mentors on coding challenges." },
    // ... more forums
  ];

  const handleShowPopup = (forumId) => {
    setCurrentForumId(forumId);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="community-interaction container my-5">
      <h1 className="text-center mb-4 text-white text-white" >Community Interaction</h1>

      <div className="row">
        {forums.map(forum => (
          <div key={forum.id} className="col-lg-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{forum.title}</h5>
                <p className="card-text">{forum.description}</p>
                <Button variant="primary" onClick={() => handleShowPopup(forum.id)}>Join Discussion</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DiscussionPopup
        show={showPopup}
        handleClose={handleClosePopup}
        forumId={currentForumId}
      />
    </div>
  );
}

export default CommunityInteraction;
