
import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="banner-content">
        <h2>Get Full-Featured INTENSE Template!</h2>
        <div className="banner-features">
          <span>500+ HTML Files</span>
          <span className="divider">|</span>
          <span>29 Niche Templates</span>
          <span className="divider">|</span>
          <span>1000+ UI Elements</span>
          <span className="divider">|</span>
          <span>Novi Page Builder</span>
        </div>
        <button className="shop-btn">SHOP NOW!</button>
      </div>
    </div>
  );
};

export default TopBanner;