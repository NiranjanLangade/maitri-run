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
              <th colSpan="3">Men's Prize</th>
              <th colSpan="3">Women's Prize</th>
            </tr>
            <tr>
              <th></th>
              <th>Winner</th>
              <th>1st Runner-up</th>
              <th>2nd Runner-up</th>
              <th>Winner</th>
              <th>1st Runner-up</th>
              <th>2nd Runner-up</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18-35</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
            <tr>
              <td>35-50</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
            <tr>
              <td>51+</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
              <td>₹7,777</td>
              <td>₹5,555</td>
              <td>₹3,333</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="distribution">
        <h2>Prize Distribution</h2>
        <p>The prize pool will be distributed based on the performance of runners within their respective categories. The first-place finisher in each category will receive 50% of the prize for that group, second place will receive 30%, and third place will receive 20%.</p>
      </div> */}

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
