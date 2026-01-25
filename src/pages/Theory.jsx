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

    // --- 🕵️ Debug Helper: Validate Style Props ---
    const validateReactElement = (element, path = 'root') => {
        if (!element || typeof element !== 'object') return null;

        // Check if style is a string
        if (element.props && typeof element.props.style === 'string') {
            return `Invalid style (string) found at ${path} in <${element.type}>. Style content: "${element.props.style}"`;
        }

        // Recursively check children
        if (element.props && element.props.children) {
            const children = element.props.children;
            if (Array.isArray(children)) {
                for (let i = 0; i < children.length; i++) {
                    const error = validateReactElement(children[i], `${path} > child[${i}]`);
                    if (error) return error;
                }
            } else {
                return validateReactElement(children, `${path} > child`);
            }
        }
        return null;
    };

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
                        chapter.theory.map((item, index) => {
                            // Run Validation
                            const validationError = validateReactElement(item.content);
                            if (validationError) {
                                return (
                                    <div key={index} className="modern-theory-card" style={{ border: '2px solid red', padding: '20px' }}>
                                        <h3 style={{ color: 'red' }}>⚠️ Debugging Error Found</h3>
                                        <p>{validationError}</p>
                                        <pre style={{ background: '#f0f0f0', padding: '10px', whiteSpace: 'pre-wrap' }}>
                                            {JSON.stringify(item.content, (key, value) => {
                                                if (key === '_owner' || key === '_store') return undefined;
                                                return value;
                                            }, 2)}
                                        </pre>
                                    </div>
                                );
                            }

                            return (
                                <div key={index} className="modern-theory-card">
                                    {item.title && <h2 className="modern-theory-title">{item.title}</h2>}
                                    <div className="modern-theory-content">
                                        {item.content}
                                    </div>
                                </div>
                            );
                        })
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
