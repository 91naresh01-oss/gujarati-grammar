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
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Amber/Orange theme for Ch 6
        padding: '15px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '15px',
        boxShadow: '0 4px 15px rgba(217, 119, 6, 0.2)'
    },
    heading: {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#92400e'
    },
    subHeading: {
        fontSize: '0.95rem',
        fontWeight: '700',
        color: '#b45309',
        marginBottom: '5px',
        borderBottom: '1px dashed #fdba74',
        paddingBottom: '3px',
        display: 'inline-block'
    },
    timelineItem: {
        display: 'flex',
        gap: '10px',
        marginBottom: '12px',
        paddingBottom: '12px',
        borderBottom: '1px solid #fff7ed'
    },
    timelineYear: {
        fontWeight: '800',
        color: '#d97706',
        minWidth: '60px',
        fontSize: '0.9rem'
    },
    timelineContent: {
        fontSize: '0.9rem',
        color: '#4b5563'
    },
    sequenceBox: {
        background: '#fffbeb',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #fde68a',
        marginBottom: '10px',
        fontSize: '0.9rem',
        fontWeight: '500',
        color: '#78350f',
        whiteSpace: 'normal',
        lineHeight: '1.5'
    }
};

export const chapter6Theory = [
    {
        title: "૧. શબ્દકોશ : પરિચય અને ઇતિહાસ",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.gradientCard}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '5px' }}>📖 શબ્દકોશ (Dictionary)</h2>
                    <p style={{ fontSize: '0.95rem', opacity: '0.95', margin: 0 }}>
                        "વ્યાકરણની દૃષ્ટિએ શબ્દોના અર્થ દર્શાવતો અને ક્રમાનુસાર ગોઠવાયેલો સંગ્રહ."
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>📜 ઐતિહાસિક સફર</h3>
                    <div>
                        <div style={styles.timelineItem}>
                            <div style={styles.timelineYear}>૧૮૦૮</div>
                            <div style={styles.timelineContent}>
                                <strong>ડ્રમન્ડ (પાદરી):</strong> ૪૬૮ શબ્દો સાથે પ્રથમ પ્રયાસ (ગુજરાતી શબ્દોનું અંગ્રેજી).
                            </div>
                        </div>
                        <div style={styles.timelineItem}>
                            <div style={styles.timelineYear}>૧૮૭૩</div>
                            <div style={styles.timelineContent}>
                                <strong>નર્મકોશ (નર્મદ):</strong> સર્વપ્રથમ ગણનાપાત્ર કોશ. ૧૨ વર્ષની મહેનત. શરૂઆતમાં 'જય જય ગરવી ગુજરાત'.
                            </div>
                        </div>
                        <div style={styles.timelineItem}>
                            <div style={styles.timelineYear}>૧૯૨૮-૫૪</div>
                            <div style={styles.timelineContent}>
                                <strong>ભગવદ્ગોમંડલ:</strong> ગોંડલ મહારાજા ભગવતસિંહજી. ૨૬ વર્ષ, ૯ ભાગ, ૧૭ કિલો. 'જ્ઞાનકોશ' ગણાય.
                            </div>
                        </div>
                        <div style={styles.timelineItem}>
                            <div style={styles.timelineYear}>૧૯૨૯</div>
                            <div style={styles.timelineContent}>
                                <strong>સાર્થ જોડણીકોશ:</strong> ગાંધીજીની પ્રેરણાથી. વિધાન: "હવે પછી કોઇને સ્વેચ્છાએ જોડણી કરવાનો અધિકાર નથી."
                            </div>
                        </div>
                        <div style={{ ...styles.timelineItem, borderBottom: 'none' }}>
                            <div style={styles.timelineYear}>૧૯૮૫+</div>
                            <div style={styles.timelineContent}>
                                <strong>ગુજરાતી વિશ્વકોશ:</strong> ધીરુભાઈ ઠાકર. એકમાત્ર સચિત્ર જ્ઞાનકોશ.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. શબ્દકોશનો ક્રમ અને નિયમો",
        content: (
            <div style={{ padding: '0' }}>
                <div style={styles.card}>
                    <h3 style={styles.heading}>🔤 ગોઠવણીના નિયમો</h3>

                    <div style={{ marginBottom: '10px' }}>
                        <h4 style={styles.subHeading}>૧. સ્વરક્રમ</h4>
                        <div style={styles.sequenceBox}>
                            અ, અં, અઃ, આ, આં, આઃ ... ઔ, ઔં, ઔઃ
                        </div>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <h4 style={styles.subHeading}>૨. વ્યંજન ક્રમ (બારાક્ષરી)</h4>
                        <div style={styles.sequenceBox}>
                            ક, ક્ષ, ખ, ગ, ઘ, ચ, છ, જ, જ્ઞ, ઝ, ટ, ઠ, ડ, ઢ, ણ...<br />
                            <span style={{ fontSize: '0.8rem', color: '#92400e', marginTop: '5px', display: 'block' }}>
                                * ક્રમ: ક, કં, કઃ, કા, કાં... કૌ, ક્ય, ક્ર, ક્લ...
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 style={styles.subHeading}>૩. જોડાક્ષરનું સ્થાન</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            <div style={{ background: '#ecfdf5', padding: '6px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                                <strong>ક્ષ</strong> → 'ક' પછી
                            </div>
                            <div style={{ background: '#ecfdf5', padding: '6px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                                <strong>જ્ઞ</strong> → 'જ' પછી
                            </div>
                            <div style={{ background: '#ecfdf5', padding: '6px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                                <strong>ત્ર</strong> → 'ત' પછી
                            </div>
                            <div style={{ background: '#ecfdf5', padding: '6px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
                                <strong>શ્ર</strong> → 'શ' પછી
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.heading}>📝 ઉદાહરણો (Practice)</h3>
                    <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', margin: 0, color: '#4b5563' }}>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>અ:</strong> અક્લ, અમર, અંબર, આભ, ઋષિ, ઔત્સુક્ય.
                        </li>
                        <li style={{ marginBottom: '5px' }}>
                            <strong>ક:</strong> કમળ, કંઠી, કોમલ, ક્યારી, ક્રમ, ક્લાર્ક, ક્ષણ.
                        </li>
                        <li>
                            <strong>શુભ:</strong> પરીક્ષા, પૂર્ણા, મોરસ, યાચના, વ્યક્તિ, સમીર, સંગત.
                        </li>
                    </ul>
                    <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#ef4444', fontStyle: 'italic' }}>
                        * ઙ, ઞ, ણ, ળ થી શબ્દ શરૂ થતા નથી.
                    </div>
                </div>
            </div>
        )
    }
];
