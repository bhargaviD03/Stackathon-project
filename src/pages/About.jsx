import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const tabContent = {
  goals: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    bullets: [
      'Eiusmod tempor',
      'Dolore magna',
      'Minim veniam',
      'Nostrud exercitation',
      'Laboris nisi',
      'Officia deserunt',
    ],
  },
  values: {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    bullets: [
      'Nostrud exercitation',
      'Laboris nisi',
      'Officia deserunt',
      'Eiusmod tempor',
      'Dolore magna',
      'Minim veniam',
    ],
  },
  mission: {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    bullets: [
      'Minim veniam',
      'Nostrud exercitation',
      'Eiusmod tempor',
      'Dolore magna',
      'Laboris nisi',
      'Officia deserunt',
    ],
  },
};

const historySlides = [
  [
    { id: 1, title: 'Farm Establishment', year: '1999', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'New Partners', year: '2005', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Opening Our Online Store', year: '2010', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Farming Industry Leader', year: '2013', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800' },
  ],
  [
    { id: 5, title: 'Farming Innovations', year: '2019', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Farm Establishment', year: '1999', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800' },
    { id: 7, title: 'New Partners', year: '2005', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800' },
    { id: 8, title: 'Opening Our Online Store', year: '2010', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800' },
  ],
];

const About = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [historyIndex, setHistoryIndex] = useState(0);

  const currentTab = tabContent[activeTab];

  return (
    <>

      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Our Farm</h1>
          <div className="about-hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
        </div>
      </section>


      <section className="why-section">
        <div className="why-container">
          <div className="why-image-col">
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=900"
              alt="Combine harvester"
              className="why-image"
            />
          </div>

          <div className="why-content-col">
            <h2 className="why-heading">Why Choose Us</h2>

            <div className="why-tabs">
              <button
                className={`why-tab ${activeTab === 'goals' ? 'active' : ''}`}
                onClick={() => setActiveTab('goals')}
              >
                Our Goals
              </button>
              <button
                className={`why-tab ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Our Values
              </button>
              <button
                className={`why-tab ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
            </div>

            <p className="why-text">{currentTab.text}</p>

            <ul className="why-bullets">
              {currentTab.bullets.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet-dot"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="why-buttons">
              <button className="btn-read-more">READ MORE</button>
              <button className="btn-contact-us">CONTACT US</button>
            </div>
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="history-container">
          <h2 className="history-heading">Our History</h2>

          <div className="history-grid">
            {historySlides[historyIndex].map((item) => (
              <div className="history-card" key={item.id}>
                <div className="history-image-wrapper">
                  <img src={item.image} alt={item.title} className="history-image" />
                </div>
                <p className="history-title">{item.title}</p>
                <div className="history-divider">
                  <span className="history-dot"></span>
                </div>
                <p className="history-year">{item.year}</p>
              </div>
            ))}
          </div>

          <div className="history-pagination">
            {historySlides.map((_, idx) => (
              <button
                key={idx}
                className={`history-page-dot ${historyIndex === idx ? 'active' : ''}`}
                onClick={() => setHistoryIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-heading">Our Partners</h2>

          <div className="partners-grid">
            <div className="partner-logo">
              <div className="logo-placeholder">VEGETARIAN</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder green">QUALITY</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">100% quality</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder green">ORGANIC</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;