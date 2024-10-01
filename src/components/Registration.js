import React from 'react';
import './Registration.css'; // Make sure to style it accordingly

const Registration = () => {
  return (
    <div className="registration-container">
      {/* Title Section */}
      <div className="registration-title">
        <h1>Registration for Maitri Run 2024</h1>
        <p>Registrations open from 1st November 2024 to 30th November 2024</p>
      </div>

      {/* Marathon Information */}
      <div className="marathon-info">
        <h2>Marathon Categories</h2>
        <div className="marathon-options">
          <div className="marathon-card">
            <h3>5 KM Marathon</h3>
            <p>Registration Fee: ₹500</p>
          </div>
          <div className="marathon-card">
            <h3>10 KM Marathon</h3>
            <p>Registration Fee: ₹700</p>
          </div>
        </div>
      </div>

      {/* Online Registration Section */}
      <div className="registration-online">
        <h2>How to Register Online</h2>
        <p>You can easily register online by filling out the form through the link below:</p>
        <a href="/register" className="register-now-btn">Register Now</a>
      </div>

      {/* Offline Registration Section */}
      <div className="registration-offline">
        <h2>Offline Registration</h2>
        <p>For offline registrations, please contact:</p>
        <ul>
          <li><strong>Contact Person:</strong> Rajkiran Langade</li>
          <li><strong>Phone Number:</strong> +91 9822271855</li>
          <li><strong>Email Address:</strong> mitrirunvaduj@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Registration;
