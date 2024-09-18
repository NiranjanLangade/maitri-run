// WhyParticipate.js
import React from 'react';
import './WhyParticipate.css';

const WhyParticipate = () => {
  const benefits = [
    {
      icon: './health-icon.png',
      title: 'Health & Fitness',
      description: 'Join the marathon to improve your physical health and mental well-being.'
    },
    {
      icon: 'charity-icon.png',
      title: 'Support a Cause',
      description: 'Your participation helps support local charities and social causes.'
    },
    {
      icon: 'community-icon.png',
      title: 'Community and Networking',
      description: 'Meet new people, make friends, and be part of a thriving community.'
    },
    {
      icon: 'prizes-icon.png',
      title: 'Prizes & Recognition',
      description: 'Win exciting prizes and gain recognition for your achievements.'
    }
  ];

  return (
    <section className="why-participate">
      <h2>Why Participate?</h2>
      <div className="benefit-cards">
        {benefits.map((benefit, index) => (
          <div className="card" key={index} data-aos="fade-up">
            <img src={benefit.icon} alt={`${benefit.title} Icon`} />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipate;
