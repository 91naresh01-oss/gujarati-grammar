import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryTable,
    TheoryTableHeader,
    TheoryTableRow,
    TheoryGrid,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter5Theory = [
    {
        title: "૧. જોડાક્ષર : વ્યાખ્યા અને વિશિષ્ટ ચિહ્નો",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="✍️ જોડાક્ષર (સંયુક્તાક્ષર)"
                    description="બે વ્યંજનોનું મિલન"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>જોડાક્ષર એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                સ્વરની મદદ વિના વ્યંજન સાથે વ્યંજન જોડાય તેને <strong>જોડાક્ષર</strong> કહે છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                ગુજરાતીમાં અનેક વિશિષ્ટ લિપિ ચિહ્નો જોડાક્ષર દર્શાવે છે.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#881337">✨ વિશિષ્ટ લિપિ ચિહ્નો</TheoryHeading>
                    <TheoryGrid minWidth="120px">
                        {[
                            { char: "ક્ષ", form: "ક્ + ષ + અ" },
                            { char: "ત્ર", form: "ત્ + ર્ + અ" },
                            { char: "જ્ઞ", form: "જ્ + ગ્ + અ" }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '18px', background: '#fff1f2', borderRadius: '12px', border: '1px solid #fecdd3' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#be123c' }}>{item.char}</div>
                                <div style={{ fontSize: '1.05rem', color: '#881337', fontWeight: '700', marginTop: '8px' }}>{item.form}</div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>

                <HighlightBox type="warn" title="💡 જાણવા જેવું">
                    <strong>'ૐ' (ઓમ્)</strong> ને જોડાક્ષર ન કહેવાય પણ <strong>'સંધ્યાક્ષર'</strong> કહેવાય છે, કારણ કે તેમાં બે સ્વરોનું મિલન છે.
                </HighlightBox>
            </div>
        )
    },
    {
        title: "૨. દેવનાગરી લિપિ અનુસાર જોડાક્ષરો",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#881337">'દ' અને 'ધ' ના જોડાક્ષરો</TheoryHeading>

                    <TheorySubHeading color="#9f1239" bg="#fff1f2">૧. 'દ' ના જોડાક્ષર</TheorySubHeading>
                    <TheoryTable>
                        <TheoryTableHeader theme="amber" headers={["જોડ", "ઉદાહરણ", "વિગ્રહ"]} />
                        <tbody>
                            {[
                                ["દ+દ=દ્દ", "મુદ્દો", "મ્+ઉ+દ્+દ્+ઓ"],
                                ["દ+ધ=દ્ધ", "શુદ્ધ", "શ્+ઉ+દ્+ધ્+અ"],
                                ["દ+મ=દ્મ", "પદ્મ", "પ્+અ+દ્+મ્+અ"],
                                ["દ+ય=દ્ય", "વિદ્યા", "વ્+ઈ+દ્+ય્+આ"],
                                ["દ+ર=દ્ર", "મુદ્રા", "મ્+ઉ+દ્+ર્+આ"]
                            ].map((row, i) => (
                                <TheoryTableRow key={i} cells={row} isEven={i % 2 !== 0} />
                            ))}
                        </tbody>
                    </TheoryTable>

                    <TheorySubHeading color="#9f1239" bg="#fff1f2">૨. 'ધ' ના જોડાક્ષર</TheorySubHeading>
                    <TheoryTable>
                        <TheoryTableHeader theme="amber" headers={["જોડ", "ઉદાહરણ", "વિગ્રહ"]} />
                        <tbody>
                            {[
                                ["ધ+ય=ધ્ય", "સંધ્યા", "સ+અં+ધ્+ય્+આ"],
                                ["ધ+ર=ધ્ર", "ધ્રુવ", "ધ્+ર્+ઉ+વ્"],
                                ["ધ+વ=ધ્વ", "ધ્વજ", "ધ્+વ્+અ+જ્"]
                            ].map((row, i) => (
                                <TheoryTableRow key={i} cells={row} isEven={i % 2 !== 0} />
                            ))}
                        </tbody>
                    </TheoryTable>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#881337">'શ' અને 'હ' ના જોડાક્ષરો</TheoryHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                        <div style={{ fontSize: '1.15rem', background: '#f8fafc', padding: '12px 15px', borderRadius: '8px', borderLeft: '5px solid #be123c' }}>
                            <strong style={{ color: '#be123c' }}>શ:</strong> શ્ર (શ્રવણ), શ્વ (શ્વાસ), શ્ચ (નિશ્ચિત)
                        </div>
                        <div style={{ fontSize: '1.15rem', background: '#f8fafc', padding: '12px 15px', borderRadius: '8px', borderLeft: '5px solid #be123c' }}>
                            <strong style={{ color: '#be123c' }}>હ:</strong> હ્મ (બ્રહ્મ), હ્ન (મધ્યાહ્ન), હ્ય (બાહ્ય), હ્ર (હ્રસ્વ), હ્વ (જિહ્વા), હૃ (હૃદય)
                        </div>
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. 'ર' ના નિયમો અને અન્ય પ્રકારો",
        content: (
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <TheoryCard style={{ background: '#f5f3ff', borderColor: '#ddd6fe' }}>
                        <TheoryHeading color="#6d28d9">રેફ ( ़ )</TheoryHeading>
                        <p style={{ fontSize: '1.1rem', margin: 0, fontWeight: '500', lineHeight: '1.6' }}>
                            <strong style={{ color: '#6d28d9' }}>'ર' પહેલા આવે:</strong><br />
                            સર્પ (સ્+અ+ર્+પ્+અ)
                        </p>
                    </TheoryCard>
                    <TheoryCard style={{ background: '#ecfdf5', borderColor: '#a7f3d0' }}>
                        <TheoryHeading color="#059669">ફાળો ( ્ર )</TheoryHeading>
                        <p style={{ fontSize: '1.1rem', margin: 0, fontWeight: '500', lineHeight: '1.6' }}>
                            <strong style={{ color: '#059669' }}>'ર' પછી આવે:</strong><br />
                            ક્રમ (ક્+ર્+અ+મ્)
                        </p>
                    </TheoryCard>
                </div>

                <TheoryCard>
                    <TheoryHeading color="#881337">📂 જોડાક્ષરના આકાર પ્રકારો</TheoryHeading>
                    <TheoryTable>
                        <tbody>
                            {[
                                ["સીધી લીટી", "ગ્ય, ચ્છ, ન્મ"],
                                ["ઉपર-નીચે", "ડ્ડ, દ્મ, દ્ધ, દ્ર"],
                                ["સજાતીય", "ક્ક, જ્જ, મ્પ"],
                                ["બેવડાઈને", "ત્ત, લ્લ, શ્વ, ઠ્ઠ"],
                                ["સંપૂર્ણ ફેરફાર", "ક્ષ, જ્ઞ"]
                            ].map((row, i) => (
                                <TheoryTableRow key={i} cells={row} isEven={i % 2 !== 0} />
                            ))}
                        </tbody>
                    </TheoryTable>
                </TheoryCard>
            </div>
        )
    }
];
