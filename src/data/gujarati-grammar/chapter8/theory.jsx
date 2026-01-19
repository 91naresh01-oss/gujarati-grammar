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
        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', // Violet theme for Ch 8
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.2)'
    },
    heading: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#5b21b6'
    },
    subHeading: {
        fontSize: '0.95rem',
        fontWeight: '700',
        color: '#6d28d9',
        marginBottom: '5px',
        background: '#ede9fe',
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block'
    },
    gridBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '10px',
        marginTop: '10px'
    },
    typeCard: {
        border: '1px solid #ddd6fe',
        background: '#f5f3ff',
        borderRadius: '8px',
        padding: '10px'
    },
    exampleText: {
        fontSize: '0.85rem',
        color: '#4b5563',
        marginTop: '5px'
    }
};

export const chapter8Theory = [
    {
        title: "૧. સંજ્ઞા : વ્યાખ્યા અને વિશેષતાઓ",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>🏷️ સંજ્ઞા (Noun)</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        "કોઈ પણ વ્યક્તિ, વસ્તુ, સ્થળ કે ખ્યાલનો નિર્દેશ કરતા શબ્દને સંજ્ઞા કહે છે."
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>✨ મુખ્ય વિશેષતાઓ</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                            <strong style={{ color: '#166534' }}>૧. વિકારી સંજ્ઞા</strong>
                            <p style={{ fontSize: '0.85rem', margin: '5px 0 0', color: '#374151' }}>
                                લિંગ/વચન મુજબ બદલાય.<br />
                                <em>દા.ત. વાંદરો, વાંદરી, વાંદરું.</em>
                            </p>
                        </div>
                        <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '8px', border: '1px solid #fed7aa' }}>
                            <strong style={{ color: '#9a3412' }}>૨. અવિકારી સંજ્ઞા</strong>
                            <p style={{ fontSize: '0.85rem', margin: '5px 0 0', color: '#374151' }}>
                                યથાવત્ રહે, બદલાય નહીં.<br />
                                <em>દા.ત. રાજા, ખેતર, નદી.</em>
                            </p>
                        </div>
                        <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                            <strong style={{ color: '#1e40af' }}>૩. મૂર્ત સંજ્ઞા</strong>
                            <p style={{ fontSize: '0.85rem', margin: '5px 0 0', color: '#374151' }}>
                                પાંચ ઈન્દ્રિયોથી અનુભવાય.<br />
                                <em>દા.ત. અવાજ, જલેબી, વાસ.</em>
                            </p>
                        </div>
                        <div style={{ background: '#faf5ff', padding: '10px', borderRadius: '8px', border: '1px solid #e9d5ff' }}>
                            <strong style={{ color: '#6b21a8' }}>૪. અમૂર્ત સંજ્ઞા</strong>
                            <p style={{ fontSize: '0.85rem', margin: '5px 0 0', color: '#374151' }}>
                                માત્ર તર્કથી અનુભવાય.<br />
                                <em>દા.ત. ક્રોધ, દુઃખ, વિચાર.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. સંજ્ઞાના પ્રકારો (૬ પ્રકાર)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={styles.heading}>📂 સંજ્ઞા વર્ગીકરણ</h3>

                    <div style={styles.gridBox}>
                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૧. વ્યક્તિવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>ચોક્કસ વ્યક્તિ કે પદાર્થ સૂચવે.</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. હિમાલય, ગાંધીનગર, ગિરનાર, ગંગા.</em>
                            </div>
                        </div>

                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૨. જાતિવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>આખા વર્ગસમૂહને લાગુ પડે.</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. પર્વત, પુસ્તક, નદી, વૃક્ષ.</em>
                            </div>
                        </div>

                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૩. સમૂહવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>સમૂહનો નિર્દેશ કરે (એકવચનમાં).</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. લશ્કર, ટોળું, સભા, ઢગલો.</em>
                            </div>
                        </div>

                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૪. દ્રવ્યવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>ગણી ન શકાય તેવા પદાર્થો.</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. પાણી, ઘી, સોનું, લોઢું, માટી.</em>
                            </div>
                        </div>

                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૫. ભાવવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>માત્ર અનુભવી શકાય તેવા ભાવ.</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. પ્રેમ, ક્રોધ, સચ્ચાઈ, ઠંડી.</em>
                            </div>
                        </div>

                        <div style={styles.typeCard}>
                            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#6d28d9' }}>૬. ક્રિયાવાચક</div>
                            <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>ક્રિયા દર્શાવતી સંજ્ઞા.</div>
                            <div style={styles.exampleText}>
                                <em>દા.ત. દોડ, રમત, લેખન, દર્શન.</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];
