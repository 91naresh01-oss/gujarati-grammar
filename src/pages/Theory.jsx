import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { chaptersData } from '../data';

function Theory() {
    const navigate = useNavigate();
    const { id } = useParams();
    const chapter = chaptersData.find(c => c.id === parseInt(id));

    if (!chapter) {
        return <div>Chapter not found</div>;
    }

    return (
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            <div className="theory-bg-container">
                <div className="rainbow-pastel-bg"></div>
            </div>

            <div className="theory-header-outside">
                <button onClick={() => navigate('/chapters')} className="back-btn-theory-outside">
                    ←
                </button>
                <div className="theory-title-pill">
                    {chapter.name}
                </div>
            </div>

            <div className="modern-theory-wrapper">
                {chapter.theory ? (
                    Array.isArray(chapter.theory) ? (
                        chapter.theory.map((item, index) => (
                            <div key={index} className="modern-theory-card">
                                {item.title && <h2 className="modern-theory-title">{item.title}</h2>}
                                <div className="modern-theory-content">
                                    {item.content}
                                </div>
                            </div>
                        ))
                    ) : typeof chapter.theory === 'function' ? (
                        <chapter.theory />
                    ) : React.isValidElement(chapter.theory) ? (
                        chapter.theory
                    ) : (
                        <div>Theory content format not recognized.</div>
                    )
                ) : (
                    <div>No theory content available.</div>
                )}
            </div>
        </div>
    );
}

export default Theory;
