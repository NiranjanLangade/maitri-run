import React from 'react';
import './Maitri.css';

const Maitri = () => {
  return (
    <div className="foundation-container">
      {/* Introduction Section */}
      <section className="introduction-section">
        <h1>About Maitri Foundation</h1>
        <p>
          The Maitri Foundation is a non-profit organization dedicated to fostering health, wellness, and community building
          through various initiatives and events. We are committed to promoting physical and mental well-being, and work
          tirelessly to create a healthier, happier world.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with complete transparency and honesty in everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We build and nurture a sense of togetherness and mutual support in the community.</p>
          </div>
          <div className="value-card">
            <h3>Compassion</h3>
            <p>Our actions are rooted in kindness and empathy for all living beings.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace new ideas and solutions to drive positive change.</p>
          </div>
        </div>
      </section>

      {/* Foundation Formation Section */}
      <section className="formation-section">
        <h2>How Maitri Foundation was Formed</h2>
        <p>
          Maitri Foundation was established in 2010 by a group of passionate individuals who believed in the power of
          holistic wellness. Starting with a few local events focused on health and fitness, the foundation has now grown
          into a reputable organization hosting large-scale events such as the Maitri Run. With a vision to create a
          healthier community, the foundation has made significant strides in promoting wellness, sustainable living, and
          community building.
        </p>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2>Events Hosted by Maitri Foundation</h2>
        <div className="events-grid">
          <div className="event-card">
            <h3>Maitri Run</h3>
            <p>An annual marathon promoting health and wellness, bringing together runners from all walks of life.</p>
          </div>
          <div className="event-card">
            <h3>Diwali Pahat</h3>
            <p>A morning on occassion of our favourite festival diwali enjoy the medoly of songs.</p>
          </div>
          <div className="event-card">
            <h3>Yoga Sessions</h3>
            <p>Weekly yoga sessions to encourage mindfulness and physical fitness within the community.</p>
          </div>
          <div className="event-card">
            <h3>Community Clean-ups</h3>
            <p>Organized efforts to keep our environment clean and promote sustainable practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maitri;
