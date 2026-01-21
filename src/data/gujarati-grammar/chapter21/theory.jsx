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
    TheoryTable,
    TheoryTableHeader,
    TheoryTableRow
} from '../../../components/TheoryComponents';

export const chapter21Theory = [
    {
        title: "૧. વિરામચિહ્નોનો પરિચય",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="૧. વિરામચિહ્નોનો પરિચય" theme="teal" icon="✒️">
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>વ્યાખ્યા</TheorySubHeading>
                        <TheoryText>
                            ભાષામાં વાક્યો લખતી વખતે કે બોલતી વખતે અર્થને સ્પષ્ટ કરવા, ભાવ દર્શાવવા કે અટકવા માટે જે ચોક્કસ સંકેતો કે ચિહ્નો વપરાય છે, તેને <strong>વિરામચિહ્નો</strong> કહે છે.
                        </TheoryText>
                        <TheoryText>
                            યોગ્ય વિરામચિહ્નોના ઉપયોગથી લખાણ સ્પષ્ટ, સચોટ અને અસરકારક બને છે.
                        </TheoryText>
                    </div>
                </GradientCard>
            </div>
        )
    },
    {
        title: "૨. મુખ્ય વિરામચિહ્નો",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading color="#0ea5e9">૨. મુખ્ય વિરામચિહ્નો</TheoryHeading>

                    <TheorySubHeading glass>૧. પૂર્ણવિરામ (Full Stop) [ . ]</TheorySubHeading>
                    <TheoryText>
                        સાદાં વાક્યો એટલે કે વિધાન વાક્યોને અંતે <strong>પૂર્ણવિરામ</strong> મૂકવામાં આવે છે.
                    </TheoryText>
                    <HighlightBox type="success" title="ઉદાહરણો">
                        <TheoryList>
                            <TheoryListItem>સૂરજ પૂર્વમાં ઊગે છે.</TheoryListItem>
                            <TheoryListItem>બાળકો મેદાનમાં રમે છે.</TheoryListItem>
                        </TheoryList>
                    </HighlightBox>
                    <HighlightBox type="info" title="નોંધ">
                        શબ્દોને ટૂંકમાં લખવા માટે પણ પૂર્ણવિરામ વપરાય છે. જેમ કે, ચી. (ચિરંજીવી), લિ. (લિખિતંગ).
                    </HighlightBox>

                    <div style={{ marginTop: '20px' }}></div>
                    <TheorySubHeading glass>૨. અલ્પવિરામ (Comma) [ , ]</TheorySubHeading>
                    <TheoryText>
                        વાક્યમાં જ્યાં થોડું અટકવાનું હોય અથવા બે કે તેથી વધુ શબ્દો/વાક્યો છૂટા પાડવાના હોય ત્યાં <strong>અલ્પવિરામ</strong> વપરાય છે.
                    </TheoryText>
                    <HighlightBox type="success" title="ઉદાહરણો">
                        <TheoryList>
                            <TheoryListItem>ગંગા, યમુના, ગોદાવરી અને નર્મદા પવિત્ર નદીઓ છે.</TheoryListItem>
                            <TheoryListItem>'હા, હું આજે આવીશ.'</TheoryListItem>
                            <TheoryListItem>ગુરુજીએ કહ્યું, "સદાય સાચું બોલો."</TheoryListItem>
                        </TheoryList>
                    </HighlightBox>

                    <div style={{ marginTop: '20px' }}></div>
                    <TheorySubHeading glass>૩. પ્રશ્નાર્થચિહ્ન (Question Mark) [ ? ]</TheorySubHeading>
                    <TheoryText>
                        પૂછપરછ કરવા કે કશીક માહિતી મેળવવા માટે વપરાતા વાક્યને અંતે <strong>પ્રશ્નાર્થચિહ્ન</strong> આવે છે.
                    </TheoryText>
                    <HighlightBox type="success" title="ઉદાહરણો">
                        <TheoryList>
                            <TheoryListItem>તમારું નામ શું છે?</TheoryListItem>
                            <TheoryListItem>તમે ક્યારે આવશો?</TheoryListItem>
                        </TheoryList>
                    </HighlightBox>

                    <div style={{ marginTop: '20px' }}></div>
                    <TheorySubHeading glass>૪. ઉદ્ગારચિહ્ન (Exclamation Mark) [ ! ]</TheorySubHeading>
                    <TheoryText>
                        આશ્ચર્ય, નવાઈ, ક્રોધ, ધિક્કાર કે પ્રશંસા જેવી તીવ્ર લાગણી દર્શાવતા શબ્દો કે વાક્યોને અંતે <strong>ઉદ્ગારચિહ્ન</strong> આવે છે.
                    </TheoryText>
                    <HighlightBox type="success" title="ઉદાહરણો">
                        <TheoryList>
                            <TheoryListItem><strong>વાહ!</strong> કેટલું સુંદર દ્રશ્ય.</TheoryListItem>
                            <TheoryListItem><strong>અરે!</strong> તમે પડી ગયા?</TheoryListItem>
                        </TheoryList>
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. અન્ય વિરામચિહ્નો",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryGrid>
                    <TheoryCard>
                        <TheorySubHeading color="purple">૫. અર્ધવિરામ ( ; )</TheorySubHeading>
                        <TheoryText>વાક્યમાં અલ્પવિરામ કરતાં વધુ અને પૂર્ણવિરામ કરતાં ઓછું અટકવાનું હોય ત્યારે વપરાય છે.</TheoryText>
                        <div className="text-sm text-gray-500 mt-2 italic">ઉદા: જેવું વાવશો; તેવું લણશો.</div>
                    </TheoryCard>
                    <TheoryCard>
                        <TheorySubHeading color="pink">૬. ગુરુવિરામ ( : )</TheorySubHeading>
                        <TheoryText>ગણતરી કરવી હોય, યાદી આપવી હોય કે વર્ણન કરવું હોય ત્યારે વપરાય છે.</TheoryText>
                        <div className="text-sm text-gray-500 mt-2 italic">ઉદા: નદીઓના નામ: ગંગા, યમુના...</div>
                    </TheoryCard>
                    <TheoryCard>
                        <TheorySubHeading color="indigo">૭. અવતરણચિહ્ન ( "" )</TheorySubHeading>
                        <TheoryText>કોઈના બોલેલા શબ્દો કે વાક્યો જેમ ના તેમ મૂકવા માટે વપરાય છે.</TheoryText>
                        <div className="text-sm text-gray-500 mt-2 italic">ઉદા: ગાંધીજીએ કહ્યું, "સત્ય એ જ ઈશ્વર છે."</div>
                    </TheoryCard>
                    <TheoryCard>
                        <TheorySubHeading color="blue">૮. લોપચિહ્ન ( ' )</TheorySubHeading>
                        <TheoryText>શબ્દમાંથી કોઈ અક્ષર લોપ પામ્યો હોય ત્યારે મુકાય છે.</TheoryText>
                        <div className="text-sm text-gray-500 mt-2 italic">ઉદા: દા'ડો (દહાડો)</div>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    }
];
