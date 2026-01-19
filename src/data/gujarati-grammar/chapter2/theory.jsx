import React from 'react';

// Common compact styles
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
        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', // Green theme for Ch 2
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)'
    },
    heading: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#1f2937'
    },
    subHeading: {
        fontSize: '0.95rem',
        fontWeight: '700',
        color: '#4b5563',
        marginBottom: '5px'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.9rem'
    },
    th: {
        background: '#f3f4f6',
        padding: '8px',
        border: '1px solid #e5e7eb',
        textAlign: 'left',
        fontWeight: '600'
    },
    td: {
        padding: '8px',
        border: '1px solid #e5e7eb'
    }
};

export const chapter2Theory = [
    {
        title: "૧. ભાષા : ઉદ્ભવ અને વિકાસ",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '5px' }}>🗣️ ભાષા એટલે શું?</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        "વિચારો અને લાગણીઓના સંક્રમણની માનવીય પદ્ધતિ."
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#047857' }}>📜 વ્યાખ્યાઓ</h3>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <div style={{ background: '#f0fdfa', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #14b8a6' }}>
                            <div style={{ fontWeight: '700', color: '#115e59', fontSize: '0.9rem' }}>જે.બી. કેરોલ:</div>
                            <div style={{ fontSize: '0.9rem', color: '#134e4a' }}>"ભાષા ધ્વનિઓ અને ધ્વનિશ્રેણીઓની વ્યવસ્થા છે, જે સંદેશા-વ્યવહારમાં વપરાય છે."</div>
                        </div>
                        <div style={{ background: '#ecfdf5', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                            <div style={{ fontWeight: '700', color: '#064e3b', fontSize: '0.9rem' }}>સેપિર:</div>
                            <div style={{ fontSize: '0.9rem', color: '#065f46' }}>"વિચારો, લાગણીઓ સંક્રમણ કરવાની કેવળ માનવીય પદ્ધતિ."</div>
                        </div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#b91c1c' }}>📈 ગુજરાતી ભાષાનો વિકાસ</h3>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px', fontSize: '0.9rem', background: '#fff1f2', padding: '10px', borderRadius: '8px' }}>
                        <span>આર્યભાષા (સંસ્કૃત)</span> <span>→</span>
                        <span>પ્રાકૃત</span> <span>→</span>
                        <span>અપભ્રંશ</span> <span>→</span>
                        <span>ગુર્જર અપભ્રંશ</span> <span>→</span>
                        <span style={{ fontWeight: 'bold', color: '#be123c' }}>ગુજરાતી</span>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <h4 style={styles.subHeading}>ઐતિહાસિક ઉલ્લેખો (કોણે શું કહ્યું?)</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                            {[
                                { name: "ભાલણ", text: "અપભ્રંશ / ગુર્જરભાષા" },
                                { name: "પદ્મનાભ/અખો", text: "પ્રાકૃત" },
                                { name: "પ્રેમાનંદ", text: "‘ગુજરાતી’ (સૌપ્રથમ)", highlight: true },
                                { name: "ઉમાશંકર", text: "મારું ગુર્જર" }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: item.highlight ? '#fef3c7' : '#f8fafc',
                                    border: item.highlight ? '1px solid #fcd34d' : '1px solid #e2e8f0',
                                    padding: '8px',
                                    borderRadius: '6px'
                                }}>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#374151' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. શબ્દભંડોળ (Vocabulary)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={{ ...styles.card, background: '#f0f9ff', borderColor: '#bae6fd' }}>
                    <h3 style={{ ...styles.heading, color: '#0369a1' }}>શબ્દ પ્રકારો</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem' }}>
                        <div><strong>૧. તત્સમ:</strong> સંસ્કૃત જેવા જ (Ex: અગ્નિ, પુષ્પ)</div>
                        <div><strong>૨. તદ્ભવ:</strong> ફેરફાર થયેલા (Ex: આગ, ફૂલ)</div>
                        <div><strong>૩. દેશ્ય:</strong> તળપદા/મૂળ અજાણ્યા (Ex: ઢેકું, ગોબરું)</div>
                        <div><strong>૪. વિદેશી:</strong> અન્ય ભાષાના (Ex: ડૉક્ટર, સાબુ)</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, marginBottom: '10px' }}>🔄 તત્સમ - તદ્ભવ જોડીઓ</h3>
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>તત્સમ (મૂળ)</th>
                                    <th style={{ ...styles.th, color: '#059669' }}>તદ્ભવ (ફરલો)</th>
                                    <th style={styles.th}>તત્સમ (મૂળ)</th>
                                    <th style={{ ...styles.th, color: '#059669' }}>તદ્ભવ (ફરલો)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["કાર્ય", "કાજ", "આજ્ઞા", "આણ"],
                                    ["ધૈર્ય", "ધીરજ", "શુષ્ક", "સૂકું"],
                                    ["અગ્નિ", "આગ", "ખાદ્ય", "ખાજ"],
                                    ["પુસ્તક", "પોથી", "શૂન્ય", "સૂનું"],
                                    ["અદ્ય", "આજ", "ગ્રંથિ", "ગાંઠ"],
                                    ["રજનિ", "રેન", "સંગ્રહ", "સંઘરો"],
                                    ["અધીન", "આધીન", "છિદ્ર", "છેદ"],
                                    ["લક્ષણ", "લખણ", "હસ્ત", "હાથ"],
                                    ["અનુકૂલ", "અનૂકુલ", "તંતુ", "તાંતણો"],
                                    ["વર્ષા", "વરસાદ", "હૃદય", "હૈયુ"],
                                    ["કર્મ", "કામ", "અપયશ", "અપજશ"],
                                    ["તીક્ષ્ણ", "તીખું", "શિથિલ", "ઢીલું"]
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                                        <td style={styles.td}>{row[0]}</td>
                                        <td style={{ ...styles.td, fontWeight: '500' }}>{row[1]}</td>
                                        <td style={styles.td}>{row[2]}</td>
                                        <td style={{ ...styles.td, fontWeight: '500' }}>{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, marginBottom: '10px' }}>🌍 વિદેશી શબ્દો</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                        {[
                            { lang: "અરબી", words: "અક્કલ, અખબાર, અદાલત, અમીર, ઈનામ, કિસ્સો, ગરીબ, જવાબ, દુકાન" },
                            { lang: "ફારસી", words: "અંદાજ, આબરૂ, બિમાર, ગુલાબ, બગીચો, કારકુન, શરમ, સરકાર, હપતો" },
                            { lang: "પોર્ટુગીઝ", words: "બટાટા, તમાકુ, સાબુ, ચાવી, મિસ્ત્રી, પાઉં, નાતાલ, મોસંબી" },
                            { lang: "અંગ્રેજી", words: "ટિકિટ, સ્ટેશન, બસ, પેન, ડૉક્ટર, હોસ્પિટલ, કોલેજ, બેંક" }
                        ].map((item, i) => (
                            <div key={i} style={{ fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '5px' }}>
                                <span style={{ fontWeight: '700', color: '#4b5563', width: '70px', display: 'inline-block' }}>{item.lang}:</span>
                                <span style={{ color: '#6b7280' }}>{item.words}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૩. લિપિ અને બોલી (Script & Dialect)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={{ ...styles.heading }}>✍️ લિપિ (Script)</h3>
                    <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.9rem', color: '#374151' }}>
                        <li style={{ marginBottom: '5px' }}>ભારતની મૂળ લિપિ: <strong>બ્રાહ્મી</strong></li>
                        <li style={{ marginBottom: '5px' }}>ગુજરાતી લિપિ <strong>દેવનાગરી</strong>ની ઉપપેદાશ છે.</li>
                        <li style={{ marginBottom: '5px' }}>શિરોરેખા હોતી નથી. (ડાબી થી જમણી લખાય)</li>
                        <li>પ્રથમ પુસ્તક: <strong>'હોપ વાચનમાળા'</strong> (૧૮૬૦)</li>
                    </ul>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading }}>🗺️ બોલી (Dialect) - સરખામણી</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ ...styles.table, minWidth: '400px' }}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>ઉ.ગુ. (પટ્ટણી)</th>
                                    <th style={styles.th}>મ.ગુ. (ચરોતરી)</th>
                                    <th style={styles.th}>દ.ગુ. (સુરતી)</th>
                                    <th style={styles.th}>સૌરાષ્ટ્રી</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["આવશે", "આવિશ", "આવહે", "આવશે"],
                                    ["કરે છે", "કરિ છિ", "કરે છ", "કરે સે"],
                                    ["પાણી", "પોંણી", "પાની", "પાણી"],
                                    ["મારું", "મારુ", "મ્હજુ", "મ્હારુ"],
                                    ["છોકરો", "છોરો", "પોયરો", "ગગો"],
                                    ["ક્યાં", "ચ્યાં", "કાં", "ક્યાં"],
                                    ["કેમ છો", "ચ્યમ સો", "કેમ છ", "કેમ સે"],
                                    ["પવન", "વાયરો", "પવન", "વા્યરો"]
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                                        <td style={styles.td}>{row[0]}</td>
                                        <td style={styles.td}>{row[1]}</td>
                                        <td style={styles.td}>{row[2]}</td>
                                        <td style={styles.td}>{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '5px', fontStyle: 'italic' }}>
                            * ઉપરનું કોષ્ટક સામાન્ય ઉચ્ચારણ ભેદ દર્શાવે છે.
                        </div>
                    </div>
                </div>

                <div style={{ ...styles.card, background: '#fefce8', borderColor: '#fef08a' }}>
                    <h3 style={{ ...styles.heading, color: '#854d0e', fontSize: '1rem' }}>ગાંધીજી અને ભાષા</h3>
                    <p style={{ fontSize: '0.9rem', color: '#a16207', fontStyle: 'italic', margin: 0 }}>
                        “અંગ્રેજી ભાષાના શબ્દોની જોડણી ખોટી કરતાં આપણને શરમ લાગે છે. તેના કરતાં માતૃભાષાની જોડણીનો વધ કરતાં આપણને વધારે શરમ લાગવી જોઈએ.”
                    </p>
                </div>
            </div>
        )
    }
];
