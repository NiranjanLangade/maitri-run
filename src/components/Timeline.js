import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-section">
      <h2 className="timeline-title">Event Timeline</h2>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Registration Opens</h3>
            <p>1st October 2024</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Last Date for Registration</h3>
            <p>30th November 2024</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Medal Distribution</h3>
            <p>15th December 2024</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Race Day</h3>
            <p>16th December 2024</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>Award Ceremony</h3>
            <p>16th December 2024 - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
