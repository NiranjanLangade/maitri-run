// Sponsors.js
import React from 'react';
import './Sponsers.css';

const Sponsors = () => {
  const sponsors = [
    {
      logo: './images/title-logo.png',
      type: 'Title Sponsor'
    },
    {
      logo: './images/media-logo.png',
      type: 'Media Partner'
    },
    {
      logo: './images/community-logo.png',
      type: 'Community Partner'
    },
    // Add more sponsors as needed
  ];

  return (
    <section className="sponsors">
      <h2>Our Sponsors & Partners</h2>
      <div className="sponsor-logos">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor" key={index} data-aos="fade-up">
            <img src={sponsor.logo} alt={sponsor.type} />
            <p>{sponsor.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
