import React from 'react';
import CountUp from 'react-countup';
import './AboutMaitri.css';

const AboutMaitri = () => {
  return (
    <div className="about-maitri-container">
      <div className="about-maitri-content">
        <div className="about-maitri-image">
          <img src="/maitri-run.jpg" alt="Maitri Run Event" />
        </div>
        <div className="about-maitri-text">
          <h1>About Maitri Run</h1>
          <p>
            The Maitri Run is more than just a marathon; it’s a celebration of community, health, and solidarity.
            Organized by the Maitri Foundation, this event brings together people from all walks of life to promote
            physical fitness, mental well-being, and social unity.
          </p>
          <p>
            Since its inception, the Maitri Run has inspired thousands of participants to challenge themselves,
            build lasting memories, and support meaningful causes. The funds raised during the event are directed
            towards various charitable initiatives aimed at improving the lives of underprivileged communities.
          </p>
          <p>
            Whether you’re a professional athlete or a casual runner, the Maitri Run offers categories for all age
            groups and fitness levels. Join us in this endeavor to run for a healthier, more compassionate world!
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <h2>
            <CountUp end={5000} duration={2.5} />+
          </h2>
          <p>Total Runners</p>
        </div>
        <div className="stat-item">
          <h2>
            <CountUp end={2200} duration={2.5} />+
          </h2>
          <p>Female Runners</p>
        </div>
        <div className="stat-item">
          <h2>
            <CountUp end={75} duration={2.5} suffix="%" />
          </h2>
          <p>Repeat Participation</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMaitri;
