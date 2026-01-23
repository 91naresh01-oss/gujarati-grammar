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

export const chapter26Theory = [
    {
        title: "જોડણીનો પરિચય",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="જોડણી (Spelling/Orthography)" theme="purple" icon="✍️">
                    <TheoryText>
                        જે તે અક્ષર કે મૂળાક્ષરને લખવાની રીત એટલે <strong>જોડણી</strong>.
                        સામાન્ય રીતે ‘જોડણી’ શબ્દ સાંભળો ત્યારે તાણ અનુભવાય છે. જો તેના નિયમો સમજી શકાય તો ગુજરાતી લખવું સરળ બની જાય છે.
                    </TheoryText>
                    <TheoryText>
                        ગુજરાતીમાં <strong>તદ્ભવ</strong>, <strong>તત્સમ</strong> અને અન્ય (અંગ્રેજી, અરબી–ફારસી) ભાષાના શબ્દો છે.
                    </TheoryText>
                    <TheoryList>
                        <TheoryListItem>આપણી ગુજરાતી ભાષાની જનની <strong>સંસ્કૃત</strong> ભાષા છે (તત્સમ શબ્દો).</TheoryListItem>
                        <TheoryListItem>ઘણા શબ્દો સંસ્કૃતમાંથી પ્રાકૃત અને અપભ્રંશ થઈને ગુજરાતીમાં આવ્યા છે (તદ્ભવ શબ્દો).</TheoryListItem>
                        <TheoryListItem>જોડણીના નિયમો મહદંશે <strong>તદ્ભવ</strong> શબ્દોને લાગુ પડે છે.</TheoryListItem>
                    </TheoryList>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading>જોડણીના મુખ્ય આધાર (તદ્ભવ શબ્દો માટે)</TheoryHeading>
                    <TheoryList>
                        <TheoryListItem>ઉચ્ચારણગત</TheoryListItem>
                        <TheoryListItem>અક્ષર (શબ્દમાં સ્થાન)</TheoryListItem>
                        <TheoryListItem>જોડાક્ષર</TheoryListItem>
                        <TheoryListItem>અનુસ્વાર</TheoryListItem>
                        <TheoryListItem>અંગસાધક પ્રત્યય</TheoryListItem>
                    </TheoryList>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૧. ઉચ્ચારણગત નિયમો",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading>૧. શબ્દાંતે આવતો 'ઈ' (દીર્ઘ)</TheoryHeading>
                    <TheoryText>શબ્દાંતે આવતો 'ઈ' (અનુસ્વારવાળો કે અનુસ્વાર વગરનો) હંમેશા <strong>દીર્ઘ (ી)</strong> હોય છે.</TheoryText>
                    <HighlightBox title="ઉદાહરણ" type="example">
                        <TheoryText>સખી, ઘંટી, કીડી, શીશી, ગળી, ખાલી, ડાળી, મૂડી, દૂધી, સુખી, પૂંજી, કીકી, ખીલી, છીણી, ખૂની, ખૂબી, ચૂડી, છૂરી, છૂટી, ભિસ્તી, કુસ્તી, ઈસ્ત્રી, મિસ્ત્રી, તિજોરી, નિશાની, બિલાડી, અહીં, યહીં, જયહીં, ત્યહીં, દહીં, નહીં, મહીં.</TheoryText>
                    </HighlightBox>

                    <TheoryHeading>૨. શબ્દાંતે આવતો 'ઉ' (હ્રસ્વ)</TheoryHeading>
                    <TheoryText>શબ્દાંતે આવતો 'ઉ' (અનુસ્વારવાળો કે અનુસ્વાર વગરનો) હંમેશા <strong>હ્રસ્વ (ુ)</strong> હોય છે.</TheoryText>
                    <HighlightBox title="ઉદાહરણ" type="example">
                        <TheoryList>
                            <TheoryListItem>ખીસું, ધીમું, ચીકણું, ઉઘાડું, ઉગમણું, ગાઉ, ડાઘુ</TheoryListItem>
                            <TheoryListItem>ઝીણું, ધીરુ, ભૂરું, ટીપણું, ધૂતારું, આબુ, જંતુ, ઢજુ</TheoryListItem>
                            <TheoryListItem>ટીપું, ઊભું, ભૂસું, ઢીમડું, ઊજળું, આંસુ, જાદુ, બાજુ</TheoryListItem>
                            <TheoryListItem>ઢીલું, સૂકું, લીંગડુ, કૂતરું, કાજુ, ટાપુ, બાનુ</TheoryListItem>
                            <TheoryListItem>તીખું, ફૂદુ, બિલાડું, રીંગણું, ગૂમડું, ચીકુ, ડાકુ, બાપુ</TheoryListItem>
                        </TheoryList>
                    </HighlightBox>
                    <HighlightBox title="નોંધ" type="note">
                        <TheoryText>અપવાદ: સંસ્કૃત તત્સમ શબ્દો નીતિ, રીતિ, પ્રીતિ, સૃષ્ટિ વગેરેને જુદો પ્રત્યય લાગ્યો હોવાથી હ્રસ્વ 'ઇ' આવે.</TheoryText>
                    </HighlightBox>

                    <TheoryHeading>૩. 'ય' અક્ષર પહેલાં આવતો 'ઇ'</TheoryHeading>
                    <TheoryText>'ય' અક્ષર પહેલાં આવતો 'ઇ' હંમેશાં <strong>હ્રસ્વ (િ)</strong> હોય છે.</TheoryText>
                    <HighlightBox title="ઉદાહરણ" type="example">
                        <TheoryText>ફરજિયાત, ખાબોચિયું, ગુણિયલ, અભાગિયો, સાલિયાળું, જરૂરિયાત, ચિચિયારી, નખ્ખોદિયું, પ્રિય, દરિયો, સાથિયો, ઘડિયાળ, વરિયાળી, ખાસિયત, હોશિયાર, અઠવાડિયું, કડિયો, કાઠિયાવાડ, નડિયાદ.</TheoryText>
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. અક્ષર (શબ્દમાં સ્થાન) આધારિત નિયમો",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading>(૧) એકાક્ષરી શબ્દ</TheoryHeading>
                    <TheoryText>સામાન્ય રીતે અનુસ્વાર વગરના એકાક્ષરી શબ્દોમાં આવતાં <strong>‘ઈ’ કે ‘ઊ’ દીર્ઘ</strong> હોય છે.</TheoryText>
                    <TheoryList>
                        <TheoryListItem><strong>દીર્ઘ 'ઈ':</strong> ઘી, ફી, બી, જી, પી, સ્ત્રી, થી, શ્રી</TheoryListItem>
                        <TheoryListItem><strong>દીર્ઘ ‘ઊ’:</strong> સ્ક્રૂ, થૂ, છૂ, જૂ, દૂ, ભો, રૂ, બૂ</TheoryListItem>
                        <TheoryListItem><strong>અપવાદ:</strong> સાનુનાસિક હોય તો હ્રસ્વ (હું, શું, તું, છું, નું).</TheoryListItem>
                    </TheoryList>

                    <TheoryHeading>(૨) બે અક્ષરના શબ્દ</TheoryHeading>
                    <TheoryText>સામાન્ય રીતે બે અક્ષરના શબ્દમાં <strong>પહેલો અક્ષર દીર્ઘ</strong> હોય છે.</TheoryText>
                    <TheoryList>
                        <TheoryListItem><strong>દીર્ઘ 'ઈ':</strong> ગીધ, ચીજ, જીત, ફીણ, મીણ, રીત, શીખ, શીરો, હીરો, છીણી, ખીલી, ઈદ, કીડી, ખીણ, ઠીક, તીખું, નીચું, પીંછું, ફીકું, બીબું, બીક, ભીલ, ઢીલ, ભીખ, ચીજ, ખીર, ગીચ, ચીલો, પીળું, સીધું, હીંચ, દીવો, સીટી.</TheoryListItem>
                        <TheoryListItem><strong>દીર્ઘ ‘ઊ’:</strong> ઊઠ, ઊડ, ઊન, કૂચ, ચૂનો, દૂધ, ધૂળ, ફૂલ, ફૂગ, દૂર, બૂચ, જૂન, ચૂલો, ઊભું, કૂવો, ખૂણો, હૂસ, તૂરું, નૂર, પૂર, ફૂદું, બૂમ, ભૂખ, ભૂત, કૂખ, ભૂકી, જૂથ, ભૂરું, સૂકું, કૂણું, ચૂક, જૂનુ, મૂછ, રૂપું, પૂઠું, ચૂડો, બૂચું, મૂડી.</TheoryListItem>
                    </TheoryList>

                    <TheoryHeading>(૩) ત્રણ અક્ષરના શબ્દ</TheoryHeading>
                    <TheoryText>
                        સામાન્ય રીતે પહેલો અને બીજો બન્ને અક્ષર સરખા નહીં હોય (એટલે કે બંને હ્રસ્વ કે બંને દીર્ઘ નહીં હોય).<br />
                        <strong>નિયમ:</strong> જો પહેલો અક્ષર હ્રસ્વ તો બીજો દીર્ઘ, અને પહેલો દીર્ઘ તો બીજો હ્રસ્વ.
                    </TheoryText>

                    <TheorySubHeading color="blue">A. પહેલો હ્રસ્વ + બીજો દીર્ઘ</TheorySubHeading>
                    <TheoryList>
                        <TheoryListItem><strong>'ઈ':</strong> ઈનામ, ઇરાદો, કિનારો, વિદાય, વિસાત, શિકાર, દિવેટ, દિવેલ, બિલાડી, સિસોટી, ભિખારી, ઇલાજ, જિરાફ, તિરાડ, નિંભાડો, નિશાળ, કિચૂડો, તિબેટ, વિભૂતિ, સિનેમા, રિવેટ, ટિટોડી, તિજોરી, લિસોટો, બિજોરું, બિસ્કૂટ, દિવાળી.</TheoryListItem>
                        <TheoryListItem><strong>'ઉ':</strong> મુહૂર્ત, ઉકેલ, ઉમેદ, તુવેર, સુડોળ, ઉધાર, ઉનાળો, કુહાડી, ગુલામ, સુથાર, ધુમાડો, દુકાન, દુકાળ, ઉજાણી, ગુલાબી, ધુળેટી, ફૂલેકું, લુહાર, સુરાહી, ઉધેઈ, સુરીલું, ઉશીકું, ધુતારો.</TheoryListItem>
                    </TheoryList>

                    <TheorySubHeading color="green">B. પહેલો દીર્ઘ + બીજો હ્રસ્વ</TheorySubHeading>
                    <TheoryList>
                        <TheoryListItem><strong>'ઈ':</strong> કીમત, શીતળ, ચીપિયો, ધીરજ, કીટલી, દીકરી, ચીકણું, ભીલડી, નીલમ, દીકરો, કીચડ, ચીભડું, ચેવટ, ડીઝલ, દીપડો, લીમડો, કીમિયો, મીણિયું, પીળિયો, ટીણિયું.</TheoryListItem>
                        <TheoryListItem><strong>'ઊ':</strong> ઊપજ, ઊથલો, પૂનમ, સૂરત, ઊધઈ, સૂતળી, ઊજળું, ઊલટું, દૂઝણું, કૂતરું, રૂપિયો, સૂપડું, ભૂસકો, કૂકડો, ઊમરો, કૂથલી, ખૂમચો, સૂરજ, બૂઢિયો, દૂધિયું, પૂળિયું, ઘૂમટો, પૂતળી.</TheoryListItem>
                    </TheoryList>

                    <TheorySubHeading color="purple">C. અન્ય નિયમો</TheorySubHeading>
                    <TheoryList>
                        <TheoryListItem><strong>છેલ્લે આવતી 'ઈ' દીર્ઘ:</strong> લાકડી, ચકલી, મરજી, બાજરી, ગિરદી, બિલાડી, વીજળી, પાવલી, ગરમી, કૂતરી, જલદી, ભીલડી, બકરી, મોરલી, ખેલાડી, બંદગી, રોટલી, કેટલી.</TheoryListItem>
                        <TheoryListItem><strong>છેલ્લે આવતો 'ઉ' હ્રસ્વ:</strong> સૂપડું, ચીભડું, કમાઉ, અનેરું, ખોખલું, વટાઉ, મરચું, વહાલું, કૂતરું, શીખાઉ, કારેલું, મધુરું.</TheoryListItem>
                    </TheoryList>

                    <TheoryHeading>(૪) ચાર કે તેથી વધુ અક્ષરના શબ્દ</TheoryHeading>
                    <TheoryText>ચાર કે પાંચ અક્ષરના શબ્દમાં <strong>પહેલો અક્ષર હ્રસ્વ</strong> હોય છે.</TheoryText>
                    <HighlightBox title="ઉદાહરણ" type="example">
                        <TheoryText>હિલચાલ, કિફાયતી, ઈજનેર, ઉકળાટ, ઉમરાવ, ચિતરામણ, ભુલામણી, સુવાવડ, ઈનસાફ, ઉજાગરો, ઈજારદાર, પિરસણિયો, ખિસકોલી, પિચકારી, ઇમારત, ઉધરસ, ઇઝરાયલ, ઉઘરાણિયો, કુતૂહલ, નિસરણી, ઈલકાબ, ઉપરાંત, ઇસપગોળ, ઉતરામણ, કિરતાર, ઈકોતેર, નિમણૂક, ઉપલક, ગિરફતાર, પુરબહાર, મુસલમાન, યુરેનિયમ, સુડતાળીસ, સિવડામણ, સુપરિન્ટેન્ડેન્ટ, સુપરવાઇઝર, મિલકત, શિખામણ, ચુકવણી, ઉકરડો, મિજબાની, ગિરનાર, સુતરાઉ, કિનખાબ, કિલકિલાટ, ગુલમોર, વિલાયત, ઉત્તરામણ, શિફારસ, ટિટિયારો, હુલામણું, જિમખાનું, જિંદગાની, તિકડમ, શિરામણ, સિલસિલો, રિસામણી, કિકિયારી, ખિજવણી, જિજીવિષા, લિખિતંગ, બિરાજમાન, ચિનગારી, શિરસ્તેદાર, ઉજવણી, નુકસાન, મુંઝવણ, સુખિયારું, સુફિયાણું, મુખવટો, ચુપકીદી, પુરવણી, ગુણિયલ, ખુશખબર, કુરસીનામું, કુમકુમ, બુલબુલ, મુખત્યાર, ઉજળિયાત, ગુસપુસ, બુડથલ, હુક્કાપાણી.</TheoryText>
                    </HighlightBox>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. જોડાક્ષર અને અનુસ્વાર",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading>૩. જોડાક્ષર</TheoryHeading>
                    <TheoryText>મૂળ શબ્દમાં જોડાક્ષર પહેલાંના <strong>'ઈ' કે ‘ઉ’ હ્રસ્વ</strong> હોય છે.</TheoryText>
                    <TheoryTable>
                        <TheoryTableHeader headers={['ઈ (હ્રસ્વ)', 'ઉ (હ્રસ્વ)']} />
                        <tbody>
                            <TheoryTableRow cells={['ઈસ્ત્રી, ચિઠ્ઠી, ડિગ્રી, રિક્ષા, લિજ્જત, પિસ્તાળીસ, બિસ્તરો', 'ઉલ્લુ, તુક્કો, હુન્નર, ભુટ્ટો, કુપ્પી, મુન્નો, શુદ્ધ']} />
                            <TheoryTableRow cells={['કિસ્સો, જિલ્લો, પિસ્તા, લિફ્ટ, નિશ્વાસ, શિસ્ત, ઇસ્તરી', 'કુસ્તી, સુધ્ધાં, ઉશ્કેરાટ, ઘુમ્મટ, ગુચ્છો, હુક્કો, રુક્કો']} isEven />
                            <TheoryTableRow cells={['ઈજજત, કિસ્મત, વિશ્વ, મિસ્ટર, લિસ્ટ, ખિસ્સુ, પિસ્તોલ', 'ગુસ્સો, સુસ્તી, જુસ્સો, ધુમ્મસ, ગુસ્તી, કુત્તો, ખુલ્લું']} />
                            <TheoryTableRow cells={['ફિક્કું, બિલ્લો, સિક્કલ, હિમ્મત', 'ફુગ્ગો, મુશ્કેલી, ઉસ્તાદ, હુલ્લડ, બુટ્ટી, મુઠ્ઠી, બુઠું, લુચ્ચો']} isEven />
                        </tbody>
                    </TheoryTable>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading>૪. અનુસ્વાર</TheoryHeading>
                    <TheorySubHeading>૧. તીવ્ર અનુસ્વાર (જોડાક્ષર જેવો)</TheorySubHeading>
                    <TheoryText>
                        જ્યારે અનુસ્વારનો ઉચ્ચાર સ્પષ્ટ રીતે અડધા વ્યંજન જેવો થાય, ત્યારે તેની <strong>પહેલાનો સ્વર હ્રસ્વ</strong> લખાય છે.
                    </TheoryText>
                    <TheoryList>
                        <TheoryListItem><strong>'ઇ' :</strong> ઠિંગુજી, હિંડોળો, પિંડુ, સિંધી, લિંબોળી, હિંમત, શિંગડું, ખિંડ, જિંગા, જિંદગી, સિંધવ, ટિંબો, હિંગ.</TheoryListItem>
                        <TheoryListItem><strong>'ઉ' :</strong> કુંજો, કુંભાર, ગુંબજ, ચુંગી, કુંભ, ગુંડો, ઉંબરો, ઉંદર, કુંડળ, ગુંજાશ, ઉંબી, મુંજ, બુંદી, ઝુંડ, કુંદન, ગુંદર, ગુંજ, ગુંદો, દુંગો, કુંડ.</TheoryListItem>
                    </TheoryList>

                    <TheorySubHeading>૨. કોમળ અનુસ્વાર (નાસિક્ય સ્વર)</TheorySubHeading>
                    <TheoryText>
                        જ્યારે અનુસ્વાર માત્ર નાકમાંથી બોલાતો હોય, ત્યારે તેની <strong>પહેલા આવતા 'ઈ-ઊ' દીર્ઘ</strong> હોય છે.
                    </TheoryText>
                    <TheoryList>
                        <TheoryListItem><strong>'ઈ' :</strong> છીંક, રીંછ, વીંછી, હીંચકો, પીંછી, ખીંટી, રીંગણ, જીંડવું, ભીંત, વીંટી, લીંપણ, પીંજરું.</TheoryListItem>
                        <TheoryListItem><strong>'ઊ' :</strong> ગૂંથ, છૂંદો, હૂંફ, ઊંધું, લૂંટારો, ઊંઘ, ઘૂંટ, સૂંઠ, પૂંછડી, પૂંજી, ખૂંટ, ઊંચું, હૂંડી.</TheoryListItem>
                    </TheoryList>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૪. અંગસાધક પ્રત્યય",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading>(અ) હ્રસ્વત્વ ધરાવતા પૂર્વ પ્રત્યય (Prefixes)</TheoryHeading>
                    <TheoryGrid minWidth="200px">
                        <HighlightBox type="note" title="અતિ"><TheoryText>અતિરેક, અતિશય, અતિસાર</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="ઉપ"><TheoryText>ઉપકથા, ઉપગ્રહ, ઉપમાન</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="સુ"><TheoryText>સુપુત્ર, સુદૃઢ, સુગંધ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="કુ"><TheoryText>કુવિચાર, કુસંસ્કાર, કુસંપ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="અનુ"><TheoryText>અનુકૂળ, અનુકરણ, અનુભૂતિ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="નિઃ/નિ/નિર્"><TheoryText>નિઃશબ્દ, નિષ્કામ, નિર્મળ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="વિ"><TheoryText>વિકેન્દ્રિત, વિસર્જન, વિદેશ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="પરિ"><TheoryText>પરિક્રમા, પરિણામ, પરિચય</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="પ્રતિ"><TheoryText>પ્રતિકૃતિ, પ્રતિહિંસા, પ્રતિબિંબ</TheoryText></HighlightBox>
                        <HighlightBox type="note" title="અધિ/અભિ"><TheoryText>અધિકાર, અભિનવ, અભિમાન</TheoryText></HighlightBox>
                    </TheoryGrid>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading>(બ) પર પ્રત્યય (Suffixes)</TheoryHeading>
                    <TheoryList>
                        <TheoryListItem><strong>ઇક/ઇકા (હ્રસ્વ):</strong> પાક્ષિક, અઠવાડિક, સામાજિક, ગાયિકા, માનસિક, વાર્ષિક, દૈનિક, પ્રામાણિક, વૈજ્ઞાનિક, ધાર્મિક, આર્થિક, સામયિક, ભૌગોલિક, શારીરિક, નવલિકા, નૈતિક.</TheoryListItem>
                        <TheoryListItem><strong>ઇત/ઇતા (હ્રસ્વ):</strong> ગણિત, નિર્વાસિત, પરિણીત, તેજસ્વિતા, નિયમિત, રચિત, લેખિત, ખંડિત, મુદ્રિત, અપેક્ષિત, કવિતા, સરિતા.</TheoryListItem>
                        <TheoryListItem><strong>ઇલ/ઇલા (હ્રસ્વ):</strong> ઊર્મિલ, કોકિલા, પંકિલ, ઊર્મિલા, જટિલ, સલિલ, રમિલા.</TheoryListItem>
                        <TheoryListItem><strong>ઇની/ઇણી (હ્રસ્વ 'ઈ', દીર્ઘ 'ઈ'):</strong> કામિની, વિદ્યાર્થીની, રોહિણી, દામિની, તપસ્વિની, વિરહિણી, પદ્મિની, રાગિણી, તરંગિણી.</TheoryListItem>
                        <TheoryListItem><strong>ઇષ્ઠ (હ્રસ્વ):</strong> ગર્વિષ્ઠ, ઘનિષ્ઠ, વરિષ્ઠ, સ્વાદિષ્ઠ, ધર્મિષ્ઠા.</TheoryListItem>
                        <TheoryListItem><strong>ઈય (દીર્ઘ):</strong> ભારતીય, નાટકીય, પૂજનીય. (અપવાદ: <strong>અર્થી</strong> - સેવાર્થી, સ્વાર્થી; <strong>કર્મી</strong> - કુકર્મી; <strong>દર્શી</strong> - દૂરદર્શી).</TheoryListItem>
                    </TheoryList>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "વિશેષ નિયમો અને અપવાદો",
        content: (
            <div className="modern-theory-wrapper">
                <TheoryCard>
                    <TheoryHeading>જોડણી અંગે વિશેષ નિયમો</TheoryHeading>
                    <TheoryList>
                        <TheoryListItem><strong>ભાર આવે ત્યાં દીર્ઘ:</strong> દાગીનો, નતીજો, નમૂનો, ઝેરીલો, અંગૂઠો, અરડૂસો.</TheoryListItem>
                        <TheoryListItem><strong>‘રેફ’ પૂર્વે દીર્ઘ (મોટે ભાગે):</strong> કીર્તિ, સ્ફૂર્તિ, ઊર્જા, સૂર્ય, મૂર્ખ, ઊર્ધ્વ, શીર્ષ, ચૂર્ણ. (અપવાદ: ઉર્વશી, કારકિર્દી).</TheoryListItem>
                        <TheoryListItem><strong>મધ્યાક્ષરમાં દીર્ઘ:</strong> જમીન, વકીલ, ખજૂર, ગરીબ, જરૂર, મજૂર, ઝનૂન, કારીગર, કબૂતર, હકૂમત.</TheoryListItem>
                        <TheoryListItem><strong>અંત્ય સિવાયના સ્થાને સાનુનાસિક 'ઊ' દીર્ઘ:</strong> ઊંટ, ઘૂંટ, ઘૂંઘટ, મૂંઝવણ, ઊંઘ, ચૂંક, ઊંચાણ, ચૂંટણી.</TheoryListItem>
                        <TheoryListItem><strong>અંત્ય સિવાયના સ્થાને સાનુનાસિક 'ઈ' દીર્ઘ:</strong> વીંટી, લીંપણ, ભીંત, ઇંટાળો, ચીંદરડી, વીંછી, ભીંસ.</TheoryListItem>
                        <TheoryListItem><strong>પ્રેરક/કર્મણિ રૂપમાં:</strong> મૂક – મુકાવ, ભૂલ – ભુલાવ, ઊઘડ – ઉઘાડ, ઊતર – ઉતરાવ.</TheoryListItem>
                        <TheoryListItem><strong>શબ્દને અંતે 'નિ' દીર્ઘ 'ઈ' થાય:</strong> (અપવાદ: કુલીન, મલિન, ગ્રામીણ, નવીન - 'ઈન' પ્રત્યય).</TheoryListItem>
                        <TheoryListItem><strong>'અધીન', 'ઇન્દ્ર', 'ઈશ' માં દીર્ઘ:</strong> પરાધીન, રવીન્દ્ર, જગદીશ, સત્તાધીશ.</TheoryListItem>
                        <TheoryListItem><strong>'ઇક્ષા' માં દીર્ઘ:</strong> પરીક્ષક, પરીક્ષા, સમીક્ષક.</TheoryListItem>
                        <TheoryListItem><strong>‘વતી’ કે ‘મતી’ લાગે ત્યારે દીર્ઘ:</strong> સરસ્વતી, કલાવતી, રૂપમતી.</TheoryListItem>
                        <TheoryListItem><strong>‘નિ’ કે ‘ટિ’ વાળા નામ હ્રસ્વ:</strong> ગ્લાનિ, પુષ્ટિ, સૃષ્ટિ, હાનિ, વૃષ્ટિ.</TheoryListItem>
                        <TheoryListItem><strong>શ્રેષ્ઠતા દર્શક 'ઇષ્ઠ' માં 'ઇ' હ્રસ્વ:</strong> કનિષ્ઠ, ધર્મનિષ્ઠ, ગર્વિષ્ઠ.</TheoryListItem>
                        <TheoryListItem><strong>નારીજાતિ ભાવવાચક નામ અંતે 'ઇ' હ્રસ્વ:</strong> ગતિ, જાતિ, નીતિ, પ્રીતિ, શાંતિ, સ્તુતિ.</TheoryListItem>
                    </TheoryList>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading>વૈકલ્પિક જોડણી (બંને સાચા)</TheoryHeading>
                    <TheoryGrid>
                        <TheoryText>ઉંમર – ઉમર</TheoryText>
                        <TheoryText>ખનિજ – ખનીજ</TheoryText>
                        <TheoryText>જગા – જગ્યા</TheoryText>
                        <TheoryText>ઓશીકું – ઓસીકું</TheoryText>
                        <TheoryText>ખરચ – ખર્ચ</TheoryText>
                        <TheoryText>જાપતો – જપ્તો</TheoryText>
                        <TheoryText>કંકોતરી – કંકોત્રી</TheoryText>
                        <TheoryText>ગુજરાત – ગૂજરાત</TheoryText>
                        <TheoryText>પેનસિલ – પેન્સિલ</TheoryText>
                        <TheoryText>દરમિયાન – દરમ્યાન</TheoryText>
                        <TheoryText>નજદીક – નજીક</TheoryText>
                        <TheoryText>પ્રમાણિક – પ્રામાણિક</TheoryText>
                        <TheoryText>દસક્ત – દસ્કત</TheoryText>
                        <TheoryText>નિકાશ – નિકાસ</TheoryText>
                        <TheoryText>ફળદ્રુપ – ફળદ્રૂપ</TheoryText>
                        <TheoryText>દુઆ – દુવા</TheoryText>
                        <TheoryText>બરાબર – બરોબર</TheoryText>
                        <TheoryText>બટાકા – બટાટા</TheoryText>
                        <TheoryText>મથુરા – મથૂરા</TheoryText>
                        <TheoryText>બાલટી – બાલદી</TheoryText>
                        <TheoryText>મજા – મઝા</TheoryText>
                        <TheoryText>મરદ – મર્દ</TheoryText>
                        <TheoryText>મસીદ – મસ્જિદ</TheoryText>
                        <TheoryText>મૂરખ – મૂર્ખ</TheoryText>
                        <TheoryText>મલેરિયા – મેલેરિયા</TheoryText>
                        <TheoryText>મોંધું – મોંઘું</TheoryText>
                        <TheoryText>લહરિ – લહરી</TheoryText>
                        <TheoryText>લૂંટવું – લૂટવું</TheoryText>
                        <TheoryText>રસાયણ – રસાયન</TheoryText>
                        <TheoryText>લિપિ – લિપી</TheoryText>
                        <TheoryText>રાષ્ટ્રિય – રાષ્ટ્રીય</TheoryText>
                        <TheoryText>વિગત – વીગત</TheoryText>
                        <TheoryText>વિશે – વિષે</TheoryText>
                        <TheoryText>સનદ – સનંદ</TheoryText>
                        <TheoryText>વિનંતી – વિનંતિ</TheoryText>
                        <TheoryText>હપતો – હફતો</TheoryText>
                        <TheoryText>સુતાર – સુથાર</TheoryText>
                        <TheoryText>સૂચિ – સૂચી</TheoryText>
                        <TheoryText>સ્વાદિષ્ટ – સ્વાદિષ્ઠ</TheoryText>
                        <TheoryText>હંમેશ – હંમેશાં</TheoryText>
                        <TheoryText>હિચકારું – હીચકારું</TheoryText>
                        <TheoryText>ખુરશી – ખુરસી</TheoryText>
                        <TheoryText>આમલી – આંબલી</TheoryText>
                        <TheoryText>અડધું – અરધું</TheoryText>
                        <TheoryText>અથાક – અથાગ</TheoryText>
                        <TheoryText>એંશી – એંસી</TheoryText>
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "સામાન્ય ભૂલો અને શબ્દભેદ",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard heading="જોડણીમાં સામાન્ય રીતે થતી ભૂલો" theme="red" icon="❌">
                    <TheoryTable>
                        <TheoryTableHeader headers={['અશુદ્ધ', 'શુદ્ધ', 'અશુદ્ધ', 'શુદ્ધ']} />
                        <tbody>
                            <TheoryTableRow cells={['નિવીદા', 'નિવિદા', 'લાયબ્રેરી', 'લાઈબ્રેરી']} />
                            <TheoryTableRow cells={['નીતિવાન', 'નીતિમાન', 'લાયસન્સ', 'લાઈસન્સ']} isEven />
                            <TheoryTableRow cells={['અખત્રો', 'અખતરો', 'નુકશાન', 'નુકસાન']} />
                            <TheoryTableRow cells={['લેખિત', 'લિખિત', 'ઉઠાવગીર', 'ઉઠાઉગીર']} isEven />
                            <TheoryTableRow cells={['નૈઋત્ય', 'નૈર્ઋત્ય', 'લોટ્રી', 'લોટરી']} />
                            <TheoryTableRow cells={['અગત્યતા', 'અગત્ય', 'ઉપજ', 'ઊપજ']} isEven />
                            <TheoryTableRow cells={['પત્થર', 'પથ્થર', 'વૈવિધ', 'વૈવિધ્ય']} />
                            <TheoryTableRow cells={['અગવડતા', 'અગવડ', 'ઉપયોગી', 'ઉપયોગી']} isEven />
                            <TheoryTableRow cells={['પત્રકારિત્વ', 'પત્રકારત્વ', 'વ્યાજબી', 'વાજબી']} />
                            <TheoryTableRow cells={['અદ્ભૂત', 'અદ્ભુત', 'પધ્ધતિ', 'પદ્ધતિ']} isEven />
                            <TheoryTableRow cells={['શિવણ', 'સીવણ', 'અધિક્ષક', 'અધીક્ષક']} />
                            <TheoryTableRow cells={['ઓગસ્ટ', 'ઑગસ્ટ', 'પરીવર્તનશીલ', ' પરિવર્તનશીલ']} isEven />
                            <TheoryTableRow cells={['સમીતિ', 'સમિતિ', 'અતર્ધ્યાન', 'અંતર્ધાન']} />
                            <TheoryTableRow cells={['સર્કસ', 'સરકસ', 'આધ્ય', 'આદ્ય']} isEven />
                            <TheoryTableRow cells={['કનિષ્ટ', 'કનિષ્ઠ', 'પુનરોધ્ધર', 'પુનરુદ્ધાર']} />
                            <TheoryTableRow cells={['સાયકલ', 'સાઈકલ', 'આયુર્વેદિ', 'આયુર્વેદિક']} isEven />
                            <TheoryTableRow cells={['કમિશ્રર', 'કમિશનર', 'પોષ્ટ', 'પોસ્ટ']} />
                            <TheoryTableRow cells={['સીનેમા', 'સિનેમા', 'આરઝૂ', 'આરજૂ']} isEven />
                            <TheoryTableRow cells={['કાર્ટૂન', ' કારટૂન', 'પ્રલ્હાદ', 'પ્રહલાદ']} />
                            <TheoryTableRow cells={['હુંડી', 'હૂંડી', 'આલ્હાદ', 'આહ્લાદ']} isEven />
                            <TheoryTableRow cells={['કાવત્રુ', 'કાવતરું', 'પ્રિયવંદા', 'પ્રિયંવદા']} />
                            <TheoryTableRow cells={['બહેન (બેન)', 'બહેન', 'ઈલ્મી', 'ઈલમી']} isEven />
                            <TheoryTableRow cells={['જાગ્રતિ', 'જાગૃતિ', 'મંજુરી', 'મંજૂરી']} />
                            <TheoryTableRow cells={['મંઝિલ', 'મંજિલ', 'કિલ્લોલ', 'કલ્લોલ']} isEven />
                            <TheoryTableRow cells={['જીંદગી', 'જિંદગી', 'મનોરમ્ય', 'મનોરમા']} />
                            <TheoryTableRow cells={['માપબંદી', 'માપબંધી', 'કોષ્ટક', 'કોષ્ઠક']} isEven />
                            <TheoryTableRow cells={['જીલ્લો', 'જિલ્લો', 'મુલ્તવી', 'મુલતવી']} />
                            <TheoryTableRow cells={['ખાતુ', 'ખાતું', 'જુથબંદી', 'જૂથબંધી']} isEven />
                            <TheoryTableRow cells={['ખાત્રી', 'ખાતરી', 'જૂબાની', 'જુબાની']} />
                            <TheoryTableRow cells={['ખિસ્સાકાત્રુ', 'ખિસ્સાકાતરું', 'ટિકીટ', 'ટિકિટ']} isEven />
                            <TheoryTableRow cells={['ગણત્રી', 'ગણતરી', 'ગર્વનર', ' ગવર્નર']} />
                            <TheoryTableRow cells={['ડ્રાયવર', 'ડ્રાઈવર', 'ગિર્દી', 'ગિરદી']} isEven />
                            <TheoryTableRow cells={['તંગદીલી', 'તંગદિલી', 'ગ્રહપતિ', 'ગૃહપતિ']} />
                            <TheoryTableRow cells={['તત્વ', 'તત્ત્વ', 'ગ્રહસ્થ', 'ગૃહસ્થ']} isEven />
                            <TheoryTableRow cells={['તાલિમ', 'તાલીમ', 'ગ્રેચ્યુઇટી', 'ગ્રેજ્યુઇટી']} />
                            <TheoryTableRow cells={['ત્યા', 'તથા', 'ઘેરહાજર', 'ગેરહાજર']} isEven />
                            <TheoryTableRow cells={['દિવાનીકોર્ટ', 'દીવાનીકોર્ટ', 'ચિન્હ', 'ચિહ્ન']} />
                            <TheoryTableRow cells={['નસત્તર', ' મસ્તર', 'ચૂકવણી', 'ચુકવણી']} isEven />
                            <TheoryTableRow cells={['નર્ક', 'નરક', 'ચોકખું', 'ચોખ્ખું']} />
                            <TheoryTableRow cells={['નહિં', 'નહીં', 'જનમટીપ', 'જન્મટીપ']} isEven />
                            <TheoryTableRow cells={['નાકાબંદી', ' નાકાબંધી', 'જમાબંધી', ' જમાબંદી']} />
                            <TheoryTableRow cells={['નાણાંકીય', 'નાણાકીય', 'જયંતિ', ' જયંતી']} isEven />
                            <TheoryTableRow cells={['નિંદ્રા', 'નિદ્રા', 'જલ્દી', 'જલદી']} />
                            <TheoryTableRow cells={['મોજાર', 'મોઝાર', 'નિધી', 'નિધિ']} isEven />
                            <TheoryTableRow cells={['રુષિ', 'ઋષિ', 'નિરસ', 'નીરસ']} />
                            <TheoryTableRow cells={['રુતુ', 'ઋતુ', 'નિરિક્ષક', 'નિરીક્ષક']} isEven />
                        </tbody>
                    </TheoryTable>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading>અંગ્રેજી શબ્દોની જોડણી</TheoryHeading>
                    <TheoryList>
                        <TheoryListItem><strong>'i' આવે ત્યાં હ્રસ્વ 'ઇ':</strong> પોલિસી, ટાઇપિસ્ટ, યુનિટ, સ્યુટ.</TheoryListItem>
                        <TheoryListItem><strong>'ee', 'ea', 'ie' આવે ત્યાં દીર્ઘ 'ઈ':</strong> સીટી, ફી, બીયર.</TheoryListItem>
                        <TheoryListItem><strong>'oo' આવે ત્યાં દીર્ઘ 'ઊ':</strong> સ્કૂલ, ફૂટ, હૂક.</TheoryListItem>
                        <TheoryListItem>શબ્દના અંતે 'ઈ' ની માત્રા આવે ત્યાં દીર્ઘ 'ઈ': યુનિવર્સિટી.</TheoryListItem>
                        <TheoryListItem>પહોળા ઉચ્ચારણ માટે <strong>'ઑ'</strong>: કૉફી, ઑફિસ.</TheoryListItem>
                    </TheoryList>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading>જોડણીભેદે અર્થભેદ (Homophones)</TheoryHeading>
                    <TheoryGrid minWidth="300px">
                        <HighlightBox type="note"><TheoryText><strong>અકસ્માત્</strong> (એકાએક) — <strong>અકસ્માત</strong> (બનાવ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અફર</strong> (અચલ) — <strong>અફળ</strong> (નિષ્ફળ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અભિનય</strong> (અદાકારી) — <strong>અભિનવ</strong> (નવું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અસ્ત્ર</strong> (ફેંકવાનું) — <strong>શસ્ત્ર</strong> (હાથથી લડવાનું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>આકરું</strong> (કઠણ) — <strong>આકળું</strong> (ગુસ્સે થનાર)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>આર</strong> (કાંજી) — <strong>આળ</strong> (આરોપ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ઇનામ</strong> (બક્ષિશ) — <strong>ઈમાન</strong> (પ્રામાણિકતા)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ઉપહાર</strong> (ભેટ) — <strong>ઉપાહાર</strong> (નાસ્તો)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કઠોર</strong> (નિર્દય) — <strong>કઠોળ</strong> (અનાજ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કમર</strong> (કેડ) — <strong>કમળ</strong> (ફૂલ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અપેક્ષા</strong> (ઇચ્છા) — <strong>ઉપેક્ષા</strong> (તિરસ્કાર)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અબજ</strong> (100 કરોડ) — <strong>અજબ</strong> (આશ્ચર્ય)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અલિ</strong> (સખી) — <strong>અલી</strong> (ભમરો)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અંશ</strong> (ભાગ) — <strong>અંસ</strong> (માપ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>આજ</strong> (આજે) — <strong>આ જ</strong> (આ+જ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>આરસ</strong> (સંગેમરમર) — <strong>આળસ</strong> (સુસ્તી)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ઉદર</strong> (પેટ) — <strong>ઉંદર</strong> (પ્રાણી)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કડુ</strong> (ઔષધિ) — <strong>કડું</strong> (ઘરેણું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કૂચી</strong> (મહોલ્લો) — <strong>કૂંચી</strong> (ચાવી)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કેશ</strong> (વાળ) — <strong>કેસ</strong> (મુકદ્દમો)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ખાધ</strong> (ખોટ) — <strong>ખાદ્ય</strong> (ખવાય એવું) — <strong>ખાંધ</strong> (ખભો)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કોશ</strong> (ભંડાર) — <strong>કોસ</strong> (ગાઉ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ગુણ</strong> (લક્ષણ) — <strong>ગૂણ</strong> (થેલો)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>સુર</strong> (દેવ) — <strong>સૂર</strong> (અવાજ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કુખ</strong> (દર્ભ) — <strong>કૂખ</strong> (ગર્ભાશય)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>દિન</strong> (દિવસ) — <strong>દીન</strong> (ગરીબ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અંગુર</strong> (નવી ચામડી) — <strong>અંગૂર</strong> (દ્રાક્ષ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>અવધિ</strong> (સમય) — <strong>અવધી</strong> (ભાષા)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>કુજન</strong> (ખરાબ માણસ) — <strong>કૂંજન</strong> (મધુરગાન)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>આભ</strong> (આકાશ) — <strong>આબ</strong> (પાણી)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>શત</strong> (સો) — <strong>સત</strong> (સાચું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>શંકર</strong> (શિવ) — <strong>સંકર</strong> (ભેળસેળ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>વારિ</strong> (પાણી) — <strong>વારી</strong> (ક્રમ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>વસ્તિ</strong> (મૂત્રાલય) — <strong>વસતી</strong> (જનસંખ્યા)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ચિર</strong> (દીર્ઘાયુ) — <strong>ચીર</strong> (વસ્ત્ર)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>દ્વિપ</strong> (હાથી) — <strong>દ્વીપ</strong> (ટાપુ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>પુર</strong> (નગર) — <strong>પૂર</strong> (પાણીનું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>નંગ</strong> (હીરો) — <strong>નગ</strong> (પર્વત)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>દારુ</strong> (લાકડું) — <strong>દારૂ</strong> (શરાબ)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ભવન</strong> (મકાન) — <strong>ભુવન</strong> (લોક)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>પુંજ</strong> (ઢગલો) — <strong>પૂંજ</strong> (મીઠું)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>એકાકી</strong> (એકલું) — <strong>એકાંકી</strong> (નાટિકા)</TheoryText></HighlightBox>
                        <HighlightBox type="note"><TheoryText><strong>ઢંગ</strong> (રીત) — <strong>ઢગ</strong> (ઢગલો)</TheoryText></HighlightBox>
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    }
];
