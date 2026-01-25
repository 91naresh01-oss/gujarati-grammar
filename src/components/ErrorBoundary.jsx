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
                    padding: '20px',
                    margin: '20px',
                    border: '2px solid red',
                    borderRadius: '10px',
                    background: '#fff0f0',
                    fontFamily: 'monospace'
                }}>
                    <h2 style={{ color: '#c00' }}>Something went wrong.</h2>

                    <h3 style={{ color: '#d00' }}>{this.state.error && this.state.error.toString()}</h3>

                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
                        <summary style={{ cursor: 'pointer', color: '#0055aa' }}>Click for Component Stack</summary>
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>

                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            background: '#c00',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
