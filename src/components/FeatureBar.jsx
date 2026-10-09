import React from 'react';
import './FeatureBar.css';

const features = [
  {
    id: 1,
    title: 'Natural & Organic',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Best Equipment',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 5l7 7-2 2-7-7-4 4v5l-4 4-2-2 4-4h5l4-4z"></path>
        <path d="M2 22l3-3"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Dedicated Team',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M4.93 4.93l1.41 1.41"></path>
        <path d="M17.66 17.66l1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M6.34 17.66l-1.41 1.41"></path>
        <path d="M19.07 4.93l-1.41 1.41"></path>
      </svg>
    ),
  },
];

const FeatureBar = () => {
  return (
    <div className="feature-bar">
      {features.map((feature) => (
        <div className="feature-card" key={feature.id}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeatureBar;