import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityInteraction.css';

function CommunityInteraction() {
  // Placeholder data for community features
  const forums = [
    { id: 1, title: "General Discussion", description: "Share your thoughts and ideas with the community." },
    { id: 2, title: "Help and Support", description: "Get help from peers and mentors on coding challenges." },
    // ... more forums
  ];

  return (
    <div className="community-interaction container my-5">
      <h1 className="text-center mb-4">Community Interaction</h1>

      <div className="row">
        {/* Forum and Discussion Cards */}
        {forums.map(forum => (
          <div key={forum.id} className="col-lg-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{forum.title}</h5>
                <p className="card-text">{forum.description}</p>
                <Link to={`/forums/${forum.id}`} className="btn btn-primary">Join Discussion</Link>
              </div>
            </div>
          </div>
        ))}

        {/* More community interaction features can be added here */}
      </div>
    </div>
  );
}

export default CommunityInteraction;
