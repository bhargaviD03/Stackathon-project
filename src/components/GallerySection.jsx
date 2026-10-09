import React from 'react';
import './GallerySection.css';

const galleryItems = [
  {
    id: 1,
    name: 'Watermelons',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Grapes',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Mandarin Oranges',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Lemons',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Organic Food',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: 'Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
  },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-heading">Our Gallery</h2>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.name} className="gallery-image" />

              <div className="gallery-overlay">
                <div className="gallery-zoom-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <h3 className="gallery-label">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;