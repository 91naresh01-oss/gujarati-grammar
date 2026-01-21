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
    TheoryGrid,
    TheoryTable
} from '../../../components/TheoryComponents';

export const chapter18Theory = [
    {
        title: "૧. દ્વિરુક્ત: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. દ્વિરુક્ત: વ્યાખ્યા અને સમજ" theme="rose" icon="🔁">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>દ્વિરુક્ત એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                <strong>'દ્વિ'</strong> એટલે બે અને <strong>'ઉક્ત'</strong> એટલે બોલાયેલું.
                            </TheoryListItem>
                            <TheoryListItem>
                                ગુજરાતી ભાષામાં ઘણે સ્થળે એકનો એક શબ્દ બેવડાયેલો જોવામાં આવે છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                શબ્દની આ પ્રમાણે દ્વિરુક્તિ થવાથી તેમાં <strong>“દરેકનો”</strong>, <strong>“પૂર્ણપણાનો”</strong>, <strong>“વારંવાર થવાનો”</strong> કે <strong>“અતિશયનો"</strong> એવો અર્થ આવે છે.
                            </TheoryListItem>
                        </TheoryList>

                        <div style={{ marginTop: '20px', padding: '15px', background: '#fff1f2', borderRadius: '12px', border: '1px solid #fda4af' }}>
                            <h4 style={{ margin: '0 0 10px 0', color: '#be123c' }}>📌 દ્વિરુક્ત શબ્દપ્રયોગના ૬ પ્રકારો:</h4>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                {[
                                    '૧. એક જ રૂપની દ્વિરુક્તિ હોય.',
                                    '૨. એક ઘટકની ધ્વનિશ્રેણી બદલાતી હોય.',
                                    '૩. સંયોજન પ્રત્યયો સાથેની દ્વિરુક્તિ.',
                                    '૪. બંને ઘટકો સાર્થ (અર્થવાળા) હોય તેવી દ્વિરુક્તિ.',
                                    '૫. બેમાંથી કોઈ એક જ ઘટક અર્થવાળું હોય એવી દ્વિરુક્તિ.',
                                    '૬. બેમાંથી એક ઘટક અર્થવાળું ન હોય પણ બંને મળી કશોક અર્થ દર્શાવે.'
                                ].map((type, i) => (
                                    <span key={i} style={{
                                        background: 'white',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.95rem',
                                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                        color: '#be123c'
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
        title: "૨. દ્વિરુક્તના પ્રકારો (૧-૩)",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#e11d48">૧. એક જ રૂપની દ્વિરુક્તિ 🔥</TheoryHeading>
                        <TheoryText>
                            શબ્દનું મૂળ રૂપ જેમનું તેમ બેવડાય છે.
                        </TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['ઝબકઝબક', 'ઠેરઠેર', 'ધમધમ', 'ખડખડ', 'થરથર', 'ધીમેધીમે', 'વાહવાહ', 'કચકચ', 'એકએક', 'ઘેરઘેર'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#ec4899">૨. ધ્વનિશ્રેણી બદલાતી હોય 🎼</TheoryHeading>
                        <TheoryText>
                            પ્રાસ મળતો હોય તેવા શબ્દો, જેમાં થોડો ફેરફાર થાય છે.
                        </TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['આડોશીપાડોશી', 'વાડીબાડી', 'અચકોમચકો', 'ખેદાનમેદાન', 'અદલબદલ', 'થીગડથાગડ', 'આસપાસ', 'ઝટપટ'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#db2777">૩. સંયોજક પ્રત્યયો સાથે 🖇️</TheoryHeading>
                        <TheoryText>
                            વચ્ચે 'ો', 'આ', 'એ' કે 'મ' જેવા પ્રત્યયો આવતા હોય.
                        </TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['ઉપરાઉપરી', 'અડોઅડ', 'તારેતાર', 'ગરમાગરમ', 'ખેંચાખેંચ', 'દોડાદોડી', 'મારામારી', 'રાતોરાત', 'ગામેગામ'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૩. દ્વિરુક્તના પ્રકારો (૪-૬)",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#0891b2">૪. બંને ઘટકો સાર્થ હોય ✅✅</TheoryHeading>
                        <TheoryText>બંને શબ્દોનો સ્વતંત્ર અર્થ હોય.</TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['આવનજાવન', 'વધઘટ', 'હલનચલન', 'ભણવુંગણવું', 'લાગવગ', 'તનમન', 'લૂંટફાટ', 'સારવાર', 'ચડતીપડતી'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#0284c7">૫. એક જ ઘટક સાર્થ હોય ✅❌</TheoryHeading>
                        <TheoryText>બેમાંથી એક જ શબ્દ અર્થવાળો હોય.</TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['આડોશીપાડોશી', 'અમુકતમુક', 'અડધુંપડધું', 'અંતરમંતર', 'કાગળબાગળ', 'સોપારીબોપારી'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#4f46e5">૬. અર્થ ન હોય પણ બંને મળી અર્થ આપે ❌❌</TheoryHeading>
                        <TheoryText>બંને ઘટક એકલા અર્થહીન પણ સાથે અર્થ આપે.</TheoryText>
                        <HighlightBox type="example">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['અરસપરસ', 'કચરપચર', 'એલફેલ', 'સડસડ', 'અવારનવાર', 'અગડંબગડં', 'ચકળવકળ'].map((word, i) => (
                                    <span key={i} style={{ background: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9rem' }}>{word}</span>
                                ))}
                            </div>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    },
    {
        title: "૪. રવાનુકારી: વ્યાખ્યા અને ઉદાહરણો",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૪. રવાનુકારી: વ્યાખ્યા અને ઉદાહરણો" theme="emerald" icon="🔊">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>રવાનુકારી એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                <strong>‘રવ’</strong> એટલે અવાજ. રવાનુકારી એટલે રવ (અવાજ) થી બનતો શબ્દ.
                            </TheoryListItem>
                            <TheoryListItem>
                                આપણી પાંચેય ઇન્દ્રિય - આંખ, નાક, કાન, જીભ અને ચામડીમાંથી કોઈ પણ એકનો અનુભવ સાકાર કરે તે શબ્દને <strong>‘રવાનુકારી શબ્દ’</strong> કહે છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                આપણને સંભળાતા અવાજને આપણી ભાષામાં લખીએ ત્યારે તેને રવાનુકારી શબ્દો કહેવાય છે.
                            </TheoryListItem>
                        </TheoryList>

                        <div style={{ marginTop: '25px' }}>
                            <TheorySubHeading glass>GCERT ના ઉદાહરણો 📚</TheorySubHeading>
                            <TheoryList color="#000000">
                                <TheoryListItem>ઝરણું વહી રહ્યું હતું... <strong>ખળખળ</strong></TheoryListItem>
                                <TheoryListItem>નળમાંથી પાણી ટપકતું હતું... <strong>ટપ ટપ...ટપ ટપ</strong></TheoryListItem>
                                <TheoryListItem>ઝાંઝરનો અવાજ... <strong>છમછમ છમછમ</strong></TheoryListItem>
                                <TheoryListItem>દેડકાઓ બોલતા હતા... <strong>ડ્રાંઉં ડ્રાંઉ</strong></TheoryListItem>
                                <TheoryListItem>બંદૂકમાંથી ગોળી છૂટી... <strong>સનનન</strong></TheoryListItem>
                                <TheoryListItem>દીવાઓથી નગર થતું હતું... <strong>ઝળહળ</strong></TheoryListItem>
                                <TheoryListItem>પરસેવે... <strong>રેબઝેબ</strong></TheoryListItem>
                                <TheoryListItem>પાણીપુરી તીખી... <strong>તમતમ</strong></TheoryListItem>
                                <TheoryListItem>મોગરા મ્હોર્યા... <strong>મઘમઘ</strong></TheoryListItem>
                            </TheoryList>
                        </div>

                        <div style={{ marginTop: '20px', padding: '15px', background: '#ecfdf5', borderRadius: '12px', borderLeft: '5px solid #10b981' }}>
                            <p style={{ margin: 0, fontStyle: 'italic', color: '#047857' }}>
                                <strong>⚠️ ખાસ નોંધ:</strong> તમામ રવાનુકારી શબ્દો દ્વિરૂક્ત છે, પરંતુ તમામ દ્વિરુક્ત રવાનુકારી નથી તેથી જવાબ લખતી વખતે ધ્યાન રાખવું.
                            </p>
                        </div>
                    </div>
                </GradientCard>
            </div>
        )
    }
];
