// Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'The event was fantastic! Can\'t wait for next year.',
      name: 'John Doe'
    },
    {
      quote: 'An amazing experience that supports a great cause.',
      name: 'Jane Smith'
    },
    {
      quote: 'A fun way to get involved with the community.',
      name: 'David Lee'
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Participants Say</h2>
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index} data-aos="fade-up">
            <p>"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
