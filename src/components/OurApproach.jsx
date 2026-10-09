import React, { useEffect, useRef } from 'react';
import './OurApproach.css';

const OurApproach = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.closest('.approach-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const offset = rect.top * 0.4;
      bgRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="approach-section">
      <div className="approach-parallax">
        <div className="approach-bg" ref={bgRef}></div>
        <div className="approach-overlay"></div>
      </div>

      <div className="approach-content">
        <h2 className="approach-title">Our Approach</h2>
        <p className="approach-description">
          Our farm strictly combines the traditions of organic farming with the latest
          innovations to make our products healthy and safe for the clients.
        </p>

        <button className="approach-btn">
          <span className="play-icon">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 21,12 5,21"></polygon>
            </svg>
          </span>
          <span>VIEW PRESENTATION</span>
        </button>
      </div>
    </section>
  );
};

export default OurApproach;