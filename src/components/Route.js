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
        <iframe src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d15210.448867932426!2d74.41299225127179!3d17.621139832900607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x3bc3dad28f100c85%3A0xb57f040c1a8a51cd!2sSwayamvar%20Mangal%20Karyalay%2C%20Pusegaon%20Vaduj%20Rd%2C%20Vaduj%2C%20Maharashtra%20415506!3m2!1d17.6090646!2d74.4420179!4m4!2s17.633139%2C%2074.404237!3m2!1d17.633139!2d74.404237!5e0!3m2!1sen!2sin!4v1727765118316!5m2!1sen!2sin"  width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title='Route'></iframe>
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
