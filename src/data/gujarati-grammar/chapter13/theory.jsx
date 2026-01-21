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

export const chapter13Theory = [
    {
        title: "૧. કેવળપ્રયોગી: વ્યાખ્યા અને સમજ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. કેવળપ્રયોગી: વ્યાખ્યા અને સમજ" theme="teal" icon="💬">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>કેવળપ્રયોગી એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                મનની લાગણી કે ભાવને વ્યક્ત કરનારાં અને વાક્યથી સ્વતંત્ર રીતે છૂટાં ઉદ્ગારરૂપે આવતાં પદો <strong>'કેવળપ્રયોગી'</strong> કહેવાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                કેવળપ્રયોગી શબ્દો વાક્યનો ભાગ ન હોવા છતાં લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                આ શબ્દો પછી સામાન્ય રીતે ઉદ્ગારચિહ્ન (!) મૂકાય છે.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૨. કેવળપ્રયોગીના પ્રકાર",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading color="#0f766e">📊 કેવળપ્રયોગીના પ્રકાર</TheoryHeading>
                    <div style={{ overflowX: 'auto', marginTop: '15px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.1rem' }}>
                            <thead>
                                <tr style={{ background: '#e0f2f1', color: '#00695c' }}>
                                    <th style={{ padding: '12px', border: '1px solid #b2dfdb' }}>ક્રમ</th>
                                    <th style={{ padding: '12px', border: '1px solid #b2dfdb' }}>પ્રકાર</th>
                                    <th style={{ padding: '12px', border: '1px solid #b2dfdb' }}>મુખ્ય શબ્દો</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { num: '૧', type: 'હર્ષવાચક', words: 'વાહ વાહ!, શાબાશ!, સરસ!, ધન્ય!' },
                                    { num: '૨', type: 'ધન્યવાદવાચક', words: 'સરસ!, શાબાશ!' },
                                    { num: '૩', type: 'સંબોધનવાચક', words: 'એય!, રે!, અલ્યા!, એ, અલી, હે, ઓ' },
                                    { num: '૪', type: 'આશ્ચર્યજનક', words: 'અહો!, હે!, અરે!, ઓહો!, ઓહ!' },
                                    { num: '૫', type: 'આશિષવાચક', words: 'જય જય, ખમા, કલ્યાણ' },
                                    { num: '૬', type: 'શોકવાચક', words: 'અરેરે!, હાય! હાય!, અરર!' },
                                    { num: '૭', type: 'ક્રોધવાચક', words: 'ચૂપ, બસ, ખામોશ' },
                                    { num: '૮', type: 'ધિક્કારવાચક', words: 'ધિક્!, છટ્!, હટ!' },
                                    { num: '૯', type: 'વિનયવાચક', words: 'જી' },
                                    { num: '૧૦', type: 'પ્રશ્નવાચક', words: 'હં, હે, શું' },
                                    { num: '૧૧', type: 'અનુમતિવાચક', words: 'હંઅં, હોવે, હો, હાંઉ' },
                                    { num: '૧૨', type: 'નિષેધવાચક', words: 'અહં, ઊંહું' }
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0', fontWeight: 'bold', color: '#004d40' }}>{row.num}</td>
                                        <td style={{ padding: '10px', border: '1px solid #e0e0e0', fontWeight: 'bold', color: '#004d40' }}>{row.type}</td>
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
        title: "૩. હર્ષવાચક અને ધન્યવાદવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#059669">૧. હર્ષવાચક 🎉</TheoryHeading>
                        <TheoryText>
                            હર્ષ (ખુશી) ની લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: વાહ વાહ!, શાબાશ!, સરસ!, ધન્ય!</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "વાહ! ખૂબ સુંદર લાગો છો.",
                                    "વાહ! તમે સરસ ગીત ગાયું.",
                                    "ધન્ય! તમારી જનેતાને!",
                                    "સરસ! કામ પૂરું કરી દીધું હો!",
                                    "શાબાશ! તમે કરી બતાવ્યું."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #34d399' }}>🎊 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#0ea5e9">૨. ધન્યવાદવાચક 🙏</TheoryHeading>
                        <TheoryText>
                            પ્રશંસા કે ધન્યવાદ વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: સરસ!, શાબાશ!</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "સરસ! તે બહુ સારું કામ કર્યું.",
                                    "શાબાશ! બેટા પ્રથમ નંબર લાવ્યો.",
                                    "સરસ! તમે આવી ગયા!",
                                    "શાબાશ! લેખક બની ગયા!",
                                    "શાબાશ! અધિકારીનો હોદ્દો ધારણ કરી લીધો."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #38bdf8' }}>👏 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૪. સંબોધનવાચક અને આશ્ચર્યજનક",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#d97706">૩. સંબોધનવાચક 📢</TheoryHeading>
                        <TheoryText>
                            કોઈને બોલાવવા કે સંબોધન કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: એય!, રે!, અલ્યા!, એ, અલી, હે, ઓ</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "એય! હું તને કહું છું.",
                                    "અલી બાઇ, સરખું કામ કર.",
                                    "એ! મને લઈ જજે.",
                                    "ઓ! ભાઈ, જો તો ખરાં!",
                                    "રે! ક્યાં જાય છે?",
                                    "અરે! તમે અહીંયા ક્યાંથી?"
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #fbbf24' }}>📞 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#7c3aed">૪. આશ્ચર્યજનક 😮</TheoryHeading>
                        <TheoryText>
                            આશ્ચર્ય કે નવાઈની લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: અહો!, હે!, અરે!, ઓહો!, ઓહ!</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "ઓહો! તમે આવી ગયા.",
                                    "હે! તમેય અમેરિકા જઈ આવ્યા?",
                                    "ઓહ! તું પાસ થઈ ગયો?",
                                    "ઓહો! પ્રભુ તમે પધાર્યા!"
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #a78bfa' }}>😲 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    },
    {
        title: "૫. આશિષવાચક અને શોકવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#15803d">૫. આશિષવાચક 🙌</TheoryHeading>
                        <TheoryText>
                            આશીર્વાદ આપવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: જય જય, ખમા, કલ્યાણ</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "ખમા મારા વીરાને!",
                                    "સદા અને સર્વત્ર સૌનું કલ્યાણ થાઓ.",
                                    "ખમા! તારો બેડો પાર પડી જશે.",
                                    "જય હો! તારું ધારેલું જ થશે!",
                                    "સૌનું કલ્યાણ થાઓ."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #22c55e' }}>✨ {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#dc2626">૬. શોકવાચક 😢</TheoryHeading>
                        <TheoryText>
                            દુઃખ કે શોકની લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: અરેરે!, હાય! હાય!, અરર!</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "અરેરે! કેટલો ખરાબ દિવસ હતો.",
                                    "હાય! હાય! તેની સાથે આવું થયું?",
                                    "અરર! એ મરી ગયો!",
                                    "હાય! હાય! તમારી બેગ ખોવાઈ ગઈ.",
                                    "અરેરે! કેટલો ગરીબ માણસ છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #f87171' }}>💔 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૬. ક્રોધવાચક અને ધિક્કારવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#b91c1c">૭. ક્રોધવાચક 😠</TheoryHeading>
                        <TheoryText>
                            ગુસ્સો કે ક્રોધની લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: ચૂપ, બસ, ખામોશ</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "બસ બહું થયું હવે.",
                                    "ચૂપ, મારે તારો એક પણ શબ્દ નથી સાંભળવો.",
                                    "ખામોશ, હવે કંઈ બોલવું નહીં.",
                                    "બસ, હવે ઘર ભેગો થઇ જા!",
                                    "બસ, તમારી હદમાં રહો."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #ef4444' }}>🔥 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#9333ea">૮. ધિક્કારવાચક 😤</TheoryHeading>
                        <TheoryText>
                            ધિક્કાર કે તિરસ્કારની લાગણી વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: ધિક્!, છટ્!, હટ!</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "છટ્! તારી સાથે કોણ રમે?",
                                    "હટ! મને એકલો મૂકી દે.",
                                    "ધિક્! તારી વાત મારે સાંભળવી જ નથી.",
                                    "હટ! મને તો બોલવા જ દેતો નથી.",
                                    "છટ્! બધાં તારા જેવા ન હોય."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #c084fc' }}>👎 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    },
    {
        title: "૭. વિનયવાચક અને પ્રશ્નવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#0369a1">૯. વિનયવાચક 🙇</TheoryHeading>
                        <TheoryText>
                            વિનય કે નમ્રતા વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: જી</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "જી, તમે કહો એમ જ કરીશ.",
                                    "જી, તમે મારા આંગણે પધારજો.",
                                    "જી, સાંજ સુધી થઇ જશે.",
                                    "જી, હું ચોક્કસ હાજરી આપીશ.",
                                    "જી, તમારો હુકમ હશે એમ જ થશે!"
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #0ea5e9' }}>🤝 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#ca8a04">૧૦. પ્રશ્નવાચક ❓</TheoryHeading>
                        <TheoryText>
                            પ્રશ્ન કે સવાલ પૂછવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: હં, હે, શું</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "હં? શું કહ્યું.",
                                    "હે? મને કહી રહયા છે!",
                                    "શું? તમે નહીં આવો.",
                                    "હે? તમે ત્યાં જ છો.",
                                    "શું? તમારે ત્યાં જ આવવું છે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #eab308' }}>🤔 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </div>
            </div>
        )
    },
    {
        title: "૮. અનુમતિવાચક અને નિષેધવાચક",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid minWidth="300px">
                    <TheoryCard>
                        <TheoryHeading color="#16a34a">૧૧. અનુમતિવાચક ✅</TheoryHeading>
                        <TheoryText>
                            સંમતિ કે સ્વીકૃતિ વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: હંઅં, હોવે, હો, હાંઉ</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "હાંઉ, આપણે બંને જઈ આવીશું.",
                                    "હોવે, હું ત્યાં જ હતો.",
                                    "હો! હું તમારી રાહ જોઈશ.",
                                    "હાંઉ મનને ગમે એ કર બેટા.",
                                    "હો, તમે કહો એમ જ થશે."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #4ade80' }}>✔️ {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>

                    <TheoryCard>
                        <TheoryHeading color="#e11d48">૧૨. નિષેધવાચક ❌</TheoryHeading>
                        <TheoryText>
                            ના પાડવા કે અસંમતિ વ્યક્ત કરવા માટે વપરાય છે.
                        </TheoryText>
                        <TheorySubHeading glass>શબ્દો: અહં, ઊંહું</TheorySubHeading>
                        <HighlightBox type="example">
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "અહં, મારાથી નહીં થાય.",
                                    "ઊંહું, મને મુકીને જતો નહીં.",
                                    "અહં, તું આવું તો ન જ કરે.",
                                    "અહં હું તો નથી જ કરવાનો.",
                                    "ઊંહું, એના તો મોઢે જ ન લગાય."
                                ].map((item, i) => (
                                    <li key={i} style={{ padding: '4px 0', borderBottom: '1px dashed #fb7185' }}>🚫 {item}</li>
                                ))}
                            </ul>
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    }
];
