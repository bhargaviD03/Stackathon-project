import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>            <div className="footer-banner">
      <div className="banner-inner">
        
        {/* Left Side: Overlapping Image Cluster */}
        <div className="banner-images">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300&h=200" 
            alt="Template 1" 
            className="banner-img img-1" 
          />
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300&h=200" 
            alt="Template 2" 
            className="banner-img img-2" 
          />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200" 
            alt="Template 3" 
            className="banner-img img-3" 
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="banner-text">
          <h1>Get Full-Featured Intense Template!</h1>
          
          <div className="banner-features">
            <span>500+ HTML Files</span>
            <span className="divider">|</span>
            <span>29 Niche Templates</span>
            <span className="divider">|</span>
            <span>1000+ UI Elements</span>
            <span className="divider">|</span>
            <span>Novi Page Builder</span>
          </div>

          <div className="banner-reviews">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f1c40f" stroke="#f1c40f" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="review-count">200+ Reviews</span>
          </div>

          <button className="view-now-btn">VIEW NOW!</button>
        </div>
      </div>

      {/* The torn paper wave at the bottom */}
      <div className="torn-edge-bottom"></div>
    </div>
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-col brand-col">
          <div className="footer-logo">

            <img src={"https://via.placeholder.com/150x40?text=HERBER"} alt="Herber Logo" />
            <span className="free-badge">FREE</span>
          </div>
          <p className="brand-desc">
            Herber is an organic farm located in California. We offer healthy foods and products to our clients.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+1 323-913-4688</span>
            </div>
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Mon-Sat: 07:00AM – 05:00PM</span>
            </div>
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span>4730 Crystal Springs Dr,<br/>Los Angeles, CA 90027</span>
            </div>
          </div>
        </div>

        <div className="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p>Join our email newsletter for news and tips.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter Your E-mail" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="social-links">
            <span>Follow Us</span>
            <div className="social-icons">
      
              <a href="#fb"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
        
              <a href="#tw"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
           
              <a href="#gp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.027-3.227 2.053-2.053 2.72-4.947 2.72-7.28 0-.547-.053-1.08-.133-1.573H12.48z"></path></svg></a>
            
              <a href="#ig"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
          </div>
        </div>

        <div className="footer-col gallery-col">
          <h3>Gallery</h3>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=200&h=200" alt="Gallery 1" />
            <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200&h=200" alt="Gallery 2" />
            <div className="gallery-item-hover">
              <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=200&h=200" alt="Gallery 3" />
              <div className="overlay"><span>+</span></div>
            </div>
<img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=200&h=200" alt="Gallery 4" />          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2026 Herber. All rights reserved</p>
          <p>Design by Templatemonster</p>
        </div>
      </div>
    </footer></>
    
  );
};

export default Footer;