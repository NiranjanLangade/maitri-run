import React from 'react';
import './Route.css';

const Route = () => {
  return (
    <div className="route-container">
      <h1>Marathon Route</h1>
      <div className="route-description">
        <p>The marathon route covers a beautiful path through the heart of the city, featuring scenic views and essential water stations to keep our runners hydrated!</p>
      </div>
      <div className="route-map">
        <h2>Route Map</h2>
        <iframe
          title="Marathon Route Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1956107248995!2d-122.40189708468116!3d37.7930796797562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858095a48e4407%3A0x8dba9f1c5cf2f80b!2sWater%20Station!5e0!3m2!1sen!2sus!4v1632138254123!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="elevation-section">
        <h2>Total Elevation</h2>
        <p>The total elevation for the marathon is <strong>300 meters</strong>.</p>
      </div>
      <div className="key-points">
        <h2>Key Points Along the Route</h2>
        <ul>
          <li>📍 Water Station 1 - 5km mark</li>
          <li>📍 Return Point - 10km mark</li>
          <li>📍 Water Station 2 - 15km mark</li>
          <li>📍 Finish Line - 21km mark</li>
        </ul>
      </div>
    </div>
  );
};

export default Route;
