import React, { useState } from 'react';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: 'Avocados',
    oldPrice: 59.00,
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Corn',
    price: 27.00,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Artichokes',
    price: 23.00,
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Broccoli',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400',
  },
];

const ProductGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
            
            {/* Hover Overlay with Add to Cart */}
            {hoveredId === product.id && (
              <div className="product-overlay">
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            )}
          </div>

          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-price">
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice.toFixed(2)}</span>
              )}
              <span className="new-price">${product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;