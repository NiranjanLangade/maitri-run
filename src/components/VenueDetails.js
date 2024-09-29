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
          <p><strong>Maitri Stadium, Main City</strong></p>
          <p>Address: 123 Marathon Avenue, City Name, 456789</p>
          <p>Time: 6:00 AM Sharp</p>
        </div>
        <div className="venue-section">
          <h2>T-Shirt & Bib Collection</h2>
          <p>Participants must collect their T-shirts and bibs one day prior to the race from:</p>
          <p><strong>Maitri Sports Complex</strong></p>
          <p>Address: 789 Sports Street, City Name, 456789</p>
          <p>Collection Time: 10:00 AM - 5:00 PM (One Day Before the Race)</p>
        </div>
      </div>
      <div className="map-section">
        <h2>Map to Starting Point</h2>
        <iframe
          title="Race Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.00758324147!2d-74.25986789863426!3d40.69767006327612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlMjQyJzI5LjYiTiA3NMKwMTUnMDQuNyJX!5e0!3m2!1sen!2sus!4v1632136551931!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VenueDetails;
