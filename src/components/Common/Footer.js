// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Maitri Run Logo" />
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/race-details">Race Details</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Maitri Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
