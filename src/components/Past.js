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
  '/images/p18.png',
  '/images/p19.png',
  '/images/p20.png',
  '/images/p21.png',
  '/images/p22.png',
  '/images/p23.png',
  '/images/p24.png',
  '/images/p25.png',
  '/images/p26.png',
  '/images/p27.png',
  '/images/p28.png',
  '/images/p29.png',
  '/images/p30.png',
  '/images/p31.png',
  '/images/p32.png',
  '/images/p33.png',
  '/images/p34.png',
  '/images/p35.png',
  '/images/p36.png',
  '/images/p37.png',
  '/images/p38.png',
  '/images/p39.png',
  '/images/p40.png',
  '/images/p41.png',
  '/images/p42.png',
  '/images/p43.png',
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
