import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryText,
    TheoryGrid,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter15Theory = [
    {
        title: "૧. કૃદંત: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. કૃદંત: વ્યાખ્યા અને સમજ" theme="teal" icon="📖">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>કૃદંત એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                ધાતુને પ્રત્યય લાગી જે શબ્દ બને છે તેને <strong>'કૃદંત'</strong> કહેવાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                <strong>શબ્દ સમજ:</strong> 'કૃત્' છે અંતે જેને તે 'કૃદંત', એમ 'કૃદંત' બહુવ્રીહિ સમાસ છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                કૃદંત ક્રિયાપદની જેમ આવે છે પરંતુ વાક્યનો અર્થ પૂર્ણ કરતા નથી.
                            </TheoryListItem>
                            <TheoryListItem>
                                કૃદંત કર્તા અને કર્મ સાથે જોડાઈને સંજ્ઞા, વિશેષણ, ક્રિયાવિશેષણ અને ક્રિયાપદ તરીકે પણ આવે છે.
                            </TheoryListItem>
                        </TheoryList>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "તે ગાતી ગાતી રડતી હતી.",
                                    "રમતું છોકરું પડી ગયું.",
                                    "વાંચતાં છોકરાં પાસ થઈ ગયાં.",
                                    "સોનલ હસતાં-હસતાં રડે છે.",
                                    "મરતાને ભગવાન બચાવે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #34d399' }}>📝 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૨. ક્રિયાપદ અને કૃદંત વચ્ચે તફાવત",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading color="#0f766e">📊 ક્રિયાપદ vs કૃદંત</TheoryHeading>
                    <div style={{ overflowX: 'auto', marginTop: '15px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1rem' }}>
                            <thead>
                                <tr style={{ background: '#e0f2f1', color: '#00695c' }}>
                                    <th style={{ padding: '12px', border: '1px solid #b2dfdb' }}>ક્રિયાપદ (અ)</th>
                                    <th style={{ padding: '12px', border: '1px solid #b2dfdb' }}>કૃદંત (બ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { a: 'ત્યાં અમે બોર ખાતાં.', b: 'ખાતાં ખાતાં બોલાય નહિ.' },
                                    { a: 'આ કયું પ્રાણી બોલ્યું?', b: 'બોલ્યું કોણ ન પાળે?' },
                                    { a: 'આ કબાટ કોણે તોડ્યું?', b: 'ચોરે તાળું તોડ્યું ન તોડ્યું ને ભાગ્યો.' },
                                    { a: 'રોજ સવારે તે શ્લોક બોલતી.', b: 'બોલતી વખતે તેણે ઊંચે જોયું.' }
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0' }}>{row.a}</td>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0' }}>{row.b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <HighlightBox type="note">
                        <strong>નોંધ:</strong> જે પદો ક્રિયાપદની જેમ વર્તતા હોય પણ વાક્યમાં તેનું કાર્ય ક્રિયાપદ વ્યક્ત કરવાનું ન હોય તેને કૃદંત કહેવાય છે.
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. કૃદંતના પ્રકાર",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading color="#7c3aed">📋 કૃદંતના ૬ મુખ્ય પ્રકાર</TheoryHeading>
                    <div style={{ overflowX: 'auto', marginTop: '15px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1rem' }}>
                            <thead>
                                <tr style={{ background: '#ede9fe', color: '#5b21b6' }}>
                                    <th style={{ padding: '12px', border: '1px solid #c4b5fd' }}>ક્રમ</th>
                                    <th style={{ padding: '12px', border: '1px solid #c4b5fd' }}>પ્રકાર</th>
                                    <th style={{ padding: '12px', border: '1px solid #c4b5fd' }}>પ્રત્યયો</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { num: '૧', type: 'વર્તમાન કૃદંત', words: 'તો, તી, તું, તા' },
                                    { num: '૨', type: 'ભૂતકૃદંત', words: 'યો, યી, યું, યાં, એલો, એલી, એલું, એલાં' },
                                    { num: '૩', type: 'ભવિષ્ય કૃદંત', words: 'નાર, નારો, નારી, નારું, નારા' },
                                    { num: '૪', type: 'હેત્વર્થ કૃદંત', words: 'વા, વાને' },
                                    { num: '૫', type: 'સામાન્ય/વિધ્યર્થ કૃદંત', words: 'વો, વી, વું, વાનો, વાની, વાનું' },
                                    { num: '૬', type: 'સંબંધક ભૂતકૃદંત', words: 'ઈ, ઈને' }
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0', fontWeight: 'bold', color: '#5b21b6' }}>{row.num}</td>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0', fontWeight: 'bold' }}>{row.type}</td>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0' }}>{row.words}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૪. વર્તમાન કૃદંત અને ભૂતકૃદંત",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#059669">૧. વર્તમાન કૃદંત 🔄</TheoryHeading>
                        <TheoryText>
                            વર્તમાનકાળ સૂચવે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યયો: તો, તી, તું, તા</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "રમતો છોકરો ક્યાં ગયો?",
                                    "શાળામાં વિદ્યાર્થીઓ દોડતાં-દોડતાં આવ્યાં.",
                                    "ભણતા છોકરા પાસ થઇ ગયા.",
                                    "નિકુંજ મને રોજ ત્યાં મળતો."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #34d399' }}>🟢 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#dc2626">૨. ભૂતકૃદંત ⏪</TheoryHeading>
                        <TheoryText>
                            દૂરનો કે નજીકનો ભૂતકાળ સૂચવે છે.
                        </TheoryText>
                        <TheorySubHeading glass>સાદો: યો, યી, યું, યાં | પરોક્ષ: એલો, એલી, એલું, એલાં</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "કોઈ કશું બોલ્યું નહિ.",
                                    "વેચેલી વસ્તુ કોણ પાછી લે?",
                                    "મેં વાંચેલું મને યાદ હતું.",
                                    "ભણેલી સ્ત્રી હોશિયાર કહેવાય છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #f87171' }}>🔴 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૫. ભવિષ્ય કૃદંત અને હેત્વર્થ કૃદંત",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#0ea5e9">૩. ભવિષ્ય કૃદંત ⏩</TheoryHeading>
                        <TheoryText>
                            ભવિષ્યકાળ સૂચવે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યયો: નાર, નારો, નારી, નારું, નારા</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "વાંચનાર પાસ થઇ જવાના છે.",
                                    "ખાનાર માણસો કોઈ નહોતાં.",
                                    "મહેનત કરનારાં કોઇ'દિ માંદાં પડતાં હશે?",
                                    "મુખ્યમંત્રી આજે વિધાનસભામાં બોલનાર છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #38bdf8' }}>🔵 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#d97706">૪. હેત્વર્થ કૃદંત 🎯</TheoryHeading>
                        <TheoryText>
                            હેતુ દર્શાવે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યયો: વા, વાને</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "હું ખાવા માટે આવ્યો નથી.",
                                    "ખાવાને માટે જ તે આવ્યો હતો.",
                                    "આ ચોપડી વાંચવાને હું લઇ જઇશ.",
                                    "વિદ્યાર્થીઓ લાઈબ્રેરીમાં વાંચવા જાય છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #fbbf24' }}>🟡 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    },
    {
        title: "૬. સામાન્ય/વિધ્યર્થ કૃદંત અને સંબંધક ભૂતકૃદંત",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#7c3aed">૫. સામાન્ય/વિધ્યર્થ કૃદંત 📋</TheoryHeading>
                        <TheoryText>
                            ક્રિયા થવાનો કે ફરજનો અર્થ દર્શાવે છે. ક્રિયા ચોક્કસ કાળનું સૂચન કરતાં નથી.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યયો: વો, વી, વું, વાનો, વાની, વાનું</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "બધા રમવા ગયા.",
                                    "હું સારો માણસ બનવાનો પ્રયાસ કરું છું.",
                                    "આ પુસ્તક વાંચવું મને ગમશે.",
                                    "બીજા માટે જીવવાનું એ સહેલું નથી.",
                                    "મારે ભાઈને એક જરૂરી વાત કહેવી છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #a78bfa' }}>🟣 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#16a34a">૬. સંબંધક ભૂતકૃદંત 🔗</TheoryHeading>
                        <TheoryText>
                            અગાઉ થયેલી ક્રિયા સાથે ક્રિયાપદનો સંબંધ બતાવે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યયો: ઈ, ઈને</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "આ કામ જોઈને હું ખુશ થઈ ગયો.",
                                    "હસીહસીને તે બેવડ વળી ગયા.",
                                    "પત્ર વાંચીને તેને સંતોષ થયો.",
                                    "હું નાસ્તો કરીને નોકરીએ ગયો.",
                                    "આખો દિવસ લખીને થાકી ગયો."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #4ade80' }}>🟢 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    }
];
