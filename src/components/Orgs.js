import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './orgs.css';

const organizers = [
  {
    name: 'John Doe',
    designation: 'Event Director',
    social: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    image: '/organizers/johndoe.jpg', // Replace with actual image path
  },
  {
    name: 'Jane Smith',
    designation: 'Operations Head',
    social: {
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    image: '/organizers/janesmith.jpg',
  },
  {
    name: 'Robert Lee',
    designation: 'Marketing Lead',
    social: {
      facebook: 'https://facebook.com/robertlee',
      twitter: 'https://twitter.com/robertlee',
      linkedin: 'https://linkedin.com/in/robertlee',
    },
    image: '/organizers/robertlee.jpg',
  },
  {
    name: 'Emily Johnson',
    designation: 'Sponsorship Coordinator',
    social: {
      facebook: 'https://facebook.com/emilyjohnson',
      twitter: 'https://twitter.com/emilyjohnson',
      linkedin: 'https://linkedin.com/in/emilyjohnson',
    },
    image: '/organizers/emilyjohnson.jpg',
  },
  {
    name: 'Michael Williams',
    designation: 'Logistics Manager',
    social: {
      facebook: 'https://facebook.com/michaelwilliams',
      twitter: 'https://twitter.com/michaelwilliams',
      linkedin: 'https://linkedin.com/in/michaelwilliams',
    },
    image: '/organizers/michaelwilliams.jpg',
  },
  {
    name: 'Sophia Brown',
    designation: 'Volunteer Coordinator',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
];

const Orgs = () => {
  return (
    <div className="organizers-container">
      <h1>Meet Our Organizers</h1>

      {/* First row: 1 organizer */}
      <div className="organizer-row single">
        <div className="organizer-card">
          <img src={organizers[0].image} alt={organizers[0].name} />
          <h2>{organizers[0].name}</h2>
          <p>{organizers[0].designation}</p>
          <div className="social-links">
            <a href={organizers[0].social.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={organizers[0].social.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={organizers[0].social.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Second row: 2 organizers */}
      <div className="organizer-row double">
        {organizers.slice(1, 3).map((organizer, index) => (
          <div className="organizer-card" key={index}>
            <img src={organizer.image} alt={organizer.name} />
            <h2>{organizer.name}</h2>
            <p>{organizer.designation}</p>
            <div className="social-links">
              <a href={organizer.social.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href={organizer.social.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Third row: 4 organizers */}
      <div className="organizer-row quad">
        {organizers.slice(3, 7).map((organizer, index) => (
          <div className="organizer-card" key={index}>
            <img src={organizer.image} alt={organizer.name} />
            <h2>{organizer.name}</h2>
            <p>{organizer.designation}</p>
            <div className="social-links">
              <a href={organizer.social.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href={organizer.social.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orgs;
