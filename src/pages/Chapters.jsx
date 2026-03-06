import React from 'react';
import { useNavigate } from 'react-router-dom';
import { chaptersData } from '../data';
import BackArrow from '../components/BackArrow';

function Chapters() {
    const navigate = useNavigate();
    const chapters = chaptersData;

    return (
        <>
            {/* 3D Floating Blobs Background */}
            <div className="blob blob-1" style={{ background: 'linear-gradient(135deg, #a78bfa, #3b82f6)' }}></div>
            <div className="blob blob-2" style={{ background: 'linear-gradient(135deg, #f472b6, #fb7185)' }}></div>
            <div className="blob blob-3" style={{ background: 'linear-gradient(135deg, #60a5fa, #34d399)' }}></div>

            <div style={{ width: '100%', padding: '20px', position: 'relative', zIndex: 1 }}>

                <div className="page-header">
                    <button
                        onClick={() => navigate('/')}
                        className="back-btn-circle"
                    >
                        <BackArrow size={20} color="white" />
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
                            </div>

                            <div className="pdf-actions">
                                <button
                                    className="pdf-btn pdf-theory-btn"
                                    onClick={() => navigate(`/pdf-view?file=${encodeURIComponent(`/pdf/Ch ${chapter.id} theory.pdf`)}&title=${encodeURIComponent(`Ch ${chapter.id} - ${chapter.name} (Theory)`)}`)}
                                >
                                    <span className="pdf-icon">📘</span>
                                    <span>{chapter.hasTestPdf ? 'Theory PDF' : 'Theory PDF | Test'}</span>
                                </button>
                                {chapter.hasTestPdf && (
                                    <button
                                        className="pdf-btn pdf-test-btn"
                                        onClick={() => navigate(`/pdf-view?file=${encodeURIComponent(`/pdf/Ch ${chapter.id} questions.pdf`)}&title=${encodeURIComponent(`Ch ${chapter.id} - ${chapter.name} (Test)`)}`)}
                                    >
                                        <span className="pdf-icon">📙</span>
                                        <span>Test PDF</span>
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Chapters;
