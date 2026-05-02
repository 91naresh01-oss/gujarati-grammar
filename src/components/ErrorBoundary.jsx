import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    padding: '20px',
                    textAlign: 'center',
                    fontFamily: 'system-ui, sans-serif'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚠️</div>
                    <h2 style={{ color: '#1e293b', fontWeight: 700, marginBottom: '8px' }}>કંઈક ખોટું થયું!</h2>
                    <p style={{ color: '#64748b', marginBottom: '20px', maxWidth: '400px' }}>
                        કૃપા કરીને પેજ ફરીથી લોડ કરો. જો સમસ્યા ચાલુ રહે, તો અમારો સંપર્ક કરો.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '10px 28px',
                            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.95rem'
                        }}
                    >
                        ફરીથી લોડ કરો
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
