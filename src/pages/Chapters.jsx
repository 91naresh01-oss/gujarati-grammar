import React from 'react';
import { useNavigate } from 'react-router-dom';
import { chaptersData } from '../data';

function Chapters() {
    const navigate = useNavigate();
    const chapters = chaptersData;

    return (
        <div style={{ width: '100%', padding: '20px' }}>

            <div className="page-header">
                <button
                    onClick={() => navigate('/')}
                    className="back-btn-circle"
                >
                    ←
                </button>
                <h2 className="page-title">ગુજરાતી વ્યાકરણ</h2>
            </div>

            <div className="chapter-grid">
                {chapters.map((chapter) => (
                    <div key={chapter.id} className="chapter-card">

                        <div className="chapter-header">
                            <div className="chapter-number-box">
                                {chapter.id}
                            </div>
                            <div className="chapter-info">
                                <h3>{chapter.name}</h3>
                                <p className="chapter-desc">{chapter.desc}</p>
                            </div>
                        </div>

                        <div className="chapter-actions">
                            <button
                                className="action-btn btn-theory"
                                onClick={() => navigate(`/theory/${chapter.id}`)}
                            >
                                <span>📖</span> THEORY
                            </button>
                            <button
                                className="action-btn btn-test"
                                onClick={() => navigate(`/test/${chapter.id}`)}
                            >
                                <span>📝</span> TEST
                            </button>
                            <button className="action-btn btn-pdf">
                                <span>📄</span> PDF
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chapters;
