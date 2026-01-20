import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryGrid,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter6Theory = [
    {
        title: "૧. શબ્દકોશ : પરિચય અને ઇતિહાસ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="📖 શબ્દકોશ (Dictionary)"
                    description="શબ્દોનું વ્યવસ્થિત તર્કબદ્ધ આયોજન"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>શબ્દકોશ એટલે શું?</TheorySubHeading>
                        <TheoryList color="#ffffff">
                            <TheoryListItem>
                                વ્યાકરણની દૃષ્ટિએ શબ્દોના અર્થ દર્શાવતો અને ક્રમાનુસાર ગોઠવાયેલો સંગ્રહ.
                            </TheoryListItem>
                            <TheoryListItem>
                                ભાષાને શુદ્ધ રીતે સમજવા માટે શબ્દકોશ અનિવાર્ય છે.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#92400e">📜 ઐતિહાસિક સફર</TheoryHeading>
                    <div>
                        {[
                            { year: "૧૮૦૮", title: "ડ્રમન્ડ (પાદરી)", desc: "૪૬૮ શબ્દો સાથે પ્રથમ પ્રયાસ (ગુજરાતી શબ્દોનું અંગ્રેજી)." },
                            { year: "૧૮૭૩", title: "નર્મકોશ (નર્મદ)", desc: "સર્વપ્રથમ ગણનાપાત્ર કોશ. ૧૨ વર્ષની મહેનત." },
                            { year: "૧૯૨૮", title: "ભગવદ્ગોમંડલ", desc: "ગોંડલ મહારાજા ભગવતસિંહજી. ૨૬ વર્ષ, ૯ ભાગ, ૧૭ કિલો." },
                            { year: "૧૯૨૯", title: "સાર્થ જોડણીકોશ", desc: "ગાંધીજીની પ્રેરણાથી." },
                            { year: "૧૯૮૫+", title: "ગુજરાતી વિશ્વકોશ", desc: "ધીરુભાఈ ઠાકર. એકમાત્ર સચિત્ર જ્ઞાનકોશ." }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', paddingBottom: '15px', borderBottom: i < 4 ? '1px solid #fff7ed' : 'none' }}>
                                <div style={{ fontWeight: '900', color: '#d97706', minWidth: '70px', fontSize: '1.15rem' }}>{item.year}</div>
                                <div style={{ fontSize: '1.1rem', color: '#1f2937', lineHeight: '1.6' }}>
                                    <strong style={{ color: '#92400e' }}>{item.title}:</strong> {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. શબ્દકોશનો ક્રમ અને નિયમો",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#92400e">🔤 ગોઠવણીના નિયમો</TheoryHeading>

                    <div style={{ marginBottom: '15px' }}>
                        <TheorySubHeading>૧. સ્વરક્રમ</TheorySubHeading>
                        <HighlightBox type="warn">
                            <div style={{ fontSize: '1.15rem', fontWeight: '700', letterSpacing: '1px' }}>
                                અ, અં, અઃ, આ, આં, આઃ ... ઔ, ઔં, ઔઃ
                            </div>
                        </HighlightBox>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <TheorySubHeading>૨. વ્યંજન ક્રમ (બારાક્ષરી)</TheorySubHeading>
                        <HighlightBox type="warn">
                            <div style={{ fontSize: '1.15rem', fontWeight: '700' }}>
                                ક, ક્ષ, ખ, ગ, ઘ, ચ, છ, જ, જ્ઞ, ઝ, ટ, ઠ, ડ, ઢ, ણ...
                            </div>
                            <div style={{ fontSize: '1.05rem', marginTop: '10px', fontWeight: '600' }}>
                                * ક્રમ: ક, કં, કઃ, કા, કાં... કૌ, ક્ય, ક્ર, ક્લ...
                            </div>
                        </HighlightBox>
                    </div>

                    <div>
                        <TheorySubHeading>૩. જોડાક્ષરનું સ્થાન</TheorySubHeading>
                        <TheoryGrid minWidth="160px">
                            {[
                                { jod: "ક્ષ", after: "'ક' પછી" },
                                { jod: "જ્ઞ", after: "'જ' પછી" },
                                { jod: "ત્ર", after: "'ત' પછી" },
                                { jod: "શ્ર", after: "'શ' પછી" }
                            ].map((item, i) => (
                                <div key={i} style={{ background: '#ecfdf5', padding: '12px', borderRadius: '8px', border: '1px solid #a7f3d0', fontSize: '1.15rem', fontWeight: '700', textAlign: 'center' }}>
                                    <strong style={{ color: '#059669' }}>{item.jod}</strong> → {item.after}
                                </div>
                            ))}
                        </TheoryGrid>
                    </div>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#92400e">📝 ઉદાહરણો (Practice)</TheoryHeading>
                    <ul style={{ paddingLeft: '25px', fontSize: '1.15rem', margin: 0, color: '#374151', lineHeight: '1.9' }}>
                        <li><strong style={{ color: '#d97706' }}>અ:</strong> અક્લ, અમર, અંબર, આભ, ઋષિ, ઔત્સુક્ય.</li>
                        <li><strong style={{ color: '#d97706' }}>ક:</strong> કમળ, કંઠી, કોમલ, ક્યારી, ક્રમ, ક્લાર્ક, ક્ષણ.</li>
                        <li><strong style={{ color: '#d97706' }}>શુભ:</strong> પરીક્ષા, પૂર્ણા, મોરસ, યાચના, વ્યક્તિ, સમીર.</li>
                    </ul>
                    <HighlightBox type="error">
                        <div style={{ textAlign: 'center', fontWeight: '600' }}>
                            * ઙ, ઞ, ણ, ળ થી શબ્દ શરૂ થતા નથી.
                        </div>
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    }
];
