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

export const chapter9Theory = [
    {
        title: "૯. સર્વનામ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="૯. સર્વનામ"
                    description="નામને બદલે વપરાતું પદ એટલે સર્વનામ"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>સર્વનામ એટલે શું?</TheorySubHeading>
                        <TheoryList color="#ffffff">
                            <TheoryListItem>
                                વાતચીતમાં કે વર્ણનમાં એક વાર 'નામ' કે 'સંજ્ઞા' પ્રયોજાય પછી વારંવાર એ 'સંજ્ઞા'નો પ્રયોગ અર્થગ્રહણમાં બાધક બને છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                તેથી એ ‘નામ(સંજ્ઞા)'ને બદલે વપરાતાં પદોને <strong>‘સર્વનામ'</strong> કહે છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                સર્વનામના ઉપયોગથી વાક્ય ટૂંકું અને સુદૃઢ બને છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                નામની જેમ સર્વનામને પણ જાતિ, વચન અને વિભક્તિ હોય છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                સર્વનામ જે નામને માટે વાક્યમાં વપરાયું હોય, તે નામનાં જાતિ અને વચન લે છે.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <HighlightBox title="સર્વનામના સાત પ્રકાર છે" type="info">
                    <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>પુરુષવાચક સર્વનામ</li>
                        <li>સાપેક્ષ સર્વનામ</li>
                        <li>પ્રશ્નવાચક સર્વનામ</li>
                        <li>દર્શક સર્વનામ</li>
                        <li>અનિશ્ચયવાચક સર્વનામ</li>
                        <li>સ્વવાચક સર્વનામ</li>
                        <li>અન્યોન્યવાચક સર્વનામ</li>
                    </ol>
                </HighlightBox>

                <TheoryHeading>સર્વનામના પ્રકારોની વિગત</TheoryHeading>

                {/* 1. પુરુષવાચક સર્વનામ */}
                <TheoryCard>
                    <TheorySubHeading>૧. પુરુષવાચક સર્વનામ</TheorySubHeading>
                    <TheoryText>
                        જુદી જુદી વ્યક્તિઓ કે પુરુષોને દર્શાવવા માટે વપરાતા સર્વનામ પુરુષવાચક કહેવાય છે. તેના ત્રણ પ્રકાર છે:
                    </TheoryText>

                    <TheoryGrid>
                        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                            <h4 style={{ color: '#1e40af', marginBottom: '8px' }}>પહેલો પુરુષ (બોલનાર)</h4>
                            <p><strong>એકવચન:</strong> હું, મારાથી, મારું, મારામાં, મેં.</p>
                            <p><strong>બહુવચન:</strong> અમે, અમને, અમારાથી, અમારું, અમારામાં, આપણે.</p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                            <h4 style={{ color: '#5b21b6', marginBottom: '8px' }}>બીજો પુરુષ (સાંભળનાર)</h4>
                            <p><strong>એકવચન:</strong> તું, તમે, તારાથી, તારું, તારામાં, તે.</p>
                            <p><strong>બહુવચન:</strong> તમે, તમને, તમારાથી, તમારું, તમારામાં.</p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
                            <h4 style={{ color: '#9d174d', marginBottom: '8px' }}>ત્રીજો પુરુષ (અન્ય)</h4>
                            <p><strong>એકવચન:</strong> તે, તેને, તેનાથી, તેનું, તેનામાં.</p>
                            <p><strong>બહુવચન:</strong> તેઓ, તેઓને, તેમનું, તેઓથી, તેમનાથી, તેઓનું, તેમનામાં.</p>
                        </div>
                    </TheoryGrid>
                </TheoryCard>

                {/* 2. સાપેક્ષ & 3. પ્રશ્નવાચક */}
                <TheoryGrid>
                    <TheoryCard>
                        <TheorySubHeading>૨. સાપેક્ષ સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            પ્રાણી કે પદાર્થના નામ(સંજ્ઞા)ને બદલે વપરાયેલાં એકબીજાની અપેક્ષા રાખતાં જોડકાં છે.
                        </TheoryText>
                        <HighlightBox type="note">
                            <strong>ઓળખ:</strong> જે...તે, જેવું...તેવું, જ્યાં...ત્યાં, જ્યારે...ત્યારે, જેમ...તેમ, જેટલું...તેટલું, જેવડું...તેવડું વગેરે.
                        </HighlightBox>
                        <div style={{ marginTop: '10px', fontSize: '0.95rem', color: '#4b5563' }}>
                            <strong>ઉદાહરણ:</strong> જે જાય તે ખાય. જેવું કરે તેવું પામે.
                        </div>
                    </TheoryCard>

                    <TheoryCard>
                        <TheorySubHeading>૩. પ્રશ્નવાચક સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            નામ(સંજ્ઞા)ને બદલે વપરાતાં અને પ્રશ્ન પૂછવા માટે ઉપયોગમાં લેવાતાં પદો.
                        </TheoryText>
                        <HighlightBox type="warn">
                            <strong>ઓળખ:</strong> કોણ, ક્યાં, ક્યારે, કેવી રીતે, કેટલું, કેવડું, કેમ, શા માટે, શીદ, શેનું વગેરે.
                        </HighlightBox>
                        <div style={{ marginTop: '10px', fontSize: '0.95rem', color: '#4b5563' }}>
                            <strong>ઉદાહરણ:</strong> મરીને શો લાભ? તમારે શું જોઈએ છે?
                        </div>
                    </TheoryCard>
                </TheoryGrid>

                {/* 4. દર્શક & 5. અનિશ્ચયવાચક */}
                <TheoryGrid>
                    <TheoryCard>
                        <TheorySubHeading>૪. દર્શક સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            પાસેની કે દૂરની પણ પ્રત્યક્ષ વસ્તુ કે વ્યક્તિ દર્શાવવા વપરાતાં સર્વનામ.
                        </TheoryText>
                        <p style={{ marginBottom: '8px' }}><strong>ઓળખ:</strong> આ (નજીકનું), એ, તે, પેલું (દૂરનું).</p>
                        <p><strong>ઉદાહરણ:</strong> આ કે પેલી? તે બહુ દયાળુ હતા. એ મંદિર નજીક જ છે.</p>
                    </TheoryCard>

                    <TheoryCard>
                        <TheorySubHeading>૫. અનિશ્ચયવાચક સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            જે સર્વનામ વડે ચોક્કસ વ્યક્તિ કે પદાર્થનો અર્થ સૂચવતો નથી.
                        </TheoryText>
                        <p style={{ marginBottom: '8px' }}><strong>ઓળખ:</strong> કંઈ, કેટલાક, સહુ, સૌ, ફલાણો, અન્ય, બીજું, કોઈક, કંઈક.</p>
                        <p><strong>ઉદાહરણ:</strong> તમે કાંઈ કહેશો? દરેકને માટે બાગ ખુલ્લો છે.</p>
                    </TheoryCard>
                </TheoryGrid>

                {/* 6. સ્વવાચક & 7. અન્યોન્યવાચક */}
                <TheoryGrid>
                    <TheoryCard>
                        <TheorySubHeading>૬. સ્વવાચક સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            જે સર્વનામ પુરુષવાચક સર્વનામની સાથે વપરાઈને તેને પોતાને ઓળખાવે છે.
                        </TheoryText>
                        <HighlightBox type="success">
                            <strong>ઓળખ:</strong> જાતે, પોતે, પંડે, ખુદ, મેળે, સ્વયં, નિજ.
                        </HighlightBox>
                        <p style={{ marginTop: '10px' }}><strong>ઉદાહરણ:</strong> અમે પોતે આમંત્રણ આપ્યું. રવિ નિજ કર તેની ઉપર ફેરવે છે.</p>
                    </TheoryCard>

                    <TheoryCard>
                        <TheorySubHeading>૭. અન્યોન્યવાચક સર્વનામ</TheorySubHeading>
                        <TheoryText>
                            પરસ્પર અથવા એકબીજાના અર્થમાં વપરાતાં સર્વનામ.
                        </TheoryText>
                        <HighlightBox type="info">
                            <strong>ઓળખ:</strong> અન્યોન્ય, પરસ્પર, એકબીજા, એકમેક.
                        </HighlightBox>
                        <p style={{ marginTop: '10px' }}><strong>ઉદાહરણ:</strong> તેઓ પરસ્પર બહુ માનની લાગણી ધરાવે છે. બધાંએ એકબીજાને મદદ કરવી જોઈએ.</p>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    }
];
