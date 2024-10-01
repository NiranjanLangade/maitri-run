import React from 'react';
import './Past.css';

const pastEditionsPhotos = [
  '/images/p1.png',
  '/images/p2.png',
  '/images/p3.png',
  '/images/p4.png',
  '/images/p5.png',
  '/images/p6.png',
  '/images/p7.png',
  '/images/p8.png',
  '/images/p9.png',
  '/images/p10.png',
  '/images/p11.png',
  '/images/p12.png',
  '/images/p13.png',
  '/images/p14.png',
  '/images/p15.png',
  '/images/p16.png',
  '/images/p17.png',
  // Add more image paths here
];

const Past = () => {
  return (
    <div className="past-editions-container">
      <h1 className="past-editions-title">Past Editions</h1>
      <div className="photo-grid">
        {pastEditionsPhotos.map((photo, index) => (
          <div key={index} className="photo-grid-item">
            <img src={photo} alt={`Past Edition ${index + 1}`} className="grid-photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past;
