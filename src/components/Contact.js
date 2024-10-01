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
          <p><strong>Phone : </strong> 9822347137 | 9604751001 | 9822271855 | 9970616882 | 9850446744</p>
          <p><strong>Email : </strong> maitrirunvaduj@gmail.com</p>
          <p><strong>Address : </strong>Ashirvad Hospital, HFX3+5JP, dahivdi road, near STdepo, Talathi Colony, Vaduj - 415506</p>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.100504853657!2d74.45150137521516!3d17.59796168332561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3db27b0000001%3A0x4f1cefb95eff2363!2sAshirvad%20Bal%20rugnalay!5e0!3m2!1sen!2sin!4v1727771921646!5m2!1sen!2sin" width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ashirvad Hospital"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
