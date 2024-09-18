import React from 'react';
import './HeroSection.css'; // Custom CSS for this section

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="event-title">Maitri Run 2024</h1>
        <p className="event-tagline">Run for a Cause, Run for Health</p>
        <a href="#register" className="register-button">Register Now!</a>
      </div>
    </div>
  );
};

export default HeroSection;
