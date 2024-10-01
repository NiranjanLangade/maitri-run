import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './orgs.css';

const organizers = [
  {
    name: 'Mr. Narendra Godse',
    designation: 'Chairman',
    social: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    image: '/organizers/johndoe.jpg', // Replace with actual image path
  },
  {
    name: 'Mr. Rajkiran Langade',
    designation: 'Secretary',
    social: {
      facebook: 'https://facebook.com/robertlee',
      twitter: 'https://twitter.com/robertlee',
      linkedin: 'https://linkedin.com/in/robertlee',
    },
    image: '/organizers/robertlee.jpg',
  },
  {
    name: 'Mr. Jaywant Godase',
    designation: 'Vice Chairman',
    social: {
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    image: '/organizers/janesmith.jpg',
  },

  {
    name: 'Dr. Mahesh Katkar',
    designation: 'Treasurer',
    social: {
      facebook: 'https://facebook.com/emilyjohnson',
      twitter: 'https://twitter.com/emilyjohnson',
      linkedin: 'https://linkedin.com/in/emilyjohnson',
    },
    image: '/organizers/emilyjohnson.jpg',
  },
  {
    name: 'Dr. Ajit Inamdar',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/michaelwilliams',
      twitter: 'https://twitter.com/michaelwilliams',
      linkedin: 'https://linkedin.com/in/michaelwilliams',
    },
    image: '/organizers/michaelwilliams.jpg',
  },
  {
    name: 'Dr. Pravin Chavan',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Chandrashekhar Nangare',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Dhananjay Khade',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Vijay Barge',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Hanmant Masal',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Suresh Kolekar',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Dr. Anil Godase',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Abhaykumar Deshmukh',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Amol Godase',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Shrinivas Kadam',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Govind Bhandare',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Sachin Godase',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },

  {
    name: 'Mr. Santosh Kulkarni',
    designation: 'Member',
    social: {
      facebook: 'https://facebook.com/sophiabrown',
      twitter: 'https://twitter.com/sophiabrown',
      linkedin: 'https://linkedin.com/in/sophiabrown',
    },
    image: '/organizers/sophiabrown.jpg',
  },
  {
    name: 'Mr. Santosh Shaha',
    designation: 'Member',
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
      {/* <div className="organizer-row single">
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
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div> */}

      {/* Second row: 2 organizers */}
      <div className="organizer-row double">
        {organizers.slice(0, 2).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Third row: 4 organizers */}
      <div className="organizer-row quad">
        {organizers.slice(2, 4).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="organizer-row quad">
        {organizers.slice(4, 7).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="organizer-row quad">
        {organizers.slice(7, 10).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="organizer-row quad">
        {organizers.slice(10, 13).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="organizer-row quad">
        {organizers.slice(13, 16).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="organizer-row quad">
        {organizers.slice(16, 19).map((organizer, index) => (
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
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orgs;
