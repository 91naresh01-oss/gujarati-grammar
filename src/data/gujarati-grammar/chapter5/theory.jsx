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
        background: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)', // Red/Rose theme for Ch 5
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(225, 29, 72, 0.2)'
    },
    heading: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#881337'
    },
    subHeading: {
        fontSize: '0.95rem',
        fontWeight: '700',
        color: '#9f1239',
        marginBottom: '8px',
        marginTop: '8px',
        background: '#fff1f2',
        padding: '5px 10px',
        borderRadius: '6px',
        display: 'inline-block'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.9rem',
        marginBottom: '10px'
    },
    th: {
        background: '#fef2f2',
        padding: '6px',
        border: '1px solid #fee2e2',
        textAlign: 'left',
        fontWeight: '700',
        color: '#881337',
        fontSize: '0.85rem'
    },
    td: {
        padding: '6px',
        border: '1px solid #fee2e2',
        color: '#4b5563',
        fontSize: '0.85rem'
    }
};

export const chapter5Theory = [
    {
        title: "૧. જોડાક્ષર : વ્યાખ્યા અને વિશિષ્ટ ચિહ્નો",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>✍️ જોડાક્ષર (સંયુક્તાક્ષર)</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        "સ્વરની મદદ વિના વ્યંજન સાથે વ્યંજન જોડાય તેને જોડાક્ષર કહે છે."
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>✨ વિશિષ્ટ લિપિ ચિહ્નો</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                        {[
                            { char: "ક્ષ", form: "ક્ + ષ + અ" },
                            { char: "ત્ર", form: "ત્ + ર્ + અ" },
                            { char: "જ્ઞ", form: "જ્ + ગ્ + અ" } // User specified this form in PDF
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '10px', background: '#fff1f2', borderRadius: '8px', border: '1px solid #fecdd3' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#be123c' }}>{item.char}</div>
                                <div style={{ fontSize: '0.85rem', color: '#881337', fontWeight: '600' }}>{item.form}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ ...styles.card, background: '#fffbeb', borderColor: '#fde68a' }}>
                    <h3 style={{ ...styles.heading, color: '#92400e', fontSize: '1rem' }}>💡 જાણવા જેવું</h3>
                    <p style={{ fontSize: '0.9rem', color: '#b45309', margin: 0 }}>
                        <strong>'ૐ' (ઓમ્)</strong> ને જોડાક્ષર ન કહેવાય પણ <strong>'સંધ્યાક્ષર'</strong> કહેવાય છે, કારણ કે તેમાં બે સ્વરોનું મિલન છે.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: "૨. દેવનાગરી લિપિ અનુસાર જોડાક્ષરો",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={styles.heading}>'દ' અને 'ધ' ના જોડાક્ષરો</h3>

                    <h4 style={styles.subHeading}>૧. 'દ' ના જોડાક્ષર</h4>
                    <table style={styles.table}>
                        <thead><tr><th style={styles.th}>જોડ</th><th style={styles.th}>ઉદાહરણ</th><th style={styles.th}>વિગ્રહ</th></tr></thead>
                        <tbody>
                            {[
                                ["દ+દ=દ્દ", "મુદ્દો", "મ્+ઉ+દ્+દ્+ઓ"],
                                ["દ+ધ=દ્ધ", "શુદ્ધ", "શ્+ઉ+દ્+ધ્+અ"],
                                ["દ+મ=દ્મ", "પદ્મ", "પ્+અ+દ્+મ્+અ"],
                                ["દ+ય=દ્ય", "વિદ્યા", "વ્+ઈ+દ્+ય્+આ"],
                                ["દ+ર=દ્ર", "મુદ્રા", "મ્+ઉ+દ્+ર્+આ"],
                                ["દ+વ=દ્વ", "દ્વિતીય", "દ્+વ્+ઈ..."],
                                ["દ+ઋ=દૃ", "દૃશ્ય", "દ્+ઋ+શ્+ય્+અ"]
                            ].map((row, i) => (
                                <tr key={i}><td style={{ ...styles.td, fontWeight: 'bold' }}>{row[0]}</td><td style={styles.td}>{row[1]}</td><td style={{ ...styles.td, fontSize: '0.8rem' }}>{row[2]}</td></tr>
                            ))}
                        </tbody>
                    </table>

                    <h4 style={styles.subHeading}>૨. 'ધ' ના જોડાક્ષર</h4>
                    <table style={styles.table}>
                        <thead><tr><th style={styles.th}>જોડ</th><th style={styles.th}>ઉદાહરણ</th><th style={styles.th}>વિગ્રહ</th></tr></thead>
                        <tbody>
                            {[
                                ["ધ+ધ=દ્ધ", "યોદ્ધા", "ય્+ઓ+ધ્+ધ્+આ"], // Correction based on common rendering, user text says ddh? No, Dha+dha is usually Ddh? actually in Gujarati Dha+Dha is Ddh but creates potential confusion with D+Dh. Let's stick to user text "ધ+ધ = દ્ધ" (Wait, user pdf says Dha+Dha=Ddh visually?) - Sticky point. User PDF says "ધ + ધ = દ્ધ" which looks like D-Dha. Let's act with caution, displaying what user provided.
                                ["ધ+ય=ધ્ય", "સંધ્યા", "સ+અં+ધ્+ય્+આ"],
                                ["ધ+ર=ધ્ર", "ધ્રુવ", "ધ્+ર્+ઉ+વ્"],
                                ["ધ+વ=ધ્વ", "ધ્વજ", "ધ્+વ્+અ+જ્"],
                                ["ધ+ઋ=ધૃ", "ધૃતિ", "ધ્+ઋ+ત્+ઈ"]
                            ].map((row, i) => (
                                <tr key={i}><td style={{ ...styles.td, fontWeight: 'bold' }}>{row[0]}</td><td style={styles.td}>{row[1]}</td><td style={{ ...styles.td, fontSize: '0.8rem' }}>{row[2]}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>'શ' અને 'હ' ના જોડાક્ષરો</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px' }}>
                        <div style={{ fontSize: '0.9rem' }}><strong>શ:</strong> શ્ર (શ્રવણ), શ્વ (શ્વાસ), શ્ચ (નિશ્ચિત)</div>
                        <div style={{ fontSize: '0.9rem' }}><strong>હ:</strong> હ્મ (બ્રહ્મ), હ્ન (મધ્યાહ્ન), હ્ય (બાહ્ય), હ્ર (હ્રસ્વ), હ્વ (જિહ્વા), હૃ (હૃદય)</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૩. 'ર' ના નિયમો અને અન્ય પ્રકારો",
        content: (
            <div style={{ padding: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ ...styles.card, background: '#f5f3ff', borderColor: '#ddd6fe' }}>
                        <h4 style={{ ...styles.heading, color: '#6d28d9', fontSize: '1rem' }}>રેફ ( ઁ )</h4>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>
                            <strong>'ર' પહેલા આવે:</strong><br />
                            સર્પ (સ્+અ+ર્+પ્+અ)
                        </p>
                    </div>
                    <div style={{ ...styles.card, background: '#ecfdf5', borderColor: '#a7f3d0' }}>
                        <h4 style={{ ...styles.heading, color: '#059669', fontSize: '1rem' }}>ફાળો ( ્ર )</h4>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>
                            <strong>'ર' પછી આવે:</strong><br />
                            ક્રમ (ક્+ર્+અ+મ્)
                        </p>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>📂 જોડાક્ષરના આકાર પ્રકારો</h3>
                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        <table style={styles.table}>
                            <tbody>
                                {[
                                    ["સીધી લીટી", "ગ્ય, ચ્છ, ન્મ"],
                                    ["ઉપર-નીચે", "ડ્ડ, દ્મ, દ્ધ, દ્ર"],
                                    ["સજાતીય", "ક્ક, જ્જ, મ્પ"],
                                    ["બેવડાઈને", "ત્ત, લ્લ, શ્વ, ઠ્ઠ"],
                                    ["મૂળ આકૃતિ", "ક્ત"],
                                    ["ફેરફાર સાથે", "ત્ત, ક્ર, ર્ક, શ્ચ"],
                                    ["સંપૂર્ણ ફેરફાર", "ક્ષ, જ્ઞ"]
                                ].map((row, i) => (
                                    <tr key={i}><td style={{ ...styles.td, fontWeight: '600', width: '40%' }}>{row[0]}</td><td style={styles.td}>{row[1]}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
];
