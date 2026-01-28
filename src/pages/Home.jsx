import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-icon" style={{ fontSize: '5rem', marginBottom: '1rem' }}>📚</div>
                <h1 className="text-gradient" style={{ fontSize: '2.6rem', marginBottom: '0.8rem', fontWeight: '900' }}>ગુજરાતી વ્યાકરણ</h1>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.5' }}>
                    સરળતાથી વ્યાકરણ શીખો અને <br /> પોતાની જાતને ટેસ્ટ કરો.
                </p>
                <button className="btn-primary" onClick={() => navigate('/chapters')} style={{ marginTop: '10px' }}>
                    <span>શરૂ કરો (Start)</span>
                </button>
                <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#9ca3af' }}>
                    Version: {__COMMIT_MESSAGE__} (Deployed)
                </div>
            </div>
            <div className="home-footer-links">
                <span onClick={() => navigate('/about')}>About Us</span>
                <span className="separator">|</span>
                <span onClick={() => navigate('/contact')}>Contact Us</span>
            </div>
        </div>
    );
}

export default Home;


