import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { chaptersData } from '../data';
import BackArrow from '../components/BackArrow';

function Theory() {
    const navigate = useNavigate();
    const { id } = useParams();
    const chapter = chaptersData.find(c => c.id === parseInt(id));

    // State for lazy-loaded theory component
    const [TheoryContent, setTheoryContent] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (chapter && chapter.loadTheory) {
            setIsLoading(true);
            chapter.loadTheory()
                .then(module => {
                    setTheoryContent(() => module);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Failed to load theory:", err);
                    setError("થિયરી ડેટા લોડ કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.");
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [chapter]);

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
                    <BackArrow size={20} color="white" />
                </button>
                <div className="theory-title-pill">
                    {chapter.name}
                </div>
            </div>

            <div className="modern-theory-wrapper">
                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '50px 0', color: '#3b82f6', fontSize: '1.2rem', fontWeight: 600 }}>
                        <div style={{
                            width: '40px', height: '40px', border: '4px solid #e5e7eb',
                            borderTop: '4px solid #3b82f6', borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite', margin: '0 auto 15px'
                        }} />
                        થિયરી લોડ થઈ રહી છે...
                    </div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#ef4444' }}>{error}</div>
                ) : TheoryContent ? (
                    Array.isArray(TheoryContent) ? (
                        TheoryContent.map((item, index) => (
                            <div key={index} className="modern-theory-card">
                                <div className="modern-theory-content">
                                    {item.content}
                                </div>
                            </div>
                        ))
                    ) : typeof TheoryContent === 'function' ? (
                        <TheoryContent />
                    ) : React.isValidElement(TheoryContent) ? (
                        TheoryContent
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
