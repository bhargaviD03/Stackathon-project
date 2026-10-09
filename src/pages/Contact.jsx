import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent! (In a real app, this would submit to a backend.)');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <section className="contact-hero">
                <div className="contact-hero-bg"></div>
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Contact Us</h1>
                    <div className="contact-hero-breadcrumb">
                        <Link to="/" className="breadcrumb-link">Home</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">Contact Us</span>
                    </div>
                </div>
            </section>

            <section className="contact-cards-section">
                <div className="contact-cards-container">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#3e6d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="6" y="2" width="12" height="20" rx="2"></rect>
                                <line x1="12" y1="18" x2="12" y2="18"></line>
                            </svg>
                        </div>
                        <p className="contact-info-line">+1 323-913-4688</p>
                        <p className="contact-info-line">+1 323-888-4554</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#3e6d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                        </div>
                        <p className="contact-info-line">4730 Crystal Springs Dr,</p>
                        <p className="contact-info-line">Los Angeles, CA 90027</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#3e6d3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                <circle cx="9" cy="12" r="1" fill="#3e6d3a" stroke="none"></circle>
                                <circle cx="12" cy="12" r="1" fill="#3e6d3a" stroke="none"></circle>
                                <circle cx="15" cy="12" r="1" fill="#3e6d3a" stroke="none"></circle>
                            </svg>
                        </div>
                        <p className="contact-info-line">mail@demolink.org</p>
                        <p className="contact-info-line">info@demolink.org</p>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="contact-form-container">
                    <div className="map-col">

                            <iframe
                            className="contact-map"
                            title="Map showing Navalur, Tamil Nadu"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=navalur%2Ctamilnadu&amp;maptype=roadmap&amp;zoom=14"                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                    <div className="form-col">
                        <h2 className="form-heading">Contact Form</h2>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}

                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}

                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}

                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="7"

                            ></textarea>

                            <button type="submit" className="send-message-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
