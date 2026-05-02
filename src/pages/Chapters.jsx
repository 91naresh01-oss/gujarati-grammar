import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { chaptersData } from '../data';
import BackArrow from '../components/BackArrow';
import { prefetchNearbyChapters, prefetchChapter } from '../utils/prefetchUtils';

const colorThemes = [
    { main: '#e11d48', border: '#f43f5e', bg: 'rgba(244, 63, 94, 0.08)' }, // 1: Red
    { main: '#4f46e5', border: '#6366f1', bg: 'rgba(99, 102, 241, 0.08)' }, // 2: Indigo
    { main: '#0284c7', border: '#38bdf8', bg: 'rgba(56, 189, 248, 0.08)' }, // 3: Light Blue
    { main: '#059669', border: '#34d399', bg: 'rgba(52, 211, 153, 0.08)' }, // 4: Green
    { main: '#d97706', border: '#fbbf24', bg: 'rgba(251, 191, 36, 0.08)' }, // 5: Orange
    { main: '#334155', border: '#94a3b8', bg: 'rgba(148, 163, 184, 0.08)' }, // 6: Slate
    { main: '#7c3aed', border: '#a855f7', bg: 'rgba(168, 85, 247, 0.08)' }, // 7: Purple
    { main: '#0d9488', border: '#2dd4bf', bg: 'rgba(45, 212, 191, 0.08)' }, // 8: Teal
    { main: '#be123c', border: '#fb7185', bg: 'rgba(251, 113, 133, 0.08)' }, // 9: Pink
];

function Chapters() {
    const navigate = useNavigate();
    const chapters = chaptersData;

    // Prefetch first few chapters when page loads (idle time)
    useEffect(() => {
        prefetchNearbyChapters(chapters);
    }, [chapters]);

    // Hover/touch par chapter data prefetch
    const handleChapterInteraction = useCallback((chapter) => {
        prefetchChapter(chapter);
    }, []);

    return (
        <>
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
                    {chapters.map((chapter, index) => {
                        const theme = colorThemes[index % colorThemes.length];
                        return (
                            <div
                                key={chapter.id}
                                className="chapter-card"
                                style={{
                                    backgroundColor: theme.bg,
                                    borderLeftColor: theme.border
                                }}
                                onMouseEnter={() => handleChapterInteraction(chapter)}
                                onTouchStart={() => handleChapterInteraction(chapter)}
                            >
                                <div className="chapter-header">
                                    <div className="chapter-number-box" style={{ backgroundColor: theme.main }}>
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
                                        Theory
                                    </button>
                                    <button
                                        className="action-btn btn-test"
                                        onClick={() => navigate(`/test/${chapter.id}`)}
                                    >
                                        Test
                                    </button>
                                    <button
                                        className="action-btn btn-pdf"
                                        onClick={() => navigate(`/pdf-view?file=${encodeURIComponent(`/pdf/Ch ${chapter.id} theory.pdf`)}&title=${encodeURIComponent(`Ch ${chapter.id} - ${chapter.name} (Theory)`)}`)}
                                    >
                                        Theory PDF
                                    </button>
                                    {chapter.hasTestPdf && (
                                        <button
                                            className="action-btn btn-pdf"
                                            onClick={() => navigate(`/pdf-view?file=${encodeURIComponent(`/pdf/Ch ${chapter.id} questions.pdf`)}&title=${encodeURIComponent(`Ch ${chapter.id} - ${chapter.name} (Test)`)}`)}
                                        >
                                            Test PDF
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Chapters;
