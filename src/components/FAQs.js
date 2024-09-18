import React, { useState } from 'react';
import './FAQs.css';

const FAQsComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When is the Maitri Run happening?",
      answer: "The Maitri Run is scheduled for 16th December 2024. Registrations open on 1st October 2024."
    },
    {
      question: "Where can I register for the event?",
      answer: "You can register for the event through our website by visiting the 'Race Details' > 'Registration' section."
    },
    {
      question: "What are the categories for the run?",
      answer: "We have various categories based on age and gender. Details can be found in the 'Race Details' > 'Prizes & Categories' section."
    },
    {
      question: "What do I receive after completing the race?",
      answer: "All participants who complete the race will receive medals. Further details are available in the 'Medals' section."
    },
    {
      question: "Can I change my registration details?",
      answer: "If you need to change your registration details, please contact us through the 'Contact Us' page."
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsComp;
