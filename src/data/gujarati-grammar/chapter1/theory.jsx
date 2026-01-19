import React from 'react';

// Common style constants for compact design
const styles = {
    card: {
        background: '#fff',
        padding: '15px', // Reduced from 25px
        borderRadius: '12px', // Reduced from 20px
        border: '1px solid #e5e7eb',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Softer shadow
        marginBottom: '15px' // Reduced margin
    },
    gradientCard: {
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        padding: '20px', // Reduced from 30px
        borderRadius: '16px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
    },
    heading: {
        fontSize: '1.25rem', // Reduced
        fontWeight: '700',
        marginBottom: '10px'
    },
    text: {
        fontSize: '1rem', // Standard readable size
        lineHeight: '1.6',
        color: '#4b5563'
    },
    icon: {
        fontSize: '1.2rem',
        marginRight: '8px'
    }
};

export const chapter1Theory = [
    {
        title: "૧. વ્યાકરણ : અર્થ અને વ્યાખ્યા",
        content: (
            <div style={{ padding: '0px' }}> {/* Removed outer padding */}

                {/* Combined Header & Definition Section for Compactness */}
                <div style={styles.gradientCard}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '5px' }}>વ્યાકરણ એટલે શું?</h2>
                            <p style={{ fontSize: '1rem', opacity: '0.9', marginBottom: '0' }}>
                                અર્થ: <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>'સ્પષ્ટીકરણ'</span>
                            </p>
                        </div>
                        <div style={{ fontSize: '2.5rem', opacity: '0.2' }}>📖</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#1e3a8a', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                        <span>📜</span> <span style={{ marginLeft: '8px' }}>વ્યાખ્યા</span>
                    </h3>
                    <p style={{ ...styles.text, background: '#f8fafc', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #3b82f6', textAlign: 'left', wordSpacing: 'normal' }}>
                        "જે શાસ્ત્રમાં શબ્દના પ્રકૃતિને પ્રત્યય જુદા પાડી તેના અર્થ દર્શાવ્યા હોય, અને શબ્દોના શુદ્ધ રૂપ તથા વાક્યમાં તેના સંબંધનું વિવેચન હોય, તેને <strong>'વ્યાકરણ'</strong> કહે છે."
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontWeight: '600' }}>🏷️ અન્ય નામ:</span> 'શબ્દાનુશાસન'
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. વેદના અંગ તરીકે વ્યાકરણ",
        content: (
            <div style={{ padding: '0px' }}>
                <div style={styles.card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h3 style={{ ...styles.heading, color: '#0f172a', margin: 0 }}>🕉️ વેદના ૬ અંગો</h3>
                        <span style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: '600', background: '#fef2f2', padding: '4px 8px', borderRadius: '4px' }}>મુખ્ય: વ્યાકરણ</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                        {[
                            { name: "૧. શિક્ષા", icon: "🗣️" },
                            { name: "૨. કલ્પ", icon: "🔥" },
                            { name: "૩. વ્યાકરણ", icon: "📖", active: true },
                            { name: "૪. નિરુક્ત", icon: "🔍" },
                            { name: "૫. છંદ", icon: "🎵" },
                            { name: "૬. જ્યોતિષ", icon: "⭐" }
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: item.active ? '#eff6ff' : '#f8fafc',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                border: item.active ? '1px solid #bfdbfe' : '1px solid #f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.9rem',
                                color: item.active ? '#1d4ed8' : '#334155',
                                fontWeight: item.active ? '700' : '500'
                            }}>
                                <span>{item.icon}</span>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૩. વ્યાકરણનું પ્રયોજન અને કાર્ય",
        content: (
            <div style={{ padding: '0px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}> {/* Side by side layout for compactness */}

                    <div style={styles.card}>
                        <h3 style={{ ...styles.heading, color: '#047857', fontSize: '1.1rem' }}>🛡️ કાર્ય</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                "ભાષા નિયમન",
                                "વિકાર રોકવો",
                                "શુદ્ધ શબ્દ જ્ઞાન",
                                "શુદ્ધ રૂપનો તર્ક"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#374151' }}>
                                    <span style={{ color: '#10b981', fontSize: '0.8rem' }}>●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ ...styles.card, background: '#fffafa', borderColor: '#fee2e2' }}>
                        <h3 style={{ ...styles.heading, color: '#b91c1c', fontSize: '1.1rem' }}>🎯 ૪ પ્રયોજનો (કાત્યાયન)</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                "૧. રક્ષા (ભાષા રક્ષણ)",
                                "૨. ઊહ (તર્ક)",
                                "૩. આગમ (નિઃશંકતા)",
                                "૪. લઘુ (સંક્ષેપ)"
                            ].map((item, i) => (
                                <div key={i} style={{ fontSize: '0.95rem', color: '#991b1b', fontWeight: '500' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ ...styles.card, marginBottom: '0', background: '#f0f9ff', padding: '12px', textAlign: 'center' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#0369a1', fontStyle: 'italic' }}>
                        "વ્યાકરણ અશુદ્ધતા દૂર કરી શુદ્ધતા આપે છે, જેમ ચારણીથી લોટ ચળાય છે."
                    </p>
                </div>
            </div>
        )
    },
    {
        title: "૪. ઉદાહરણો અને મહત્ત્વ",
        content: (
            <div style={{ padding: '0px' }}>
                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#4f46e5', textAlign: 'center', marginBottom: '15px' }}>📝 શુદ્ધિ ઉદાહરણો</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {[
                            { wrong: "પઢી", right: "પદવી" },
                            { wrong: "પોર્વાત્ય", right: "પૌરસ્ત્ય" },
                            { wrong: "શું વાત...?", right: "શી વાત...?" },
                            { wrong: "દરેક માણસો", right: "દરેક માણસ" }
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: '#f8fafc',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                borderLeft: '3px solid #6366f1'
                            }}>
                                <span style={{ color: '#ef4444', textDecoration: 'line-through', fontSize: '0.9rem' }}>{item.wrong}</span>
                                <span style={{ color: '#10b981', fontWeight: '700', fontSize: '0.95rem' }}>{item.right}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
                    padding: '15px',
                    borderRadius: '12px',
                    color: '#fff',
                    textAlign: 'center',
                    boxShadow: '0 5px 15px rgba(79, 70, 229, 0.2)'
                }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '5px' }}>🎓 સર્વ વિદ્યાની વિદ્યા</h3>
                    <p style={{ fontSize: '0.9rem', margin: 0, opacity: '0.95' }}>
                        "ભાષા એ તમામ જ્ઞાનનું માધ્યમ છે, અને વ્યાકરણ ભાષાને શુદ્ધ રાખે છે."
                    </p>
                </div>
            </div>
        )
    }
];
