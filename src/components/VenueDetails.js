import React from 'react';
import './Venue.css';

const VenueDetails = () => {
  return (
    <div className="venue-container">
      <h1>Race Venue</h1>
      <div className="venue-info">
        <div className="venue-section">
          <h2>Starting Point</h2>
          <p>The marathon will start from:</p>
          <p><strong>Swayamvar Mangal Karyalay,Vaduj</strong></p>
          <p>Address: Satewadi Corner, Pusegaon Vaduj Rd, Vaduj, Maharashtra 415506</p>
          <p>Time: 6:00 AM Sharp</p>
        </div>
        <div className="venue-section">
          <h2>T-Shirt & Bib Collection</h2>
          <p>Participants must collect their T-shirts and bibs one day prior to the race from:</p>
          <p><strong>Swayamvar Mangal Karyalay,Vaduj</strong></p>
          <p>Address: Satewadi Corner, Pusegaon Vaduj Rd, Vaduj, Maharashtra 415506</p>
          <p>Collection Time: 10:00 AM - 5:00 PM (One Day Before the Race)</p>
        </div>
      </div>
      <div className="map-section">
        <h2>Map to Starting Point</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.8666806873116!2d74.4394429752154!3d17.609064583316453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3dad28f100c85%3A0xb57f040c1a8a51cd!2sSwayamvar%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1727764756657!5m2!1sen!2sin" width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title='Swayamvar Mangal Karyalay'></iframe>
      </div>
    </div>
  );
};

export default VenueDetails;
