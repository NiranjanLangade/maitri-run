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
            <h3>5 KM Fun Run</h3>
            <p>Registration Fee: ₹600</p>
          </div>
          <div className="marathon-card">
            <h3>10 KM Marathon</h3>
            <p>Registration Fee: ₹800</p>
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
  <ul className="contact-list">
    <li>
      <strong>Contact Person:</strong> Mr. Narendra Godase <br />
      <strong>Phone Number:</strong> +91 9822347137
    </li>
    <li>
      <strong>Contact Person:</strong> Mr. Jaywant Godase <br />
      <strong>Phone Number:</strong> +91 9604751001
    </li>
    <li>
      <strong>Contact Person:</strong> Mr. Rajkiran Langade <br />
      <strong>Phone Number:</strong> +91 9822271855
    </li>
    <li>
      <strong>Contact Person:</strong> Dr. Mahesh Katkar <br />
      <strong>Phone Number:</strong> +91 9970616882
    </li>
    <li>
      <strong>Contact Person:</strong> Mr. Abhaykumar Deshmukh <br />
      <strong>Phone Number:</strong> +91 9850446744
    </li>
  </ul>
</div>

    </div>
  );
};

export default Registration;
