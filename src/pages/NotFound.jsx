import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../components/BackArrow';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            padding: '20px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🔍</div>
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px'
            }}>
                404
            </h1>
            <h2 style={{ color: '#1e293b', fontWeight: 700, marginBottom: '8px', fontSize: '1.2rem' }}>
                પેજ મળ્યું નથી!
            </h2>
            <p style={{ color: '#64748b', marginBottom: '24px', maxWidth: '400px', lineHeight: 1.6 }}>
                તમે જે પેજ શોધી રહ્યા છો તે અસ્તિત્વમાં નથી અથવા ખસેડવામાં આવ્યું છે.
            </p>
            <button
                onClick={() => navigate('/')}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 28px',
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}
            >
                <BackArrow size={16} color="white" />
                હોમ પેજ પર જાઓ
            </button>
        </div>
    );
}

export default NotFound;
