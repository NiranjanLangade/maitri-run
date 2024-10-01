import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    { title: 'E-Certificate of Participation', imgSrc: '/images/certificate.jpg' },
    { title: 'Zumba Warm-up Session', imgSrc: '/images/zumba.png' },
    { title: 'Route Support with Water Points', imgSrc: '/images/water-points.png' },
    { title: 'Medal for Completing the Marathon', imgSrc: '/images/medals.png' },
    { title: 'Lunch after the Race', imgSrc: '/images/lunch.png' }
  ];

  return (
    <div className="modern-benefits-container">
      <h2>Benefits of Participation</h2>
      <div className="modern-benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="modern-benefit-card">
            <div className="modern-benefit-img-wrapper">
              <img src={benefit.imgSrc} alt={benefit.title} />
            </div>
            <h3>{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
