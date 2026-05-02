import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home-wrapper">
                <div className="home-content-inner">
                    <img src="/gyan-logo.png" alt="Gyan Academy" className="home-logo" />

                    <div className="home-container">
                        <div className="home-content-row">
                            <div className="home-icon">📚</div>

                            <div className="home-text-col">
                                <h1 className="home-title">
                                    ગુજરાતી વ્યાકરણ
                                </h1>
                                <p className="home-subtitle">
                                    સરળતાથી વ્યાકરણ શીખો અને <br /> પોતાની જાતને ટેસ્ટ કરો.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/chapters')}
                            className="home-start-btn"
                        >
                            શરૂ કરો (Start)
                        </button>
                    </div>

                </div>
            </div>

            <div className="home-footer-links">
                <span onClick={() => navigate('/about')} className="home-footer-item">About Us</span>
                <span className="separator" style={{ color: '#94a3b8' }}>|</span>
                <span onClick={() => navigate('/contact')} className="home-footer-item">Contact Us</span>
            </div>
        </>
    );
}

export default Home;

