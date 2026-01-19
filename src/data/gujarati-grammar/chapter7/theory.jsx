import React from 'react';

// Common Compact Styles
const styles = {
    card: {
        background: '#fff',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        marginBottom: '15px'
    },
    gradientCard: {
        background: 'linear-gradient(135deg, #0d9488 0%, #115e59 100%)', // Teal theme for Ch 7
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(13, 148, 136, 0.2)'
    },
    heading: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#115e59'
    },
    subHeading: {
        fontSize: '0.95rem',
        fontWeight: '700',
        color: '#0f766e',
        marginBottom: '5px',
        background: '#ccfbf1',
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block'
    },
    gridCards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        marginTop: '10px'
    },
    infoBox: {
        border: '1px solid #a7f3d0',
        background: '#ecfdf5',
        borderRadius: '8px',
        padding: '10px'
    },
    exceptionBox: {
        marginTop: '8px',
        padding: '8px',
        background: '#fff1f2',
        borderLeft: '4px solid #f43f5e',
        fontSize: '0.85rem',
        color: '#881337'
    }
};

export const chapter7Theory = [
    {
        title: "૧. લિંગ વ્યવસ્થા (Gender)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>🚻 લિંગ (જાતિ)</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        ત્રણ પ્રકાર: ૧. નર (પુલ્લિંગ), ૨. નારી (સ્ત્રીલિંગ), ૩. નાન્યતર (નપુંસકલિંગ).
                    </p>
                    <div style={{ marginTop: '10px', display: 'flex', gap: '8px', fontSize: '0.9rem' }}>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>કેવો? (નર)</span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>કેવી? (નારી)</span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>કેવું? (નાન્યતર)</span>
                    </div>
                </div>

                <div style={styles.gridCards}>
                    {/* Nar Jati */}
                    <div style={styles.infoBox}>
                        <h4 style={{ ...styles.heading, fontSize: '1rem', color: '#0e7490' }}>૧. નરજાતિ (પુલ્લિંગ)</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                            પ્રત્યય: <strong>'ઓ'</strong><br />
                            પ્રશ્ન: <strong>'કેવો?'</strong>
                        </p>
                        <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                            સિંહ, છોકરો, કૂવો, લીમડો, ચોપડો.
                        </div>
                        <div style={styles.exceptionBox}>
                            <strong>અપવાદ:</strong> ધો, છો, બદબો (નારી), મોં (નાન્યતર).
                        </div>
                    </div>

                    {/* Nari Jati */}
                    <div style={{ ...styles.infoBox, background: '#fdf2f8', borderColor: '#fbcfe8' }}>
                        <h4 style={{ ...styles.heading, fontSize: '1rem', color: '#be185d' }}>૨. નારીજાતિ (સ્ત્રીલિંગ)</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                            પ્રત્યય: <strong>'ઈ', 'આ'</strong><br />
                            પ્રશ્ન: <strong>'કેવી?'</strong>
                        </p>
                        <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                            કેળ, આમલી, નીતિ, બાલા, કીર્તિ.
                        </div>
                        <div style={styles.exceptionBox}>
                            <strong>અપવાદ:</strong> દેવતા (નર), કવિ, રવિ, હાથી, પિતા.
                        </div>
                    </div>

                    {/* Nanyatar Jati */}
                    <div style={{ ...styles.infoBox, background: '#f0f9ff', borderColor: '#bae6fd' }}>
                        <h4 style={{ ...styles.heading, fontSize: '1rem', color: '#0369a1' }}>૩. નાન્યતર (નપુંસક)</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                            પ્રત્યય: <strong>'ઉ'</strong><br />
                            પ્રશ્ન: <strong>'કેવું?'</strong>
                        </p>
                        <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                            ઘેટું, ગાડું, લીંબુ, કૂતરું, કોળું.
                        </div>
                        <div style={styles.exceptionBox}>
                            <strong>અપવાદ:</strong> ઘઉં, લાડુ (નર); ઋતુ, આબરૂ (નારી).
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. વચન વ્યવસ્થા (Number)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={styles.heading}>🔢 વચન એટલે શું?</h3>
                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                        એક વસ્તુ માટે <strong>એકવચન</strong> અને એકથી વધુ માટે <strong>બહુવચન</strong> વપરાય છે.
                    </p>

                    <h4 style={styles.subHeading}>બહુવચનના નિયમો</h4>
                    <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', lineHeight: '1.6', color: '#374151' }}>
                        <li>
                            <strong>'ઓ' લગાડવાથી:</strong><br />
                            માણસ → માણસો, પર્વત → પર્વતો, નદી → નદીઓ.
                        </li>
                        <li>
                            <strong>'ઓ' હોય તો 'આ'/'ઓ':</strong><br />
                            છોકરો → છોકરા/છોકરાઓ, ઘોડો → ઘોડા/ઘોડાઓ.
                        </li>
                        <li>
                            <strong>'ઉ' હોય તો 'આં'/'ઓ':</strong><br />
                            છોકરું → છોકરાં/છોકરાંઓ, માછલું → માછલાં.
                        </li>
                        <li>
                            <strong>સમાન રૂપ:</strong><br />
                            ઘણાં ઝાડ, ઘણી ગાય.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
];
