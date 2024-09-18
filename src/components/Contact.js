import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="contact-us-content">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Our Contact Details</h2>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> contact@maitri-foundation.org</p>
          <p><strong>Address:</strong> Maitri Foundation, 123 Green Avenue, Mumbai, India</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.307544556107!2d144.96305841584496!3d-37.81362797975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f307433f%3A0x7c27e158d2e6f16d!2sMaitri%20Foundation!5e0!3m2!1sen!2sin!4v1632663136238!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Foundation Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
