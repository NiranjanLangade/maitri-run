// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Maitri Run Logo" />
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" >Home</Link></li>
        <li>
          <div className="dropdown">
            <Link to="/about-maitri-run" onClick={toggleMenu}>About</Link>
            <div className="dropdown-content">
              <Link to="/about-maitri-run">About Maitri-Run</Link>
              <Link to="/organizers">Organizers</Link>
              <Link to="/maitri-foundation">Maitri Foundation</Link>
              <Link to="/sponsors">Sponsors</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/race-details/registration" onClick={toggleMenu}>Race Details</Link>
            <div className="dropdown-content">
              <Link to="/race-details/registration">Registration</Link>
              <Link to="/race-details/medals">Medals</Link>
              <Link to="/race-details/prizes-categories">Prizes & Categories</Link>
              <Link to="/race-details/venue">Venue</Link>
              <Link to="/race-details/route">Route</Link>
              <Link to="/race-details/rules">Rules</Link>
            </div>
          </div>
        </li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/past-editions" >Past Editions</Link></li>
        <li><Link to="/contact-us" >Contact Us</Link></li>
        <li><Link to="/register" className="register-btn" onClick={toggleMenu}>Register Now!</Link></li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
