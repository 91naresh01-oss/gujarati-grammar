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

export const chapter7Theory = [
    {
        title: "૧. લિંગ વ્યવસ્થા (Gender)",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="🚻 લિંગ (જાતિ)"
                    description="નામની જાતિ ઓળખવાની પદ્ધતિ"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>ગુજરાતીમાં ત્રણ લિંગ છે:</TheorySubHeading>
                        <TheoryList color="#ffffff">
                            <TheoryListItem>
                                <strong>નર (પુલ્લિંગ):</strong> 'કેવો?' પ્રશ્નથી ઓળખાય.
                            </TheoryListItem>
                            <TheoryListItem>
                                <strong>નારી (સ્ત્રીલિંગ):</strong> 'કેવી?' પ્રશ્નથી ઓળખાય.
                            </TheoryListItem>
                            <TheoryListItem>
                                <strong>નાન્યતર (નપુંસકલિંગ):</strong> 'કેવું?' પ્રશ્નથી ઓળખાય.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryGrid minWidth="280px">
                    {/* Nar Jati */}
                    <TheoryCard style={{ background: '#ecfdf5', borderColor: '#a7f3d0' }}>
                        <TheoryHeading color="#0e7490">૧. નરજાતિ (પુલ્લિંગ)</TheoryHeading>
                        <p style={{ fontSize: '1.1rem', marginBottom: '10px', lineHeight: '1.6' }}>
                            પ્રત્યય: <strong style={{ color: '#0e7490' }}>'ઓ'</strong> | પ્રશ્ન: <strong style={{ color: '#0e7490' }}>'કેવો?'</strong>
                        </p>
                        <div style={{ fontSize: '1.1rem', color: '#1f2937', fontWeight: '500', background: '#fff', padding: '10px', borderRadius: '8px' }}>
                            સિંહ, છોકરો, કૂવો, લીમડો, ચોપડો.
                        </div>
                        <HighlightBox type="error">
                            <strong>અપવાદ:</strong> ધો, છો, બદબો (નારી), મોં (નાન્યતર).
                        </HighlightBox>
                    </TheoryCard>

                    {/* Nari Jati */}
                    <TheoryCard style={{ background: '#fdf2f8', borderColor: '#fbcfe8' }}>
                        <TheoryHeading color="#be185d">૨. નારીજાતિ (સ્ત્રીલિંગ)</TheoryHeading>
                        <p style={{ fontSize: '1.1rem', marginBottom: '10px', lineHeight: '1.6' }}>
                            પ્રત્યય: <strong style={{ color: '#be185d' }}>'ઈ', 'આ'</strong> | પ્રશ્ન: <strong style={{ color: '#be185d' }}>'કેવી?'</strong>
                        </p>
                        <div style={{ fontSize: '1.1rem', color: '#1f2937', fontWeight: '500', background: '#fff', padding: '10px', borderRadius: '8px' }}>
                            કેળ, આમલી, નીતિ, બાલા, કીર્તિ.
                        </div>
                        <HighlightBox type="error">
                            <strong>અપવાદ:</strong> દેવતા (નર), કવિ, રવિ, હાથી, પિતા.
                        </HighlightBox>
                    </TheoryCard>

                    {/* Nanyatar Jati */}
                    <TheoryCard style={{ background: '#f0f9ff', borderColor: '#bae6fd' }}>
                        <TheoryHeading color="#0369a1">૩. નાન્યતર (નપુંસક)</TheoryHeading>
                        <p style={{ fontSize: '1.1rem', marginBottom: '10px', lineHeight: '1.6' }}>
                            પ્રત્યય: <strong style={{ color: '#0369a1' }}>'ઉ'</strong> | પ્રશ્ન: <strong style={{ color: '#0369a1' }}>'કેવું?'</strong>
                        </p>
                        <div style={{ fontSize: '1.1rem', color: '#1f2937', fontWeight: '500', background: '#fff', padding: '10px', borderRadius: '8px' }}>
                            ઘેટું, ગાડું, લીંબુ, કૂતરું, કોળું.
                        </div>
                        <HighlightBox type="error">
                            <strong>અપવાદ:</strong> ઘઉં, લાડુ (નર); ઋતુ, આબરૂ (નારી).
                        </HighlightBox>
                    </TheoryCard>
                </TheoryGrid>
            </div>
        )
    },
    {
        title: "૨. વચન વ્યવસ્થા (Number)",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#115e59">🔢 વચન એટલે શું?</TheoryHeading>
                    <TheoryText>
                        એક વસ્તુ માટે <strong style={{ color: '#115e59' }}>એકવચન</strong> અને એકથી વધુ માટે <strong style={{ color: '#115e59' }}>બહુવચન</strong> વપરાય છે.
                    </TheoryText>

                    <TheorySubHeading color="#0f766e" bg="#ccfbf1">બહુવચનના નિયમો</TheorySubHeading>
                    <ul style={{ paddingLeft: '25px', fontSize: '1.15rem', lineHeight: '1.9', color: '#1f2937' }}>
                        <li>
                            <strong style={{ color: '#0f766e' }}>'ઓ' લગાડવાથી:</strong><br />
                            માણસ → માણસો, પર્વત → પર્વતો, નદી → નદીઓ.
                        </li>
                        <li>
                            <strong style={{ color: '#0f766e' }}>'ઓ' હોય તો 'આ'/'ઓ':</strong><br />
                            છોકરો → છોકરા/છોકરાઓ, ઘોडો → ઘોડા/ઘોડાઓ.
                        </li>
                        <li>
                            <strong style={{ color: '#0f766e' }}>'ઉ' હોય તો 'આં'/'ઓ':</strong><br />
                            છોકરું → છોકરાં/છોકરાંઓ, માછલું → માછલાં.
                        </li>
                        <li>
                            <strong style={{ color: '#0f766e' }}>સમાન રૂપ:</strong> (ગણી ન શકાય તેવી વસ્તુ)<br />
                            ઘણાં ઝાડ, ઘણી ગાય, પુષ્કળ પાણી.
                        </li>
                    </ul>
                </TheoryCard>
            </div>
        )
    }
];
