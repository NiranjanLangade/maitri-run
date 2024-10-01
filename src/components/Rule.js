import React from 'react';
import './Rule.css';

const Rule = () => {
  return (
    <div className="rules-container">
      <h1>Marathon Rules & Regulations</h1>
      <div className="rules-list">
        <ul>
          <li>All participants must be at least 18 years of age to qualify for prizes.</li>
          <li>Each participant must wear their official bib number on the front of their T-shirt.</li>
          <li>Participants must follow the designated route and not take any shortcuts.</li>
          <li>Water stations will be available at every 5km mark, and medical assistance will be provided if required.</li>
          <li>The marathon will start at 6:30 AM sharp. All runners must arrive at least 30 minutes early for check-in.</li>
          <li>Participants are not allowed to use any kind of vehicle during the race.</li>
          <li>If a participant is found violating any rules, they may be disqualified from the race.</li>
          <li>Prize distribution will take place after the completion of the race at the main venue.</li>
          <li>The marathon will take place regardless of weather conditions unless announced otherwise by the organizers.</li>
          <li>Runners must stay hydrated and take breaks if necessary at water stations to avoid dehydration.</li>
          <li>Any form of cheating or misbehavior will lead to immediate disqualification.</li>
        </ul>
      </div>
      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> You are only eligible for prizes if you are above 18 years of age.</p>
      </div>
    </div>
  );
};

export default Rule;
