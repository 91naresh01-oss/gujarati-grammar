import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BackArrow from '../components/BackArrow';

function PdfViewer() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const pdfUrl = searchParams.get('file');
    const title = searchParams.get('title') || 'PDF Viewer';

    useEffect(() => {
        // Block keyboard shortcuts for print, save, copy
        const handleKeyDown = (e) => {
            // Ctrl+P (Print), Ctrl+S (Save), Ctrl+C (Copy), Ctrl+Shift+I (DevTools)
            if (
                (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I'))
            ) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        // Block right-click context menu
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        // Block drag
        const handleDragStart = (e) => {
            e.preventDefault();
            return false;
        };

        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('contextmenu', handleContextMenu, true);
        document.addEventListener('dragstart', handleDragStart, true);

        return () => {
            document.removeEventListener('keydown', handleKeyDown, true);
            document.removeEventListener('contextmenu', handleContextMenu, true);
            document.removeEventListener('dragstart', handleDragStart, true);
        };
    }, []);

    if (!pdfUrl) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>
                <h2>PDF not found!</h2>
                <button onClick={() => navigate('/chapters')} style={{
                    marginTop: '20px', padding: '10px 30px', background: '#3b82f6',
                    color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer'
                }}>← Back to Chapters</button>
            </div>
        );
    }

    return (
        <div className="pdf-viewer-page" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: '#1e293b',
            display: 'flex',
            flexDirection: 'column',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
        }}>
            {/* Header Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
                color: 'white',
                flexShrink: 0,
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
                <button
                    onClick={() => navigate('/chapters')}
                    style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    }}
                >
                    <BackArrow size={16} color="white" /> પાછા જાઓ
                </button>
                <h3 style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    flex: 1,
                    padding: '0 15px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    📄 {title}
                </h3>
                <div style={{ width: '120px' }}></div>
            </div>

            {/* PDF Container with security overlay */}
            <div style={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* PDF iframe - toolbar disabled */}
                <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block'
                    }}
                />

                {/* Transparent overlay to prevent right-click and interaction with PDF controls */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '40px',
                        background: 'transparent',
                        zIndex: 100,
                        pointerEvents: 'auto'
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                />
            </div>

            {/* Security watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-30deg)',
                fontSize: '4rem',
                fontWeight: '900',
                color: 'rgba(0,0,0,0.03)',
                pointerEvents: 'none',
                zIndex: 50,
                whiteSpace: 'nowrap',
                userSelect: 'none'
            }}>
                Gyan Academy
            </div>
        </div>
    );
}

export default PdfViewer;
