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
        <div style={{ width: '100%', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="theory-header-outside">
                <button onClick={() => navigate('/chapters')} className="back-btn-theory-outside">
                    ←
                </button>
                <div className="theory-title-pill">
                    {chapter.name}
                </div>
            </div>

            <div className="theory-card-container">
                {chapter.theory.map((item, index) => (
                    <div key={index} className="theory-section">
                        {item.title && <h2 className="theory-title">{item.title}</h2>}
                        <div className="theory-content">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Theory;
