// Dynamic import functions - data loads only when needed
const createLoader = (chapterNum) => ({
    loadTheory: () => import(`./gujarati-grammar/chapter${chapterNum}/theory.jsx`).then(m => m[`chapter${chapterNum}Theory`]),
    loadTests: () => import(`./gujarati-grammar/chapter${chapterNum}/test.js`).then(m => m[`chapter${chapterNum}Tests`]),
});

export const chaptersData = [
    {
        id: 1,
        name: 'વ્યાકરણ : મહત્વ, પ્રયોજનાદિ',
        desc: 'વ્યાકરણનો અર્થ, તેના કાર્યો અને ભાષાશુદ્ધિમાં તેનું મહત્વ.',
        ...createLoader(1),
        hasTestPdf: false
    },
    {
        id: 2,
        name: 'ભાષા, લિપિ અને બોલી',
        desc: 'ગુજરાતી ભાષાનો ઉદ્ભવ, વિકાસ, લિપિ અને પ્રાદેશિક બોલીઓની સમજૂતી.',
        ...createLoader(2),
        hasTestPdf: false
    },
    {
        id: 3,
        name: 'વર્ણ વ્યવસ્થા',
        desc: 'ધ્વનિ, સ્વર અને વ્યંજનનું વર્ગીકરણ અને ઉચ્ચારણ સ્થાનની સમજૂતી.',
        ...createLoader(3),
        hasTestPdf: false
    },
    {
        id: 4,
        name: 'ધ્વનિશ્રેણી',
        desc: 'શબ્દમાં રહેલા સ્વર અને વ્યંજનના સમૂહને છૂટા પાડવાની ક્રિયા અને તેના નિયમોની સમજૂતી.',
        ...createLoader(4),
        hasTestPdf: false
    },
    {
        id: 5,
        name: 'જોડાક્ષર (સંયુક્તાક્ષર)',
        desc: 'વ્યંજન સાથે વ્યંજનના જોડાણના પ્રકારો અને તેના લેખનના નિયમોની સમજૂતી.',
        ...createLoader(5),
        hasTestPdf: false
    },
    {
        id: 6,
        name: 'શબ્દકોશ (Dictionary)',
        desc: 'શબ્દકોશનો ઇતિહાસ, ક્રમ અને શબ્દો શોધવાના નિયમો.',
        ...createLoader(6),
        hasTestPdf: false
    },
    {
        id: 7,
        name: 'લિંગ અને વચન વ્યવસ્થા',
        desc: 'ગુજરાતી ભાષામાં લિંગ (જાતિ) અને વચન (એકવચન-બહુવચન) ના નિયમો.',
        ...createLoader(7),
        hasTestPdf: false
    },
    {
        id: 8,
        name: 'સંજ્ઞા (Noun)',
        desc: 'સંજ્ઞાની વ્યાખ્યા, વિશેષતાઓ (વિકારી/અવિકારી) અને તેના ૬ મુખ્ય પ્રકારોની સમજૂતી.',
        ...createLoader(8),
        hasTestPdf: false
    },
    {
        id: 9,
        name: 'સર્વનામ',
        desc: 'સર્વનામની વ્યાખ્યા, તેના સાત પ્રકારો અને ઉપયોગોની વિસ્તૃત સમજૂતી.',
        ...createLoader(9),
        hasTestPdf: false
    },
    {
        id: 10,
        name: 'વિશેષણ (Adjective)',
        desc: 'વિશેષણની વ્યાખ્યા, તેના પ્રકારો (ગુણવાચક, સંખ્યાવાચક, વગેરે) અને ઉદાહરણો.',
        ...createLoader(10),
        hasTestPdf: false
    },
    {
        id: 11,
        name: 'ક્રિયાવિશેષણ (Adverb)',
        desc: ' ક્રિયાવિશેષણનો અર્થ, તેના ૧૧ પ્રકારો (રીતિવાચક, સ્થળવાચક, વગેરે) અને ઉદાહરણો.',
        ...createLoader(11),
        hasTestPdf: false
    },
    {
        id: 12,
        name: 'ક્રિયાપદ (Verb)',
        desc: 'ક્રિયાપદની વ્યાખ્યા, પ્રકારો, કાળ અને અર્થની વિસ્તૃત સમજૂતી.',
        ...createLoader(12),
        hasTestPdf: false
    },
    {
        id: 13,
        name: 'કેવળપ્રયોગી (Interjection)',
        desc: 'મનની લાગણી વ્યક્ત કરતાં સ્વતંત્ર ઉદ્ગાર શબ્દો અને તેના ૧૨ પ્રકારો.',
        ...createLoader(13),
        hasTestPdf: false
    },
    {
        id: 14,
        name: 'નિપાત (Particle)',
        desc: 'વિશેષ અર્થનો કે ભારનો બોધ કરાવનાર અવ્યય અને તેના ૫ પ્રકારો.',
        ...createLoader(14),
        hasTestPdf: false
    },
    {
        id: 15,
        name: 'કૃદંત (Participles)',
        desc: 'ક્રિયાપદની જેમ વર્તતા પણ વાક્યનો અર્થ પૂર્ણ ન કરતા પદો અને તેના ૬ પ્રકારો.',
        ...createLoader(15),
        hasTestPdf: false
    },
    {
        id: 16,
        name: 'અનુગ અને નામયોગી (Suffixes & Prepositions)',
        desc: 'વિભક્તિના પ્રત્યયો (અનુગ) અને વિભક્તિ સંબંધ દર્શાવતા અવ્યયો (નામયોગી).',
        ...createLoader(16),
        hasTestPdf: false
    },
    {
        id: 17,
        name: 'સંયોજક (Conjunction)',
        desc: 'જુદા જુદા શબ્દો, વાક્યો કે ઉપવાક્યોને જોડતા પદો અને તેના ૯ પ્રકારો.',
        ...createLoader(17),
        hasTestPdf: false
    },
    {
        id: 18,
        name: 'દ્વિરુક્ત અને રવાનુકારી',
        desc: 'બેવડાતા શબ્દો (દ્વિરુક્ત) અને અવાજ સૂચવતા શબ્દો (રવાનુકારી).',
        ...createLoader(18),
        hasTestPdf: false
    },
    {
        id: 19,
        name: 'પ્રત્યય (Prefix & Suffix)',
        desc: 'શબ્દની આગળ કે પાછળ લાગતા પ્રત્યયો (પૂર્વગ-પરગ) અને તેના પ્રકારો.',
        ...createLoader(19),
        hasTestPdf: false
    },
    {
        id: 20,
        name: 'જંકચર, સ્વરભાર, કાકુ, પ્લુતિ',
        desc: 'ભાષાના વિશેષ ઘટકો: જંકચર, સ્વરભાર, કાકુ અને પ્લુતિ વિષે સમજ.',
        ...createLoader(20),
        hasTestPdf: false
    },
    {
        id: 21,
        name: 'વિરામચિહ્નો (Punctuation)',
        desc: 'વાક્યમાં અર્થ સ્પષ્ટ કરવા વપરાતા ચિહ્નો જેમ કે પૂર્ણવિરામ, અલ્પવિરામ, પ્રશ્નાર્થ વગેરે.',
        ...createLoader(21),
        hasTestPdf: false
    },
    {
        id: 22,
        name: 'અનુસ્વાર (Anusvar)',
        desc: 'અનુસ્વારના નિયમો, લિંગ-વચન વ્યવસ્થા અને શબ્દભેદ વિષે વિસ્તૃત સમજ.',
        ...createLoader(22),
        hasTestPdf: false
    },
    {
        id: 23,
        name: 'પ્રૂફરીડિંગ (Proofreading)',
        desc: 'પ્રૂફવાચનની સમજ, નિયમો અને પ્રૂફ સુધારવા માટેની સંજ્ઞાઓ.',
        ...createLoader(23),
        hasTestPdf: false
    },
    {
        id: 24,
        name: 'વાક્યના પ્રકારો અને વાક્યપ્રયોગ (Sentence Types & Voice)',
        desc: 'વાક્યના અંગો, રચના અને અર્થની દૃષ્ટિએ પ્રકારો, તેમજ કર્તરિ, કર્મણિ, ભાવે અને પ્રેરક પ્રયોગો.',
        ...createLoader(24),
        hasTestPdf: false
    },
    {
        id: 25,
        name: 'લેખનશુદ્ધિ / ભાષાશુદ્ધિ (Writing Purity)',
        desc: 'ભાષામાં લખાણ બાબત થતી ભૂલો, ઉચ્ચારણસામ્ય, વર્ણસામ્ય, અનુસ્વાર અને વ્યાકરણના નિયમોની સમજ.',
        ...createLoader(25),
        hasTestPdf: false
    },
    {
        id: 26,
        name: 'જોડણી (Spelling)',
        desc: 'શબ્દોની સાચી જોડણી, ઉચ્ચારણગત નિયમો, જોડાક્ષર, અનુસ્વાર અને અંગસાધક પ્રત્યયોની સમજ.',
        ...createLoader(26),
        hasTestPdf: true
    },
    {
        id: 27,
        name: 'સંધિ (Sandhi)',
        desc: 'સંધિની વ્યાખ્યા, વારસાગત લાક્ષણિકતાઓ અને સ્વર, વ્યંજન તથા વિસર્ગ સંધિના નિયમો.',
        ...createLoader(27),
        hasTestPdf: true
    },
    {
        id: 28,
        name: 'વિભક્તિ (Vibhakti)',
        desc: 'વિભક્તિ એટલે શું, તેના પ્રત્યયો અને ૮ પ્રકારો (કર્તા, કર્મ, વગેરે) ની સમજૂતી.',
        ...createLoader(28),
        hasTestPdf: false
    },
    {
        id: 29,
        name: 'અલંકાર (Alankar)',
        desc: 'કાવ્યની શોભા વધારતા શબ્દાલંકાર અને અર્થાલંકારના પ્રકારોની વિસ્તૃત સમજ.',
        ...createLoader(29),
        hasTestPdf: true
    },
    {
        id: 30,
        name: 'છંદ (Chhand)',
        desc: 'અક્ષરમેળ અને માત્રામેળ છંદની સંપૂર્ણ સમજૂતી, ગણરચના અને લઘુ-ગુરુના નિયમો.',
        ...createLoader(30),
        hasTestPdf: true
    },
    {
        id: 31,
        name: 'સમાસ (Samas)',
        desc: 'સમાસનો અર્થ, વિગ્રહ અને તેના ૮ મુખ્ય પ્રકારોની ઉદાહરણ સહિત સમજૂતી.',
        ...createLoader(31),
        hasTestPdf: true
    },
    {
        id: 32,
        name: 'સમાનાર્થી શબ્દો (Synonyms)',
        desc: 'મહત્વપૂર્ણ સમાનાર્થી શબ્દોની યાદી અને અભ્યાસ.',
        ...createLoader(32),
        hasTestPdf: true
    },
    {
        id: 33,
        name: 'વિરૂદ્ધાર્થી શબ્દો (Antonyms)',
        desc: 'મહત્વપૂર્ણ વિરૂદ્ધાર્થી શબ્દોની યાદી અને અભ્યાસ.',
        ...createLoader(33),
        hasTestPdf: true
    },
    {
        id: 34,
        name: 'અનેકાર્થી શબ્દો (Polysemy)',
        desc: 'એક જ શબ્દના એકથી વધુ અર્થ ધરાવતા શબ્દોની યાદી અને અભ્યાસ.',
        ...createLoader(34),
        hasTestPdf: false
    },
    {
        id: 35,
        name: 'તળપદા શબ્દો (Dialect Words)',
        desc: 'સ્થાનિક બોલીના શબ્દો અને તેમના શિષ્ટ રૂપો.',
        ...createLoader(35),
        hasTestPdf: true
    },
    {
        id: 36,
        name: 'શબ્દસમૂહ માટે એક શબ્દ (One Word Substitution)',
        desc: 'વાક્ય કે શબ્દસમૂહ માટે વપરાતો એક સચોટ શબ્દ.',
        ...createLoader(36),
        hasTestPdf: false
    },
    {
        id: 37,
        name: 'ક્લિષ્ટ શબ્દાવલી (Complex Vocabulary)',
        desc: 'કવિતા અને સાહિત્યમાં વપરાતા કઠિન શબ્દો અને તેમના અર્થ.',
        ...createLoader(37),
        hasTestPdf: true
    },
    {
        id: 38,
        name: 'રૂઢિપ્રયોગો (Idioms)',
        desc: 'ભાષામાં વપરાતા રૂઢિપ્રયોગો અને તેમના અર્થની સમજ.',
        ...createLoader(38),
        hasTestPdf: true
    },
    {
        id: 39,
        name: 'કહેવતો (Sayings)',
        desc: 'ગુજરાતી કહેવતો અને તેમના અર્થની સમજ.',
        ...createLoader(39),
        hasTestPdf: true
    }
];
