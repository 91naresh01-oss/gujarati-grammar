import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryText,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter16Theory = [
    {
        title: "૧. અનુગ: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. અનુગ: વ્યાખ્યા અને સમજ" theme="rose" icon="🔗">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>અનુગ એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                <strong>શબ્દ સમજ:</strong> 'અનુ' (પાછળ) + 'ગ' (ગતિ કરનાર/જનાર). શબ્દની પાછળ આવનાર.
                            </TheoryListItem>
                            <TheoryListItem>
                                શબ્દની પાછળ અથવા જોડાઈને આવતા પ્રત્યયને <strong>‘અનુગ’</strong> કહેવાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                અનુગ હંમેશા શબ્દ સાથે <strong>જોડાઈને</strong> જ આવે છે (શબ્દથી અલગ લખાતા નથી).
                            </TheoryListItem>
                            <TheoryListItem>
                                વિભક્તિના 'એકાક્ષરી' પ્રત્યયોને અનુગ કહેવાય છે.
                            </TheoryListItem>
                        </TheoryList>

                        <div style={{ marginTop: '20px', padding: '15px', background: '#fff1f2', borderRadius: '12px', border: '1px solid #fda4af' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#be123c' }}>📌 ૮ મુખ્ય અનુગો:</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {['એ', 'ને', 'થી', 'માં', 'ન', 'ની', 'નું', 'ના'].map((anug, i) => (
                                    <span key={i} style={{
                                        background: 'white',
                                        padding: '5px 15px',
                                        borderRadius: '20px',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                        fontWeight: 'bold',
                                        color: '#be123c'
                                    }}>
                                        {anug}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <HighlightBox type="example">
                            <TheoryHeading color="#9f1239" size="sm">ઉદાહરણો:</TheoryHeading>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0' }}>
                                {[
                                    "લાલાનું કામ બહુ સારું છે.",
                                    "રામના વનવાસ બધાને ઘણું શીખવે છે.",
                                    "યોગિનીથી આજે લાડું બનાવાશે.",
                                    "ગાડીમાં બેગ ન હતી.",
                                    "વડીલનું કહેલું ધ્યાનમાં લેવું જોઇએ.",
                                    "મારાથી આજે હાજરી અપાશે નહીં."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '8px 0', borderBottom: '1px dashed #fda4af', fontSize: '0.95rem' }}>
                                        🔹 {item}
                                    </li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૨. નામયોગી: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૨. નામયોગી: વ્યાખ્યા અને સમજ" theme="indigo" icon="✨">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>નામયોગી એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                નામ કે સર્વનામની સાથે જોડાઈને વિભક્તિ પ્રત્યયની ગરજ ભારે (કામ કરે) તેવા અવ્યયને <strong>‘નામયોગી’</strong> કહેવાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                નામયોગી હંમેશા શબ્દથી <strong>છૂટા</strong> લખાય છે (અનુગથી વિપરીત).
                            </TheoryListItem>
                            <TheoryListItem>
                                વિભક્તિના 'એકાક્ષરી' સિવાયના પ્રત્યયોને નામયોગી તરીકે ઓળખવામાં આવે છે.
                            </TheoryListItem>
                        </TheoryList>

                        <HighlightBox type="note">
                            <strong>યાદ રાખો:</strong> વાક્યમાં એક જ નામયોગી આવી શકે છે, જ્યારે અનુગ એકથી વધુ હોઈ શકે છે.
                        </HighlightBox>

                        <div style={{ marginTop: '20px' }}>
                            <TheoryHeading color="#4338ca" size="sm">મહત્વના નામયોગીઓ:</TheoryHeading>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                                {[
                                    'વડે', 'થકી', 'માટે', 'સારુ', 'કાજે', 'તરફ', 'દ્વારા', 'લીધે',
                                    'વિશે', 'પ્રમાણે', 'સિવાય', 'ઉપર', 'નીચે', 'પાસે', 'સાથે',
                                    'વિના', 'પછી', 'પહેલાં', 'બાદ', 'સુધી', 'દ્વારા', 'મારફત'
                                ].map((item, i) => (
                                    <span key={i} style={{
                                        background: '#e0e7ff',
                                        color: '#3730a3',
                                        padding: '4px 12px',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <HighlightBox type="example">
                            <TheoryHeading color="#4338ca" size="sm">ઉદાહરણો:</TheoryHeading>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0' }}>
                                {[
                                    "એવરેસ્ટ ઉપર હંમેશાં બરફ હોય છે.",
                                    "અમે વિમાન મારફત પરદેશ ગયા.",
                                    "વૃક્ષ પરથી પાંદડા ખર્યા.",
                                    "મારા તરફ નજર કરો.",
                                    "ભગતસિંહે દેશ ખાતર બલિદાન આપ્યું.",
                                    "ભેંસ વૃક્ષ નીચે બેઠી હતી."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '8px 0', borderBottom: '1px dashed #a5b4fc', fontSize: '0.95rem' }}>
                                        🔸 {item}
                                    </li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૩. અનુગ અને નામયોગી વચ્ચે તફાવત",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading color="#0f766e">⚖️ અનુગ vs નામયોગી</TheoryHeading>
                    <div style={{ overflowX: 'auto', marginTop: '15px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1rem' }}>
                            <thead>
                                <tr style={{ background: '#f0fdfa', color: '#115e59' }}>
                                    <th style={{ padding: '12px', border: '1px solid #ccfbf1', width: '50%' }}>અનુગ</th>
                                    <th style={{ padding: '12px', border: '1px solid #ccfbf1', width: '50%' }}>નામયોગી</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>શબ્દની સાથે <strong>જોડાઈને</strong> લખાય છે.</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>શબ્દથી <strong>છૂટા</strong> લખાય છે.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>એકાક્ષરી હોય છે (એ, ને, થી...).</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>અનેક અક્ષરના હોય છે (માટે, વડે...).</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>શબ્દનો ભાગ બની જાય છે.</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>સ્વતંત્ર શબ્દ તરીકે આવે છે.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TheoryCard>
            </div>
        )
    }
];
