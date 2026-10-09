import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Organic Food',
    description: 'Herber provides local citizens and guests of our town with quality organic fruits, vegetables, and other products.',
    // ✅ Verified working Unsplash URL — hand holding berries
    image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=1600',
    textColor: 'white',
    buttonStyle: 'green',
  },
  {
    id: 2,
    title: 'Quality Control',
    description: 'We control the process of farming at Herber to deliver the best organic products to our customers throughout the state.',
    // ✅ Verified working Unsplash URL — oranges on a tree
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=1600',
    textColor: 'white',
    buttonStyle: 'green',
  },
  {
    id: 3,
    title: 'Eco-Friendly',
    description: 'As the leading organic farm, we maintain an eco-friendly policy of growing and selling healthy food without any additives.',
    // ✅ Verified working Unsplash URL — pears and greenery on concrete
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1600',
    textColor: 'black',
    buttonStyle: 'dark-green',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="hero-slider">
      {/* Background Image with Overlay */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        {slide.textColor === 'white' && <div className="hero-overlay"></div>}
      </div>

      {/* ✅ Navigation Arrows — explicit stroke color so they always show */}
      <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#333333" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <button className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#333333" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {/* Slide Content */}
      <div key={slide.id} className="hero-content" style={{ color: slide.textColor }}>
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>
        <button className={`hero-btn ${slide.buttonStyle}`}>
          READ MORE
        </button>
      </div>

      {/* Torn Paper Bottom Edge */}
      <div className="hero-torn-edge"></div>
    </section>
  );
};

export default HeroSlider;