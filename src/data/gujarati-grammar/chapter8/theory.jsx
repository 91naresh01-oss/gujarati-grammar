import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheoryText,
    TheoryGrid
} from '../../../components/TheoryComponents';

export const chapter8Theory = [
    {
        title: "૧. સંજ્ઞા : વ્યાખ્યા અને વિશેષતાઓ",
        content: (
            <div>
                <GradientCard
                    heading="🏷️ સંજ્ઞા (Noun)"
                    theme="purple"
                    description="કોઈ પણ વ્યક્તિ, વસ્તુ, સ્થળ કે ખ્યાલનો નિર્દેશ કરતા શબ્દને સંજ્ઞા કહે છે."
                />

                <TheoryCard>
                    <TheoryHeading color="#5b21b6">✨ મુખ્ય વિશેષતાઓ</TheoryHeading>
                    <TheoryGrid minWidth="200px">
                        <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                            <strong style={{ color: '#166534', fontSize: '1.1rem' }}>૧. વિકારી સંજ્ઞા</strong>
                            <p style={{ fontSize: '1.05rem', margin: '8px 0 0', color: '#1f2937', lineHeight: '1.5' }}>
                                લિંગ/વચન મુજબ બદલાય.<br />
                                <em style={{ color: '#166534' }}>દા.ત. વાંદરો, વાંદરી, વાંદરું.</em>
                            </p>
                        </div>
                        <div style={{ background: '#fff7ed', padding: '15px', borderRadius: '12px', border: '1px solid #fed7aa' }}>
                            <strong style={{ color: '#9a3412', fontSize: '1.1rem' }}>૨. અવિકારી સંજ્ઞા</strong>
                            <p style={{ fontSize: '1.05rem', margin: '8px 0 0', color: '#1f2937', lineHeight: '1.5' }}>
                                યથાવત્ રહે, બદલાય નહીં.<br />
                                <em style={{ color: '#9a3412' }}>દા.ત. રાજા, ખેતર, નદી.</em>
                            </p>
                        </div>
                        <div style={{ background: '#eff6ff', padding: '15px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                            <strong style={{ color: '#1e40af', fontSize: '1.1rem' }}>૩. મૂર્ત સંજ્ઞા</strong>
                            <p style={{ fontSize: '1.05rem', margin: '8px 0 0', color: '#1f2937', lineHeight: '1.5' }}>
                                પાંચ ઇન્દ્રિયોથી અનુભવાય.<br />
                                <em style={{ color: '#1e40af' }}>દા.ત. અવાજ, જલેબી, વાસ.</em>
                            </p>
                        </div>
                        <div style={{ background: '#faf5ff', padding: '15px', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
                            <strong style={{ color: '#6b21a8', fontSize: '1.1rem' }}>૪. અમૂર્ત સંજ્ઞા</strong>
                            <p style={{ fontSize: '1.05rem', margin: '8px 0 0', color: '#1f2937', lineHeight: '1.5' }}>
                                માત્ર તર્ક કે બુદ્ધિથી અનુભવાય.<br />
                                <em style={{ color: '#6b21a8' }}>દા.ત. ક્રોધ, દુઃખ, વિચાર.</em>
                            </p>
                        </div>
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. સંજ્ઞાના પ્રકારો (૬ પ્રકાર)",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#5b21b6">📂 સંજ્ઞા વર્ગીકરણ</TheoryHeading>

                    <TheoryGrid minWidth="280px">
                        {[
                            { name: "વ્યક્તિવાચક", desc: "ચોક્કસ વ્યક્તિ કે પદાર્થ સૂચવે.", ex: "હિમાલય, ગાંધીનગર, ગિરનાર, ગંગા." },
                            { name: "જાતિવાચક", desc: "આખા વર્ગ/સમૂહને લાગુ પડે.", ex: "પર્વત, પુસ્તક, નદી, વૃક્ષ, સ્ત્રી." },
                            { name: "સમૂહવાચક", desc: "સમૂહનો નિર્દેશ કરે (એકવચનમાં).", ex: "લશ્કર, ટોLUM, સભા, ઢગલો, ઝૂમખું." },
                            { name: "દ્રવ્યવાચક", desc: "ગણી ન શકાય તેવા પદાર્થો.", ex: "પાણી, ઘી, સોનું, લોઢું, માટી, તેલ." },
                            { name: "ભાવવાચક", desc: "માત્ર અનુભવી શકાય તેવા ભાવ.", ex: "પ્રેમ, ક્રોધ, સચ્ચાઈ, ઠંडી, ભલાઈ." },
                            { name: "ક્રિયાવાચક", desc: "ક્રિયા દર્શાવતી સંજ્ઞા.", ex: "દોડ, રમત, લેખન, દર્શન, ચિંતન." }
                        ].map((item, i) => (
                            <div key={i} style={{ border: '1px solid #ddd6fe', background: '#f5f3ff', borderRadius: '12px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#6d28d9' }}>૧. {item.name}</div>
                                <div style={{ fontSize: '1.1rem', color: '#374151' }}>{item.desc}</div>
                                <div style={{ fontSize: '1.05rem', color: '#1f2937', background: '#fff', padding: '10px', borderRadius: '8px', fontWeight: '500' }}>
                                    <em>દા.ત. {item.ex}</em>
                                </div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    }
];
