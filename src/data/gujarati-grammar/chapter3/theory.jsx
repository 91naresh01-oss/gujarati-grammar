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
        background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)', // Purple theme for Ch 3
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)'
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
        fontSize: '0.85rem' // Slightly smaller for dense tables
    },
    th: {
        background: '#f3f4f6',
        padding: '6px',
        border: '1px solid #e5e7eb',
        textAlign: 'center',
        fontWeight: '700',
        color: '#374151'
    },
    td: {
        padding: '6px',
        border: '1px solid #e5e7eb',
        textAlign: 'center',
        color: '#4b5563'
    },
    tag: {
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: '600',
        marginRight: '5px',
        marginBottom: '5px'
    }
};

export const chapter3Theory = [
    {
        title: "૧. ધ્વનિ અને સ્વર પરિચય",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>🔊 ધ્વનિ એટલે શું?</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        ભાષાનો નાનામાં નાનો એકમ. ઉચ્ચારણ પ્રક્રિયામાં ફેફસાંમાંથી આવતી હવા નાદતંત્રીને કંપાવે છે.
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#7c3aed' }}>🎵 સ્વર (Vowels)</h3>
                    <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '10px' }}>
                        જેનો ઉચ્ચાર અન્ય ધ્વનિની મદદ વિના થાય. હવા અવરોધાયા વિના બહાર નીકળે.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ background: '#f5f3ff', padding: '10px', borderRadius: '8px' }}>
                            <div style={{ fontWeight: '700', color: '#6d28d9', fontSize: '0.9rem' }}>સંખ્યા</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800' }}>૧૧ (મૂળ) / ૮ (માન્ય)</div>
                        </div>
                        <div style={{ background: '#f5f3ff', padding: '10px', borderRadius: '8px' }}>
                            <div style={{ fontWeight: '700', color: '#6d28d9', fontSize: '0.9rem' }}>દીર્ઘ સ્વર (૭)</div>
                            <div style={{ fontSize: '0.9rem' }}>આ, ઈ, ઊ, એ, ઐ, ઓ, ઔ</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <h4 style={styles.subHeading}>🔄 સજાતીય vs વિજાતીય</h4>
                        <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '3px' }}>
                                <span>અ, આ</span> <span style={{ color: '#059669' }}>સજાતીય</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '3px' }}>
                                <span>અ, આ ↔ ઈ, ઉ</span> <span style={{ color: '#dc2626' }}>વિજાતીય</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>📢 સ્વરોનું ઉચ્ચારણ સ્થાન</h3>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>સ્થાન</th>
                                <th style={styles.th}>સ્વર</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["કંઠ્ય", "અ, આ"],
                                ["તાલવ્ય", "ઇ, ઈ"],
                                ["ઓષ્ઠય", "ઉ, ઊ"],
                                ["મૂર્ધન્ય", "ઋ"],
                                ["કંઠ્યતાલવ્ય", "એ, ઐ"],
                                ["કંઠ્યૌષ્ઠય", "ઓ, ઔ"]
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td style={{ ...styles.td, fontWeight: '600' }}>{row[0]}</td>
                                    <td style={styles.td}>{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ ...styles.card, background: '#fffbeb', borderColor: '#fde68a' }}>
                    <h3 style={{ ...styles.heading, color: '#92400e', fontSize: '1rem' }}>👄 સંવૃત અને વિવૃત</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem' }}>
                        <div>
                            <strong>સંવૃત (ઓછું અંતર):</strong><br />એ, ઓ (દા.ત. ઓટલો)
                        </div>
                        <div>
                            <strong>વિવૃત (વધુ અંતર):</strong><br />ઍ, ઑ (દા.ત. ઑફિસ)
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. વ્યંજન પરિચય (Consonants)",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={{ ...styles.heading, color: '#0369a1' }}>વ્યંજન (૩૪)</h3>
                    <p style={{ fontSize: '0.9rem', margin: 0, marginBottom: '10px' }}>
                        સ્વરોની મદદથી બોલાય. હવા અવરોધાય. (ઙ, ઞ, ણ, ળ થી શબ્દ શરૂ થતા નથી)
                    </p>

                    <h4 style={{ ...styles.subHeading, textAlign: 'center', background: '#e0f2fe', padding: '5px', borderRadius: '4px' }}>વર્ગીય વ્યંજનો (સ્પર્શ) - ૨૫</h4>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ ...styles.table, minWidth: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>વર્ગ</th>
                                    <th style={styles.th}>અઘોષ<br /><span style={{ fontSize: '0.7rem' }}>અલ્પ</span></th>
                                    <th style={styles.th}>અઘોષ<br /><span style={{ fontSize: '0.7rem' }}>મહા</span></th>
                                    <th style={styles.th}>ઘોષ<br /><span style={{ fontSize: '0.7rem' }}>અલ્પ</span></th>
                                    <th style={styles.th}>ઘોષ<br /><span style={{ fontSize: '0.7rem' }}>મહા</span></th>
                                    <th style={styles.th}>અનુનાસિક</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={styles.td}><b>કંઠ્ય</b></td> <td>ક</td> <td>ખ</td> <td>ગ</td> <td>ઘ</td> <td>ઙ</td></tr>
                                <tr><td style={styles.td}><b>તાલવ્ય</b></td> <td>ચ</td> <td>છ</td> <td>જ</td> <td>ઝ</td> <td>ઞ</td></tr>
                                <tr><td style={styles.td}><b>મૂર્ધન્ય</b></td> <td>ટ</td> <td>ઠ</td> <td>ડ</td> <td>ઢ</td> <td>ણ</td></tr>
                                <tr><td style={styles.td}><b>દંત્ય</b></td> <td>ત</td> <td>થ</td> <td>દ</td> <td>ધ</td> <td>ન</td></tr>
                                <tr><td style={styles.td}><b>ઓષ્ઠય</b></td> <td>પ</td> <td>ફ</td> <td>બ</td> <td>ભ</td> <td>મ</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={styles.card}>
                    <h4 style={styles.subHeading}>અવર્ગીય વ્યંજનો (૯)</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                        {[
                            { type: "અર્ધસ્વર", val: "ય, વ" },
                            { type: "સંઘર્ષી/ઉષ્માક્ષર", val: "શ, ષ, સ, હ" },
                            { type: "પ્રકંપી", val: "ર" },
                            { type: "પાર્શ્વિક", val: "લ" },
                            { type: "થડકારવાળો", val: "ળ" }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#f9fafb', padding: '8px', borderRadius: '6px', border: '1px solid #f3f4f6' }}>
                                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.type}</div>
                                <div style={{ fontWeight: '700', color: '#1f2937' }}>{item.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૩. વિશેષ સમજ અને અક્ષર",
        content: (
            <div style={{ padding: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={styles.card}>
                        <h3 style={{ ...styles.heading, fontSize: '1rem', color: '#be123c' }}>🗣️ હવા (પ્રાણ)</h3>
                        <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.85rem' }}>
                            <li style={{ marginBottom: '5px' }}><strong>અલ્પપ્રાણ:</strong> ઓછી હવા (ક, ગ, ચ...)</li>
                            <li><strong>મહાપ્રાણ:</strong> વધુ હવા (ખ, ઘ, છ...)</li>
                        </ul>
                    </div>
                    <div style={styles.card}>
                        <h3 style={{ ...styles.heading, fontSize: '1rem', color: '#b45309' }}>🔔 નાદ (ઘોષ)</h3>
                        <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '0.85rem' }}>
                            <li style={{ marginBottom: '5px' }}><strong>અઘોષ:</strong> કઠોર, નાદ વિના (ક, ખ...)</li>
                            <li><strong>ઘોષ:</strong> કોમળ, નાદ સાથે (ગ, ઘ...)</li>
                        </ul>
                    </div>
                </div>

                <div style={{ ...styles.card, marginBottom: '0' }}>
                    <h3 style={{ ...styles.heading, marginBottom: '10px' }}>📝 વ્યાખ્યાઓ</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                        <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '6px' }}>
                            <strong style={{ color: '#1d4ed8' }}>વર્ણ (ખોડો):</strong> સ્વર વિનાનો એકલો વ્યંજન (ક્, ખ્)
                        </div>
                        <div style={{ background: '#fdf2f8', padding: '8px', borderRadius: '6px' }}>
                            <strong style={{ color: '#be185d' }}>અક્ષર:</strong> સ્વર ભળેલો વ્યંજન (ક્ + અ = ક)
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '8px', borderRadius: '6px' }}>
                            <strong style={{ color: '#15803d' }}>સધ્યક્ષર:</strong> બે સ્વરનું મિશ્રણ (એ, ઐ, ઓ, ઔ)
                        </div>
                        <div style={{ background: '#fefce8', padding: '8px', borderRadius: '6px' }}>
                            <strong style={{ color: '#a16207' }}>પાર્શ્વિક:</strong> જીભની બંને બાજુથી હવા નીકળે (લ, ળ)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];
