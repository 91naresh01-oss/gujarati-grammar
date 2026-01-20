import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryText,
    TheoryTable,
    TheoryTableHeader,
    TheoryTableRow,
    TheoryGrid,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter2Theory = [
    {
        title: "૧. ભાષા : ઉદ્ભવ અને વિકાસ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="🗣️ ભાષા : ઉદ્ભવ અને વિકાસ"
                    description="માનવ વિચારોના સંક્રમણનું શ્રેષ્ઠ માધ્યમ"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>ભાષા એટલે શું?</TheorySubHeading>
                        <TheoryList color="#ffffff">
                            <TheoryListItem>
                                વિચારો અને લાગણીઓના સંક્રમણની માનવીય પદ્ધતિ.
                            </TheoryListItem>
                            <TheoryListItem>
                                ગુજરાતી ભાષા <strong>'ભારતીય આર્ય કુળ'</strong> ની ભાષા છે.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#0f766e">🌏 ઈન્ડો-આર્યન કુટુંબ</TheoryHeading>
                    <TheoryText>ગુજરાતી ભાષા <strong style={{ color: '#0f766e' }}>’ભારતીય આર્ય કુળ’</strong> ની ભાષા છે. તેનો ઉદ્ભવ સંસ્કૃતમાંથી થયો છે.</TheoryText>

                    <HighlightBox type="success" title="વિકાસ યાત્રા (ક્રમ)">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            <span>સંસ્કૃત</span> <span>➡️</span>
                            <span>પ્રાકૃત</span> <span>➡️</span>
                            <span>અપભ્રંશ</span> <span>➡️</span>
                            <span>ગુર્જર અપભ્રંશ</span> <span>➡️</span>
                            <span style={{ color: '#059669', background: '#d1fae5', padding: '2px 8px', borderRadius: '4px' }}>ગુજરાતી</span>
                        </div>
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. શબ્દભંડોળ (તત્સમ અને તદ્ભવ)",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#059669">શબ્દ પ્રકારો</TheoryHeading>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                            <TheorySubHeading color="#065f46" bg="#ecfdf5">૧. તત્સમ (તેના જેવો)</TheorySubHeading>
                            <TheoryText>સંસ્કૃતમાંથી સીધા આવેલા મૂળ રૂપ શબ્દો.</TheoryText>
                            <HighlightBox type="note">
                                દા.ત. હસ્ત, મસ્તક, પદ, અગ્નિ.
                            </HighlightBox>
                        </div>
                        <div>
                            <TheorySubHeading color="#065f46" bg="#ecfdf5">૨. તદ્ભવ (તેમાંથી ઉદ્ભવેલું)</TheorySubHeading>
                            <TheoryText>સંસ્કૃતમાંથી બદલાઈને આવેલા શબ્દો.</TheoryText>
                            <HighlightBox type="note">
                                દા.ત. હાથ, માથું, પગ, આગ.
                            </HighlightBox>
                        </div>
                    </div>

                    <TheorySubHeading>સરખામણી કોષ્ટક</TheorySubHeading>
                    <TheoryTable>
                        <TheoryTableHeader headers={["તત્સમ (સંસ્કૃત)", "તદ્ભવ (ગુજરાતી)"]} />
                        <tbody>
                            {[
                                ["કર્ણ", "કાન"],
                                ["દુગ્ધ", "દૂધ"],
                                ["કર્મ", "કામ"],
                                ["નિદ્રા", "ઊંઘ"],
                                ["સર્પ", "સાપ"]
                            ].map((row, i) => (
                                <TheoryTableRow key={i} cells={row} isEven={i % 2 !== 0} />
                            ))}
                        </tbody>
                    </TheoryTable>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#b91c1c">અન્ય શબ્દ પ્રકારો</TheoryHeading>
                    <TheoryGrid minWidth="200px">
                        {[
                            { title: "દેશ્ય (તળપદા)", ex: "રોટલો, છાશ, ઢેફું, ખોરડું" },
                            { title: "વિદેશી (અંગ્રેજી)", ex: "સ્ટેશન, ટિકિટ, બસ, પેન" },
                            { title: "ફારસી/અરબી", ex: "જમીન, દરિયો, કાગળ, ગુલાબ" },
                            { title: "પોર્ટુગીઝ", ex: "બટાકા, સાબુ, ચાવી" }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#374151', marginBottom: '5px' }}>{item.title}</div>
                                <div style={{ fontSize: '1rem', color: '#6b7280' }}>({item.ex})</div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. લિપિ અને બોલીઓ",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#7c3aed">✍️ લિપિ પરિચય</TheoryHeading>
                    <HighlightBox type="info" title="દેવનાગરી vs ગુજરાતી">
                        ગુજરાતી લિપિ <strong>દેવનાગરી</strong> (હિન્દી/સંસ્કૃત) માંથી ઉતરી આવી છે, પણ આપણે ઉપરની <strong>'શિરોરેખા'</strong> કાઢી નાખી છે.
                    </HighlightBox>
                    <div style={{ fontSize: '1.5rem', textAlign: 'center', margin: '20px 0', letterSpacing: '5px' }}>
                        <span style={{ color: '#9ca3af' }}>क ख ग</span> ➡️ <strong style={{ color: '#7c3aed' }}>ક ખ ગ</strong>
                    </div>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#d97706">🗣️ ગુજરાતની મુખ્ય બોલીઓ</TheoryHeading>
                    <TheoryGrid minWidth="220px">
                        {[
                            { name: "પટ્ટણી", area: "ઉત્તર ગુજરાત", detail: "આ, ઈ ના ઉચ્ચાર લાંબા (પાટણ, સિદ્ધપુર)" },
                            { name: "ચરોતરી", area: "મધ્ય ગુજરાત", detail: "શ/સ નો ભેદ નહિ, 'ચ'-'છ' નરમ (ખેડા, આણંદ)" },
                            { name: "સુરતી", area: "દક્ષિણ ગુજરાત", detail: "હ-કાર નો લોપ, લહેકો (સુરત, વલસાડ)" },
                            { name: "સૌરાષ્ટ્રી", area: "સૌરાષ્ટ્ર/કાઠિયાવાડ", detail: "ખરબચડી પણ મધુર, સ્પષ્ટ ઉચ્ચાર (રાજકોટ, ભાવનગર)" }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fffbeb', padding: '15px', borderRadius: '10px', border: '1px solid #fehm74' }}>
                                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#92400e' }}>{item.name}</div>
                                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#b45309', marginBottom: '4px' }}>📍 {item.area}</div>
                                <div style={{ fontSize: '1rem', color: '#78350f' }}>{item.detail}</div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    }
];
