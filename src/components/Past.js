import React from 'react';
import './Past.css';

const pastEditionsPhotos = [
  '/images/past-edition1.jpg',
  '/images/past-edition2.jpg',
  '/images/past-edition3.jpg',
  '/images/past-edition4.jpg',
  '/images/past-edition5.jpg',
  '/images/past-edition6.jpg',
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
