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

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateField = (name, value) => {
        const trimmed = value.trim();

        if (name === 'firstName') {
            if (!trimmed) {
                return 'Please fill your first name';
            } else if (trimmed.length < 2) {
                return 'First name must be at least 2 characters';
            } else {
                return '';
            }
        }
        else if (name === 'lastName') {
            if (!trimmed) {
                return 'Please fill your last name';
            } else if (trimmed.length < 2) {
                return 'Last name must be at least 2 characters';
            } else {
                return '';
            }
        }
        else if (name === 'email') {
            if (!trimmed) {
                return 'Please enter your email';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
                return 'Please enter a valid email address';
            } else {
                return '';
            }
        }
        else if (name === 'message') {
            if (!trimmed) {
                return 'Please enter your message';
            } else if (trimmed.length < 10) {
                return 'Message must be at least 10 characters';
            } else {
                return '';
            }
        }
        else {
            return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            const fieldError = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: fieldError }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            setSubmitted(false);
            return;
        }

        setSubmitted(true);
        console.log('Form submitted:', formData);
        alert('Message sent! (In a real app, this would submit to a backend.)');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
        setErrors({});

        setTimeout(() => setSubmitted(false), 3000);
    };

    const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=navalur,tamilnadu&maptype=roadmap&zoom=14`;

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
                            src={mapSrc}
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                    <div className="form-col">
                        <h2 className="form-heading">Contact Form</h2>

                        <form onSubmit={handleSubmit} className="contact-form" noValidate>
                            <div className="form-row">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.firstName ? 'input-error' : ''}
                                    />
                                    {errors.firstName && (
                                        <span className="field-error">{errors.firstName}</span>
                                    )}
                                </div>

                                <div className="form-field">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.lastName ? 'input-error' : ''}
                                    />
                                    {errors.lastName && (
                                        <span className="field-error">{errors.lastName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && (
                                    <span className="field-error">{errors.email}</span>
                                )}
                            </div>

                            <div className="form-field">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="7"
                                    className={errors.message ? 'input-error' : ''}
                                ></textarea>
                                {errors.message && (
                                    <span className="field-error">{errors.message}</span>
                                )}
                            </div>

                            <button type="submit" className="send-message-btn">
                                SEND MESSAGE
                            </button>

                            {submitted && (
                                <p className="form-success">✅ Your message has been sent successfully!</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
