import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home-wrapper" style={{ position: 'relative', perspective: '1000px' }}>
                {/* 3D Floating Blobs Background */}
                <div className="blob blob-1" style={{ background: 'linear-gradient(135deg, #a78bfa, #3b82f6)' }}></div>
                <div className="blob blob-2" style={{ background: 'linear-gradient(135deg, #f472b6, #fb7185)' }}></div>
                <div className="blob blob-3" style={{ background: 'linear-gradient(135deg, #60a5fa, #34d399)' }}></div>

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/gyan-logo.png" alt="Gyan Academy" style={{
                        width: '180px',
                        marginBottom: '1rem',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15)) drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                    }} />
                    <div className="home-container" style={{
                        position: 'relative',
                        padding: '2.5rem 2rem 3rem 2rem',
                        minHeight: '200px',
                        maxWidth: '520px',
                        width: '90%',
                        background: 'rgba(255, 255, 255, 0.4)', // Glossy transparent water-like effect
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)', // For Safari support
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 20px rgba(255, 255, 255, 0.4) inset',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '25px',
                        transform: 'translateZ(0)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'center' }}>
                            <div className="home-icon" style={{
                                fontSize: '4rem',
                                marginBottom: '0',
                                filter: 'drop-shadow(0 8px 10px rgba(0,0,0,0.1))'
                            }}>📚</div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                                <h1 style={{
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    color: '#2563eb',
                                    margin: '0',
                                    lineHeight: '1.2'
                                }}>
                                    ગુજરાતી વ્યાકરણ
                                </h1>
                                <p style={{
                                    color: '#475569',
                                    fontSize: '1rem',
                                    lineHeight: '1.4',
                                    margin: '5px 0 0 0',
                                    fontWeight: '600'
                                }}>
                                    સરળતાથી વ્યાકરણ શીખો અને <br /> પોતાની જાતને ટેસ્ટ કરો.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/chapters')}
                            style={{
                                padding: '16px 20px',
                                fontSize: '1.2rem',
                                fontWeight: '800',
                                background: 'linear-gradient(180deg, #4b8df8 0%, #2563eb 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
                                width: '95%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)';
                            }}
                        >
                            શરૂ કરો (Start)
                        </button>
                    </div>

                </div>
            </div>

            <div className="home-footer-links" style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: '10px 40px',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                zIndex: 50
            }}>
                <span onClick={() => navigate('/about')} style={{ fontWeight: '700', color: '#475569', cursor: 'pointer', fontSize: '1rem' }}>About Us</span>
                <span className="separator" style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
                <span onClick={() => navigate('/contact')} style={{ fontWeight: '700', color: '#475569', cursor: 'pointer', fontSize: '1rem' }}>Contact Us</span>
            </div>
        </>
    );
}

export default Home;

