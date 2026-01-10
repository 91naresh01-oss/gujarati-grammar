import React from 'react';
import { useNavigate } from 'react-router-dom';

function Chapters() {
    const navigate = useNavigate();

    const chapters = [
        {
            id: 1,
            name: '૧. વ્યાકરણ : મહત્વ, પ્રયોજનાદિ',
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button className="back-btn" onClick={() => navigate('/')}>
                    ← Back
                </button>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
                <h2>પ્રકરણો (Chapters)</h2>
                <div className="chapter-list">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className="chapter-item">
                            <div className="chapter-title">{chapter.name}</div>
                            <div className="chapter-actions">
                                <button
                                    className="btn-secondary"
                                    onClick={() => navigate(`/theory/${chapter.id}`)}
                                >
                                    થિયરી (Theory)
                                </button>
                                <button
                                    className="btn-secondary"
                                    style={{ borderColor: '#e53e3e', color: '#e53e3e' }}
                                    onClick={() => navigate(`/test/${chapter.id}`)}
                                >
                                    ટેસ્ટ (Test)
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chapters;
