import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="glass-card home-container">
            <div style={{ fontSize: '5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>📚</div>
            <h1 className="home-title">ગુજરાતી વ્યાકરણ</h1>
            <p style={{ color: '#4a5568', marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                સરળતાથી વ્યાકરણ શીખો અને <br /> પોતાની જાતને ટેસ્ટ કરો.
            </p>
            <button className="btn-primary" onClick={() => navigate('/chapters')}>
                શરૂ કરો (Start)
            </button>
        </div>
    );
}

export default Home;
