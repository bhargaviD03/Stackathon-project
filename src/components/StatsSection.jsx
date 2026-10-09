import React from 'react';
import './StatsSection.css';

const stats = [
  {
    id: 1,
    value: '12',
    label: 'Awards',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a93a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    value: '2K',
    label: 'Products',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a93a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    id: 3,
    value: '679',
    label: 'Happy Clients',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a93a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
  {
    id: 4,
    value: '13',
    label: 'Farmers',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e8a93a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M16 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M8 21v-2a4 4 0 0 1 3-3.87"></path>
      </svg>
    ),
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-bg"></div>
      <div className="stats-overlay"></div>

      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.id}>
            <div className="stat-main">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="stats-torn-edge"></div>
    </section>
  );
};

export default StatsSection;