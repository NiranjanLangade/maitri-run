import React from 'react';
import './Prizes.css';

const Prizes = () => {
  return (
    <div className="prizes-container">
      <h1>Prizes & Categories</h1>

      <div className="prize-pool">
        <h2>Total Prize Pool</h2>
        <p>The total prize pool for the marathon is ₹1,00,000, distributed across different categories.</p>
      </div>

      <div className="categories">
        <h2>Age Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Age Group</th>
              <th className="desktop-view">Men's and Women's Prize</th>
              <th className="mobile-view">Men's and Women's Prize</th>
              <th>Winner</th>
              <th>1st Runner-up</th>
              <th>2nd Runner-up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18-35</td>
              <td className="desktop-view">Men & Women</td>
              <td className="mobile-view">Both</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
            <tr>
              <td>35-50</td>
              <td className="desktop-view">Men & Women</td>
              <td className="mobile-view">Both</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
            <tr>
              <td>51+</td>
              <td className="desktop-view">Men & Women</td>
              <td className="mobile-view">Both</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="benefits">
        <h2>Benefits for All Participants</h2>
        <ul>
          <li>E-Certificate of Participation</li>
          <li>Zumba Warm-up Session</li>
          <li>Route Support with Water Points</li>
          <li>Medal for Completing the Marathon</li>
          <li>Lunch after the Race</li>
        </ul>
      </div>

      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> You are eligible for prizes only if you are above 18 years of age.</p>
      </div>
    </div>
  );
};

export default Prizes;
