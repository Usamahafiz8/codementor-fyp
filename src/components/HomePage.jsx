import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const modules = [
    { id: 1, title: "Learning Resources", description: "Start with the fundamentals and explore advanced topics.", link: "/module1" },
    { id: 2, title: "Practice Exercises", description: "Hands-on coding exercises with immediate feedback.", link: "/module2" },
    { id: 3, title: "Real-time Code Analysis", description: "Improve your code with live error-checking and suggestions.", link: "/module3" },
    { id: 4, title: "Personalized Learning Paths", description: "Custom learning tracks that adapt to your progress.", link: "/module4" },
    { id: 5, title: "Progress Monitoring", description: "Track your achievements and milestones with ease.", link: "/module5" },
    { id: 6, title: "Community Interaction", description: "Connect, collaborate, and share ideas with peers.", link: "/module6" },
  ];

  return (
    <div className="homepage">
      <header className="hero-section text-center text-white py-5">
        <h1 className="display-3">Unlock Your Coding Potential</h1>
        <p className="lead py-3">Join our community of learners and start your coding journey today.</p>
        <Link to="/signup" className="btn btn-success btn-lg">Get Started For Free</Link>
      </header>

      <section className="features-section container text-center my-5">
        <h2 className="mb-4">Explore Our Features</h2>
        <div className="row">
          {modules.map(module => (
            <div key={module.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{module.title}</h5>
                  <p className="card-text">{module.description}</p>
                  <Link to={module.link} className="btn btn-outline-primary">{module.title}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

 

<section className="courses-section container text-center my-5">
  <h2 className="mb-4">Featured Courses</h2>
  <div className="row">
    {/* Example course card */}
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Intro to java programming</h5>
          <p className="card-text">Learn the basics of Java in this beginner-friendly course.</p>
          <Link to="/courses/web-dev" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Java Advanced Tutorial</h5>
          <p className="card-text">Learn the basics of Java advanced Course in this  course.</p>
          <Link to="/courses/web-dev" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Intro to C++ Programming</h5>
          <p className="card-text">Learn the basics of C++ in this beginner-friendly course.</p>
          <Link to="/courses/web-dev" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    </div>
    
    {/* Repeat for other courses */}
  </div>
</section>



<section className="contact-us-section container my-5">
  <h2 className="text-center mb-4">Contact Us</h2>
  <form className="contact-form">
    <div className="form-group mb-3">
      <label htmlFor="contactName" className="form-label">Your Name</label>
      <input type="text" className="form-control" id="contactName" placeholder="Enter your name" required />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="contactEmail" className="form-label">Your Email</label>
      <input type="email" className="form-control" id="contactEmail" placeholder="Enter your email" required />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="contactMessage" className="form-label">Your Message</label>
      <textarea className="form-control" id="contactMessage" rows="3" placeholder="Type your message here" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Send Message</button>
  </form>
</section>





<footer className="footer bg-light py-4 mt-5"> 
        <div className="container text-center">
          <span>© 2024 CodeMentor. All rights reserved.</span>
          <ul className="nav justify-content-center"> 
            <li className="nav-item">
              <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
            </li>
            <li className="nav-item"> 
              <Link to="/terms-of-service" className="nav-link">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    
  );
}

export default HomePage;
