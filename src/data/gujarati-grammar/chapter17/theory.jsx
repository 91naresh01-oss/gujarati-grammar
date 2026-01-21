import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryText,
    HighlightBox,
    TheoryList,
    TheoryListItem,
    TheoryGrid
} from '../../../components/TheoryComponents';

export const chapter17Theory = [
    {
        title: "૧. સંયોજક: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. સંયોજક: વ્યાખ્યા અને સમજ" theme="fuchsia" icon="🔗">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>સંયોજક એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                જે પદ કે શબ્દો, શબ્દસમૂહો, વાક્યો કે ઉપવાક્યોને <strong>જોડવાનું</strong> કામ કરે તેને <strong>'સંયોજક'</strong> કહેવાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                સંયોજકને <strong>‘ઉભયાન્વયી’</strong> અવ્યય તરીકે પણ ઓળખવામાં આવે છે.
                            </TheoryListItem>
                        </TheoryList>

                        <div style={{ marginTop: '20px', padding: '15px', background: '#fdf4ff', borderRadius: '12px', border: '1px solid #f0abfc' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#a21caf' }}>📌 સંયોજકના ૯ મુખ્ય પ્રકારો:</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px' }}>
                                {['૧. સમુચ્ચયવાચક', '૨. વિરોધવાચક', '૩. વિકલ્પવાચક', '૪. અનુમાનવાચક', '૫. પર્યાયવાચક', '૬. કારણવાચક', '૭. શરતવાચક', '૮. દૃષ્ટાંતવાચક', '૯. અવતરણવાચક'].map((type, i) => (
                                    <span key={i} style={{
                                        background: 'white',
                                        padding: '6px 10px',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        color: '#a21caf'
                                    }}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૨. વિકલ્પવાચક અને અનુમાનવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#c026d3">૧. વિકલ્પવાચક ↔️</TheoryHeading>
                        <TheoryText>
                            બેમાંથી એકની પસંદગી કે વિકલ્પ સૂચવવા વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: અથવા, વા, યા, કિંવા, કે, અગર</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "તમે આ સાડી લો કે પેલી લો.",
                                    "આજે અથવા કાલે રૂબરૂમાં વાત કરીશું.",
                                    "તમે ચા લેશો કે કોફી?",
                                    "જીતો યા હારો પ્રયાસ તો કરવો જ પડશે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #e879f9' }}>🔹 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#7c3aed">૨. અનુમાનવાચક 🤔</TheoryHeading>
                        <TheoryText>
                            અનુમાનરૂપ હકીકત અને પાયારૂપ હકીકતને જોડે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: તેથી, એટલે, માટે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "વરસાદ પડ્યો હશે માટે કપડાં ભીના છે.",
                                    "તે લગ્નમાં ગયો હતો, તેથી કચેરીમાં આવી શક્યો નહીં.",
                                    "દીકરો આવવાનો હશે એટલે ઘર સજાવ્યું લાગે છે.",
                                    "તે સારો છે તેથી તેની સાથે બધું સારું જ થાય છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #a78bfa' }}>🔸 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૩. સમુચ્ચયવાચક અને પર્યાયવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#059669">૩. સમુચ્ચયવાચક ➕</TheoryHeading>
                        <TheoryText>
                            બે શબ્દો કે બે વાક્યોને જોડવાનું કામ કરે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: ને, અને, તથા, વળી, તેમજ, ઉપરાંત</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "રામ, સીતા અને લક્ષ્મણ વનમાં ગયાં.",
                                    "ત્યાં આવજો તથા જમજો.",
                                    "મનમાં ને મનમાં શું મોળું મોળું મલકે?",
                                    "તેઓ મોઢું બગાડીને વળી કશું બોલ્યા નહિ."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #34d399' }}>🟢 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#d97706">૪. પર્યાયવાચક 📝</TheoryHeading>
                        <TheoryText>
                            વિસ્તાર કે સ્પષ્ટતાથી કઠિન શબ્દોના પર્યાય સૂચવવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: અર્થાત્, એટલે કે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "સત્યાગ્રહ એટલે સત્ય માટે આગ્રહ.",
                                    "ભગવાન એટલે સર્વસ્વ.",
                                    "ધ્યાન એટલે કે આત્મસાક્ષાત્કાર.",
                                    "ગાંધીજી એટલે અહિંસાની મૂરત."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #fbbf24' }}>🟡 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૪. વિરોધવાચક અને કારણવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#dc2626">૫. વિરોધવાચક ⚡</TheoryHeading>
                        <TheoryText>
                            એકબીજાથી વિરુદ્ધ અર્થનાં કંપનો જોડે છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: પણ, છતાં, તોપણ, તેમ છતાં, પરંતુ, જો કે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "હું આવ્યો પણ તમે ન મળ્યા.",
                                    "ડૉક્ટરે ના પાડી છતાં પણ તે વ્યસન કરે છે.",
                                    "અમેરિકા જવું છે, પરંતુ ઘરથી દૂર જવાતું નથી.",
                                    "તેમના સંબંધ બગડ્યા હતા તોપણ સમાચાર લેવા આવ્યા."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #f87171' }}>🔴 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#ea580c">૬. કારણવાચક 💡</TheoryHeading>
                        <TheoryText>
                            કારણ સૂચવવાના અર્થમાં વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>પ્રત્યય: કારણ કે, કેમ કે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "હું લગ્નમાં ન ગયો, કારણ કે આમંત્રણ ન હતું.",
                                    "અમે બહાર ન ગયા કેમ કે વરસાદ ચાલુ હતો.",
                                    "આપણે તે ન કરવું જોઇએ કારણ કે તે ખોટું છે.",
                                    "તે વધુ જીવશે નહિ કેમ કે તેની તબિયત ખૂબ જ ખરાબ છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #fb923c' }}>🟠 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૫. શરત, દૃષ્ટાંત અને અવતરણવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#2563eb">૭. શરતવાચક 🎯</TheoryHeading>
                        <TheoryText>શરત અને સંભવિત હકીકતને જોડે.</TheoryText>
                        <TheorySubHeading glass>જો-તો, જ્યારે-ત્યારે, જે-તે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li>🔵 જો સમય હશે તો આવીશ.</li>
                                <li>🔵 જ્યારે ભગવાન કરે ત્યારે થાય.</li>
                                <li>🔵 જે કમાય તે વાપરે.</li>
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#4f46e5">૮. દૃષ્ટાંતવાચક 👁️</TheoryHeading>
                        <TheoryText>હકીકત અને દૃષ્ટાંતને જોડે છે.</TheoryText>
                        <TheorySubHeading glass>જેમ કે</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li>🟣 અભિમાન વિનાશ નોતરે છે, જેમ કે રાવણ.</li>
                                <li>🟣 લોકો સારા વ્યક્તિત્વને સ્વીકારે છે, જેમ કે ગાંધીજી.</li>
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#0284c7">૯. અવતરણવાચક 💬</TheoryHeading>
                        <TheoryText>ઉક્તિ કે વિચારને રજૂ કરવા.</TheoryText>
                        <TheorySubHeading glass>કે ('કે' પછી અવતરણ ચિહ્ન)</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li>🔷 ભગવાન બુદ્ધે ઉપદેશ આપ્યો કે, “અહિંસાનું પાલન કરો.”</li>
                                <li>🔷 ગાંધીજીએ કહ્યું કે, “મારું જીવન એ જ મારો સંદેશ.”</li>
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    }
];
