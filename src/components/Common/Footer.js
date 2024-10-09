import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src="/logo.png" alt="Maitri Run Logo" className="footer-logo" />
            <p className="footer-tagline">Maitri Run - Inspiring Health and Wellness</p>
          </div>

          <div className="footer-right">
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-maitri-run">About</Link></li>
              <li><Link to="/race-details/registration">Race Details</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
          <p>&copy; 2024 Maitri Run. All Rights Reserved.</p>
          <p>Developed with ❤️ By 𝒩𝒾𝓇𝒶𝓃𝒿𝒶𝓃</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
