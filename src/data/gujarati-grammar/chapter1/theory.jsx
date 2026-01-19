import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheoryText,
    TheoryGrid,
    HighlightBox
} from '../../../components/TheoryComponents';

export const chapter1Theory = [
    {
        title: "૧. વ્યાકરણ : અર્થ અને વ્યાખ્યા",
        content: (
            <div>
                <GradientCard
                    heading="વ્યાકરણ એટલે શું?"
                    theme="blue"
                >
                    <div style={{ marginTop: '10px', fontSize: '1.2rem', opacity: '0.9' }}>
                        અર્થ: <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '6px', fontWeight: '700' }}>'સ્પષ્ટીકરણ'</span>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#1e3a8a">📜 વ્યાખ્યા</TheoryHeading>
                    <HighlightBox type="info">
                        "જે શાસ્ત્રમાં શબ્દના પ્રકૃતિને પ્રત્યય જુદા પાડી તેના અર્થ દર્શાવ્યા હોય, અને શબ્દોના શુદ્ધ રૂપ તથા વાક્યમાં તેના સંબંધનું વિવેચન હોય, તેને <strong>'વ્યાકરણ'</strong> કહે છે."
                    </HighlightBox>
                    <div style={{ marginTop: '12px', fontSize: '1.1rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: '600' }}>🏷️ અન્ય નામ:</span> <span style={{ color: '#1e3a8a', fontWeight: '700' }}>'શબ્દાનુશાસન'</span>
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. વેદના અંગ તરીકે વ્યાકરણ",
        content: (
            <div>
                <TheoryCard>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <TheoryHeading color="#0f172a">🕉️ વેદના ૬ અંગો</TheoryHeading>
                        <span style={{ fontSize: '1rem', color: '#ef4444', fontWeight: '700', background: '#fef2f2', padding: '5px 10px', borderRadius: '6px' }}>મુખ્ય: વ્યાકરણ</span>
                    </div>

                    <TheoryGrid minWidth="140px">
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
                                padding: '12px',
                                borderRadius: '10px',
                                border: item.active ? '2px solid #3b82f6' : '1px solid #f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1.1rem',
                                color: item.active ? '#1d4ed8' : '#334155',
                                fontWeight: item.active ? '700' : '500'
                            }}>
                                <span>{item.icon}</span>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. વ્યાકરણનું પ્રયોજન અને કાર્ય",
        content: (
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#047857">🛡️ કાર્ય</TheoryHeading>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {["ભાષા નિયમન", "વિકાર રોકવો", "શુદ્ધ શબ્દ જ્ઞાન", "શુદ્ધ રૂપનો તર્ક"].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.15rem', color: '#374151', fontWeight: '500' }}>
                                    <span style={{ color: '#10b981' }}>●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </TheoryCard>

                    <TheoryCard style={{ background: '#fffafa', borderColor: '#fee2e2' }}>
                        <TheoryHeading color="#b91c1c">🎯 ૪ પ્રયોજનો (કાત્યાયન)</TheoryHeading>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {["૧. રક્ષા (ભાષા રક્ષણ)", "૨. ઊહ (તર્ક)", "૩. આગમ (નિઃશંકતા)", "૪. લઘુ (સંક્ષેપ)"].map((item, i) => (
                                <div key={i} style={{ fontSize: '1.15rem', color: '#991b1b', fontWeight: '600' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </TheoryCard>
                </div>

                <HighlightBox type="note">
                    <div style={{ textAlign: 'center', fontStyle: 'italic', color: '#0369a1', fontWeight: '500' }}>
                        "વ્યાકરણ અશુદ્ધતા દૂર કરી શુદ્ધતા આપે છે, જેમ ચારણીથી લોટ ચળાય છે."
                    </div>
                </HighlightBox>
            </div>
        )
    },
    {
        title: "૪. ઉદાહરણો અને મહત્ત્વ",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#4f46e5">📝 શુદ્ધિ ઉદાહરણો</TheoryHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
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
                                padding: '12px 18px',
                                borderRadius: '10px',
                                borderLeft: '5px solid #6366f1'
                            }}>
                                <span style={{ color: '#ef4444', textDecoration: 'line-through', fontSize: '1.1rem' }}>{item.wrong}</span>
                                <span style={{ color: '#10b981', fontWeight: '800', fontSize: '1.2rem' }}>{item.right}</span>
                            </div>
                        ))}
                    </div>
                </TheoryCard>

                <GradientCard theme="indigo" heading="🎓 સર્વ વિદ્યાની વિદ્યા">
                    <p style={{ fontSize: '1.2rem', margin: 0, opacity: '0.95', lineHeight: '1.6', marginTop: '10px' }}>
                        "ભાષા એ તમામ જ્ઞાનનું માધ્યમ છે, અને વ્યાકરણ ભાષાને શુદ્ધ રાખે છે."
                    </p>
                </GradientCard>
            </div>
        )
    }
];
