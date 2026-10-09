import React from 'react';
import ProductGrid from './ProductGrid';
import './ProductsSection.css';

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        
        <div className="products-banner">
          <img 
            src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=800" 
            alt="Organic Vegetables" 
            className="banner-image"
          />
          
          <div className="banner-text-overlay">
            <span className="banner-subtitle">organic</span>
            <h2 className="banner-title">Vegetables</h2>
          </div>
        </div>

        <div className="products-content">
          <ProductGrid />
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;