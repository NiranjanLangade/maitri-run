import React from 'react';
import './Medals.css';

const MedalPage = () => {
  return (
    <div className="medals-container">
      <h1>Medals</h1>
      <div className="medal gold-medal">
        <img src="/images/gold.png" alt="Gold Medal" className="medal-image"/>
        <h2>Gold Medal</h2>
        <p>For participants completing the marathon in less than 2 hours.</p>
      </div>
      <div className="medal silver-medal">
        <img src="/images/silver-medal.png" alt="Silver Medal" className="medal-image"/>
        <h2>Silver Medal</h2>
        <p>For participants completing the marathon in less than 3 hours.</p>
      </div>
      <div className="medal bronze-medal">
        <img src="/images/bronze-medal.png" alt="Bronze Medal" className="medal-image"/>
        <h2>Bronze Medal</h2>
        <p>For participants completing the marathon after 3 hours.</p>
      </div>
    </div>
  );
};

export default MedalPage;
