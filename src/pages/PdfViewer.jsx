import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import BackArrow from '../components/BackArrow';

// Use standard worker from CDN for better performance and compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// CSS for react-pdf to handle scrolling and layout properly
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Lazy loading component for PDF pages
const LazyPage = ({ pageNumber, zoomLevel }) => {
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Once visible, keep it rendered
                }
            },
            {
                rootMargin: '800px 0px', // Pre-load 800px before it comes into view
                threshold: 0
            }
        );

        if (pageRef.current) {
            observer.observe(pageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Estimated height to prevent scroll jumps
    const estimatedHeight = 600 * (zoomLevel / 100);

    return (
        <div 
            ref={pageRef} 
            style={{ 
                marginBottom: '20px', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                minHeight: isVisible ? 'auto' : `${estimatedHeight}px`,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            {isVisible ? (
                <Page
                    pageNumber={pageNumber}
                    scale={zoomLevel / 100}
                    loading={<div style={{ padding: '20px', color: '#94a3b8' }}>પેજ {pageNumber} લોડ થાય છે...</div>}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            ) : (
                 <div style={{ color: '#cbd5e1' }}>પેજ {pageNumber} લોડ થાય છે...</div>
            )}
        </div>
    );
};

function PdfViewer() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const rawPdfUrl = searchParams.get('file');
    const title = searchParams.get('title') || 'PDF Viewer';

    // Security: Only allow local /pdf/ paths — block external URLs
    const isValidPdf = rawPdfUrl && rawPdfUrl.startsWith('/pdf/') && rawPdfUrl.endsWith('.pdf') && !rawPdfUrl.includes('..');
    const pdfUrl = isValidPdf ? rawPdfUrl : null;
    const containerRef = useRef(null);

    const [numPages, setNumPages] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(100);
    const [loading, setLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 300));
    const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            } else if (containerRef.current.webkitRequestFullscreen) { /* Safari */
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) { /* IE11 */
                containerRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        // Block keyboard shortcuts for print, save, copy
        const handleKeyDown = (e) => {
            if (
                (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I'))
            ) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('contextmenu', handleContextMenu, true);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
            document.removeEventListener('keydown', handleKeyDown, true);
            document.removeEventListener('contextmenu', handleContextMenu, true);
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
        <div ref={containerRef} className="pdf-viewer-page" style={{
            position: isFullscreen ? 'relative' : 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: '#1e293b',
            display: 'flex',
            flexDirection: 'column',
            userSelect: 'none',
            WebkitUserSelect: 'none'
        }}>
            {/* Header Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5px 20px',
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
                        padding: '5px 12px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <BackArrow size={14} color="white" /> પાછા
                </button>

                <h3 style={{
                    margin: 0,
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    flex: 1,
                    padding: '0 10px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    📄 {title}
                </h3>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                        onClick={toggleFullscreen}
                        title={isFullscreen ? "Exit Fullscreen" : "Full Screen"}
                        style={{
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            marginRight: '5px'
                        }}
                    >
                        {isFullscreen ? '⤦' : '⛶'}
                    </button>
                    <button onClick={handleZoomOut} style={{ background: 'none', border: '1px solid white', color: 'white', cursor: 'pointer', borderRadius: '4px', width: '25px', height: '25px' }}>−</button>
                    <span style={{ fontSize: '0.8rem', minWidth: '40px', textAlign: 'center' }}>{zoomLevel}%</span>
                    <button onClick={handleZoomIn} style={{ background: 'none', border: '1px solid white', color: 'white', cursor: 'pointer', borderRadius: '4px', width: '25px', height: '25px' }}>+</button>
                </div>
            </div>

            {/* Content Area */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 10px',
                background: '#334155'
            }}>
                {loading && (
                    <div style={{ color: 'white', marginTop: '50px', textAlign: 'center' }}>
                        <div className="spinner" style={{
                            width: '40px', height: '40px', border: '4px solid #fff', borderTop: '4px solid #8b5cf6',
                            borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 10px'
                        }} />
                        PDF લોડ થઈ રહી છે...
                    </div>
                )}

                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={null}
                    error={<div style={{ color: '#ef4444' }}>PDF લોડ કરવામાં ભૂલ આવી!</div>}
                >
                    {/* Render pages using lazy loading */}
                    {Array.from(new Array(numPages || 0), (el, index) => (
                        <LazyPage 
                            key={`page_${index + 1}`} 
                            pageNumber={index + 1} 
                            zoomLevel={zoomLevel} 
                        />
                    ))}
                </Document>
            </div>

            {/* Footer / Watermark */}
            <div style={{ padding: '5px', textAlign: 'center', color: '#94a3b8', fontSize: '0.7rem', background: '#0f172a' }}>
                © Gyan Academy - સુરક્ષિત વ્યુઅર
            </div>

            <style>{`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                canvas { max-width: 100% !important; height: auto !important; }
                :fullscreen { background: #1e293b; }
                :-webkit-full-screen { background: #1e293b; }
            `}</style>
        </div>
    );
}

export default PdfViewer;
