import React from 'react';
import Marquee from 'react-marquee-slider';
import './RunningStrip.css'

const RunningStrip = () => {
  const updates = ["Update 1: Early Bird Registrations Open!", "Update 2: Sponsors Announced!", "Update 3: Route Map Released!"];

  return (
    <div className="running-strip">
      <Marquee velocity={150} direction="ltr">
        {updates.map((update, index) => (
          <span key={index} className="update-text">{update}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default RunningStrip;
