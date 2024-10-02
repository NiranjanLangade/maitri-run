import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Import the downward arrow icon
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    // Closes the menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Maitri Run Logo" />
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleClick}>Home</Link></li>
        <li>
          <div className="dropdown">
            <Link to="/about-maitri-run" onClick={toggleMenu}>
              About <FaChevronDown className="dropdown-arrow" />
            </Link>
            <div className="dropdown-content">
              <Link to="/about-maitri-run" onClick={handleClick}>About Maitri-Run</Link>
              <Link to="/organizers" onClick={handleClick}>Organizers</Link>
              <Link to="/maitri-foundation" onClick={handleClick}>Maitri Foundation</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link to="/race-details/registration" onClick={toggleMenu}>
              Race Details <FaChevronDown className="dropdown-arrow" />
            </Link>
            <div className="dropdown-content">
              <Link to="/race-details/registration" onClick={handleClick}>Registration</Link>
              <Link to="/race-details/medals" onClick={handleClick}>Medals</Link>
              <Link to="/race-details/prizes-categories" onClick={handleClick}>Prizes & Categories</Link>
              <Link to="/race-details/venue" onClick={handleClick}>Venue</Link>
              <Link to="/race-details/route" onClick={handleClick}>Route</Link>
              <Link to="/race-details/rules" onClick={handleClick}>Rules</Link>
            </div>
          </div>
        </li>
        <li><Link to="/faqs" onClick={handleClick}>FAQs</Link></li>
        <li><Link to="/past-editions" onClick={handleClick}>Past Editions</Link></li>
        <li><Link to="/contact-us" onClick={handleClick}>Contact Us</Link></li>
        <li><Link to="/register" className="register-btn" onClick={handleClick}>Register Now!</Link></li>
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
