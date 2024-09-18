import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-01T06:00:00'); // Event date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2>Event Starts In</h2>
      <div className="countdown">
        <div className="time-box">
          <p className="time-number">{timeLeft.days || '0'}</p>
          <span className="time-label">Days</span>
        </div>
        <div className="time-box">
          <p className="time-number">{timeLeft.hours || '0'}</p>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-box">
          <p className="time-number">{timeLeft.minutes || '0'}</p>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-box">
          <p className="time-number">{timeLeft.seconds || '0'}</p>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
