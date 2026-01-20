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

export const chapter4Theory = [
    {
        title: "૧. ધ્વનિશ્રેણી : સમજ અને વ્યાખ્યા",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="🔡 ધ્વનિશ્રેણી"
                    description="ભાષાના ધ્વનિઓને વ્યવસ્થિત સમજવાની કળા"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>ધ્વનિશ્રેણી એટલે શું?</TheorySubHeading>
                        <TheoryList color="#ffffff">
                            <TheoryListItem>
                                "શબ્દમાં રહેલા સ્વર અને વ્યંજનના સમૂહને છૂટા પાડવાની ક્રિયા."
                            </TheoryListItem>
                            <TheoryListItem>
                                ગુજરાતી <strong>'ફોનેટિક'</strong> ભાષા છે - જેવું બોલીએ તેવું લખીએ.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#1e3a8a">✨ સાદા ઉદાહરણો</TheoryHeading>
                    <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                        {[
                            ["ગોપાળ", "ગ્ + ઓ + પ્ + આ + ળ્"],
                            ["વહાલા", "વ્ + અ + હ્ + આ + લ્ + આ"]
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i === 0 ? '1px solid #f1f5f9' : 'none', fontSize: '1.15rem' }}>
                                <strong style={{ color: '#1e3a8a' }}>{item[0]}</strong>
                                <span style={{ fontWeight: '600' }}>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                    <HighlightBox type="warn" title="નોંધ">
                        છેલ્લા અક્ષર પછી 'અ' સ્વર આવે તો આપણે તે બોલતા નથી. (વ્યંજનાન્ત ભાષા)
                    </HighlightBox>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#1e3a8a">📚 GCERT ના ઉદાહરણો</TheoryHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0px' }}>
                        {[
                            ["અરજ", "અ + ર્ + અ + જ્"],
                            ["હળધર", "હ્ + અ + ળ્ + અ + ધ્ + અ + ર્"],
                            ["શું", "શ્ + ઉં"],
                            ["આત્મકથા", "આ + ત્ + મ્ + અ + ક્ + અ + થ્ + આ"],
                            ["બિંદુ", "બ્ + ઈ + ન્ + દ્ + ઉ"],
                            ["દૂરબીન", "દ્ + ઊ + ર્ + અ + બ્ + ઈ + ન્"],
                            ["વિદ્વત્તા", "વ્ + ઈ + દ્ + વ્ + અ + ત્ + ત્ + આ"],
                            ["જ્ઞાનચક્ષુ", "જ્ + ગ્ + આ + ન્ + અ + ચ્ + અ + ક્ + ષ + ઉ"]
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f3f4f6', fontSize: '1.1rem' }}>
                                <span style={{ fontWeight: '800', color: '#374151' }}>{item[0]}</span>
                                <span style={{ color: '#2563eb', fontWeight: '600' }}>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. જોડાક્ષર અને નિયમો",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#b91c1c">⚠️ અગત્યના નિયમો</TheoryHeading>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        {[
                            "૧. અંતે જોડાક્ષર હોય તો 'અ' બોલાય. (જન્મ → ...અ)",
                            "૨. વ્યંજન છૂટો પડે ત્યારે 'ખોડો' (્) કરવો.",
                            "૩. જોડાક્ષર છૂટા પડે ત્યારે વચ્ચે સ્વર ના આવે.",
                            "૪. રેફ વિષે: અર્થ = અ + ર્ + થ્ + અ (રેફ પહેલા ર્).",
                            "૫. ક્ર, પ્ર માં: અક્ષર પછી ર્ મૂકવો. (ક્ર = ક્ + ર્ + અ)"
                        ].map((rule, i) => (
                            <HighlightBox key={i} type="warn">
                                {rule}
                            </HighlightBox>
                        ))}
                    </div>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#047857">🔗 જોડાક્ષર ઉદાહરણો (Complex)</TheoryHeading>
                    <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #f3f4f6', borderRadius: '10px' }}>
                        {[
                            ["જન્મ", "જ્ + અ + ન્ + મ્ + અ"],
                            ["પુણ્ય", "પ્ + ઉ + ણ્ + ય્ + અ"],
                            ["શિલ્પ", "શ્ + ઈ + લ્ + પ્ + અ"],
                            ["વચ્ચે", "વ્ + અ + ચ્ + ચ્ + એ"],
                            ["સ્વરૂપ", "સ્ + વ્ + અ + ર્ + ઊ + પ્"],
                            ["કર્ણ", "ક્ + અ + ર્ + ણ્ + અ"],
                            ["ક્ષમા", "ક્ + ષ + અ + મ્ + આ"],
                            ["વિજ્ઞાન", "વ્ + ઈ + જ્ + ગ્ + આ + ન્ + અ"],
                            ["ચિત્ર", "ચ્ + ઈ + ત્ + ર્ + અ"],
                            ["સૂર્ય", "સ્ + ઊ + ર્ + અ + ય્"],
                            ["માર્ગ", "મ્ + આ + ર્ + ગ્ + અ"],
                            ["રાષ્ટ્ર", "ર્ + આ + ષ + ટ્ + ર્ + અ"]
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 15px', background: i % 2 === 1 ? '#f8fafc' : '#fff', fontSize: '1.1rem' }}>
                                <span style={{ fontWeight: '800', color: '#374151' }}>{item[0]}</span>
                                <span style={{ color: '#047857', fontWeight: '700' }}>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </TheoryCard>
            </div>
        )
    }
];
