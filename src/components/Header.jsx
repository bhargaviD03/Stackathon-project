import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import ContactSidebar from './ContactSidebar';

const ALL_PRODUCTS = [
    { id: 1, name: 'Blueberries', price: 550, category: 'Fruits', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 2, name: 'Avocados', price: 250, category: 'Fruits', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 3, name: 'Organic Tomatoes', price: 120, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 4, name: 'Fresh Carrots', price: 90, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 5, name: 'Strawberries', price: 300, category: 'Fruits', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 6, name: 'Broccoli', price: 80, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 7, name: 'Spinach', price: 60, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=100&h=100' },
    { id: 8, name: 'Bananas', price: 50, category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=100&h=100' },
];

const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/typography', label: 'TYPOGRAPHY' },
    { path: '/contact', label: 'CONTACT US' },
];

const Header = () => {
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Blueberries', price: 550, quantity: 1, image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 2, name: 'Avocados', price: 250, quantity: 1, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=100&h=100' },
    ]);

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const searchResults = searchQuery.trim() === ''
        ? []
        : ALL_PRODUCTS.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        setIsContactOpen(false);
        setIsSearchOpen(false);
        setIsMobileNavOpen(false);  
    };

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
        setIsCartOpen(false);
        setIsSearchOpen(false);
        setIsMobileNavOpen(false); 
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsCartOpen(false);
        setIsContactOpen(false);
        setIsMobileNavOpen(false);  
        if (isSearchOpen) setSearchQuery('');
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        setIsCartOpen(false);
        setIsContactOpen(false);
        setIsSearchOpen(false);
    };

    const increaseQty = (id, e) => {
        e.stopPropagation();
        setCartItems((prev) =>
            prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        );
    };

    const decreaseQty = (id, e) => {
        e.stopPropagation();
        setCartItems((prev) =>
            prev.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item)
        );
    };

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setSearchQuery('');
        setIsSearchOpen(false);
        setIsCartOpen(true);
    };

    return (
        <>
            <header className="main-header">
                <div className="header-container">
                    <div className="logo-section">
                        <img src="https://via.placeholder.com/150x40?text=HERBER" alt="Herber Logo" className="logo-img" />
                        <span className="free-badge">FREE</span>
                    </div>

                    {/* ✅ Desktop Nav (unchanged) */}
                    <nav className="nav-links">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            HOME
                        </Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                            ABOUT US
                        </Link>
                        <Link to="/typography" className={location.pathname === '/typography' ? 'active' : ''}>
                            TYPOGRAPHY
                        </Link>
                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                            CONTACT US
                        </Link>
                    </nav>

                    <div className="header-icons">
                        <div className="icon-wrapper cart-icon" onClick={toggleCart}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="cart-count">{totalCount}</span>

                            {isCartOpen && (
                                <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
                                    <div className="cart-dropdown-header">
                                        <p>In cart: {totalCount} Products</p>
                                        <p>Total price: ${totalPrice}</p>
                                    </div>

                                    <div className="cart-dropdown-items">
                                        {cartItems.length === 0 ? (
                                            <p className="empty-cart">Your cart is empty</p>
                                        ) : (
                                            cartItems.map((item) => (
                                                <div className="cart-item" key={item.id}>
                                                    <img src={item.image} alt={item.name} />
                                                    <div className="cart-item-details">
                                                        <h4>{item.name}</h4>
                                                        <div className="quantity-control">
                                                            <button className="qty-btn" onClick={(e) => decreaseQty(item.id, e)}>−</button>
                                                            <span>{item.quantity}</span>
                                                            <button className="qty-btn" onClick={(e) => increaseQty(item.id, e)}>+</button>
                                                        </div>
                                                    </div>
                                                    <span className="item-price">${item.price * item.quantity}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    <div className="cart-dropdown-footer">
                                        <button className="btn-view-cart">GO TO CART</button>
                                        <button className="btn-checkout">CHECKOUT</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="icon-wrapper search-icon" onClick={toggleSearch}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>

                            {isSearchOpen && (
                                <div className="search-dropdown" onClick={(e) => e.stopPropagation()}>
                                    <div className="search-input-wrapper">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search for products..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            autoFocus
                                        />
                                        {searchQuery && (
                                            <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
                                        )}
                                    </div>

                                    {searchQuery.trim() !== '' && (
                                        <div className="search-results">
                                            {searchResults.length > 0 ? (
                                                searchResults.map((product) => (
                                                    <div
                                                        key={product.id}
                                                        className="search-result-item"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        <img src={product.image} alt={product.name} />
                                                        <div className="search-result-info">
                                                            <h4>{product.name}</h4>
                                                            <span className="search-result-category">{product.category}</span>
                                                        </div>
                                                        <span className="search-result-price">${product.price}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="no-results">No products found for "{searchQuery}"</p>
                                            )}
                                        </div>
                                    )}

                                    {searchQuery.trim() === '' && (
                                        <p className="search-hint">Start typing to search products...</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="icon-wrapper mobile-menu-icon" onClick={toggleMobileNav}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </div>

                        <div className="icon-wrapper menu-icon" onClick={toggleContact}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-nav-overlay ${isMobileNavOpen ? 'open' : ''}`} onClick={toggleMobileNav}></div>
            <nav className={`mobile-nav-panel ${isMobileNavOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <img src="https://via.placeholder.com/150x40?text=HERBER" alt="Herber Logo" className="logo-img" />
                    <button className="mobile-nav-close" onClick={toggleMobileNav} aria-label="Close menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <ul className="mobile-nav-list">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                                onClick={toggleMobileNav}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mobile-nav-footer">
                    <p className="mobile-nav-contact-title">Get in Touch</p>
                    <p className="mobile-nav-contact">+1 323-913-4688</p>
                    <p className="mobile-nav-contact">mail@demolink.org</p>
                </div>
            </nav>

            <ContactSidebar isOpen={isContactOpen} onClose={toggleContact} />
        </>
    );
};

export default Header;