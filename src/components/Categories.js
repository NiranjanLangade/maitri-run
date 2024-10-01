import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="modern-categories-container">
      <h2>Marathon Categories</h2>
      <div className="modern-categories-grid">
        <div className="modern-category-card">
          <h3>10 KM Marathon</h3>
          <p>Push your limits with the 10 KM run, a true test of endurance!</p>
        </div>
        <div className="modern-category-card">
          <h3>5 KM Marathon</h3>
          <p>Join the 5 KM run, perfect for beginners and casual runners alike.</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
