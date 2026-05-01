import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../components/BackArrow';


function ContactUs() {
    const navigate = useNavigate();

    return (
        <div className="contact-page">
            {/* Header / Logo Section */}
            <div className="contact-header-section">
                <button className="contact-back-btn" onClick={() => navigate('/')} aria-label="Back to home">
                    <BackArrow size={20} color="white" />
                </button>
                <div className="contact-branding">
                    <img src="/gyan-logo.png" alt="Gyan Academy Logo" className="contact-logo" />
                </div>
            </div>

            <p className="contact-tagline">
                તમારા પ્રતિસાદ અને સૂચનો અમારા માટે ખૂબ મહત્વના છે. અમને તમારી મદદ કરવામાં આનંદ થશે.
            </p>

            <div className="contact-grid">
                {/* Left Column - Office & Email */}
                <div className="contact-column">
                    <div className="contact-card border-red">
                        <div className="card-header">
                            <span className="icon">📍</span>
                            <h2>ઓફિસનું સરનામું</h2>
                        </div>
                        <div className="card-content">
                            <h3>Gyan Academy</h3>
                            <p>
                                Navkar Plaza, near Apna Bazar,<br />
                                Sector 6,<br />
                                ગાંધીનગર - 382006,<br />
                                ગુજરાત.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/8E9j5JSvLspXTRKk7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-button-outline"
                                style={{ textDecoration: 'none' }}
                            >
                                🗺️ Google Map પર જુઓ
                            </a>
                        </div>

                        <div className="card-divider"></div>

                        <div className="card-header">
                            <span className="icon">✉️</span>
                            <h2>ઈમેલ સપોર્ટ</h2>
                        </div>
                        <div className="card-content">
                            <p className="sub-text">કોઈપણ પ્રશ્ન માટે અમને ઈમેલ કરો:</p>
                            <a href="mailto:webcustomerservice01@gmail.com" className="contact-email-link">
                                webcustomerservice01@gmail.com
                            </a>
                            <div className="time-badge">
                                🕒 અમે સામાન્ય રીતે 24-48 કલાકમાં જવાબ આપીએ છીએ.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Social Media */}
                <div className="contact-column">
                    <div className="contact-card border-green">
                        <div className="card-header">
                            <span className="icon">💬</span>
                            <h2>સોશિયલ મીડિયા અને એપ્સ</h2>
                        </div>
                        <div className="card-content">
                            <p className="sub-text">અમારી સાથે જોડાયેલા રહો</p>
                            <p className="feature-text">
                                નવા ફીચર્સ, અપડેટ્સ અને અન્ય માહિતી માટે અમને ફોલો કરો અને અમારી એપ્સ ડાઉનલોડ કરો.
                            </p>

                            <div className="social-links-list">
                                <a href="https://www.youtube.com/@Gyanacademy_gandhinagar" target="_blank" rel="noopener noreferrer" className="social-button" style={{ textDecoration: 'none' }}>
                                    <span className="social-icon">📺</span> YouTube પર સબ્સ્ક્રાઇબ કરો
                                </a>
                                <a href="https://t.me/gyanacademygandhinagar" target="_blank" rel="noopener noreferrer" className="social-button" style={{ textDecoration: 'none' }}>
                                    <span className="social-icon">✈️</span> Telegram ચેનલમાં જોડાયો
                                </a>
                                <a href="https://instagram.com/gyanacademy_official" target="_blank" rel="noopener noreferrer" className="social-button" style={{ textDecoration: 'none' }}>
                                    <span className="social-icon">📸</span> Instagram પર ફોલો કરો
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.gyanacademy.com" target="_blank" rel="noopener noreferrer" className="social-button" style={{ textDecoration: 'none' }}>
                                    <span className="social-icon">📱</span> Gyan Academy એપ ડાઉનલોડ કરો
                                </a>
                                <a href="https://gyanacademys.com" target="_blank" rel="noopener noreferrer" className="social-button" style={{ textDecoration: 'none' }}>
                                    <span className="social-icon">🌐</span> અમારી વેબસાઇટની મુલાકાત લો
                                </a>
                            </div>

                            <div className="feedback-hint">
                                💡 તમારો અભિપ્રાય મહત્વનો છે
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="contact-footer-card">
                <div className="made-with-love">
                    <span>Made with</span>
                    <span className="heart">❤️</span>
                    <span>in Gujarat</span>
                </div>
                <p className="copyright">© 2026 ગુજરાતી વ્યાકરણ</p>
            </div>
        </div>
    );
}

export default ContactUs;
