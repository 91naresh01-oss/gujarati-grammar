import { chapter1Theory } from './gujarati-grammar/chapter1/theory';
import { chapter1Tests } from './gujarati-grammar/chapter1/test';
import { chapter2Theory } from './gujarati-grammar/chapter2/theory';
import { chapter2Tests } from './gujarati-grammar/chapter2/test';
import { chapter3Theory } from './gujarati-grammar/chapter3/theory';
import { chapter3Tests } from './gujarati-grammar/chapter3/test';
import { chapter4Theory } from './gujarati-grammar/chapter4/theory';
import { chapter4Tests } from './gujarati-grammar/chapter4/test';
import { chapter5Theory } from './gujarati-grammar/chapter5/theory';
import { chapter5Tests } from './gujarati-grammar/chapter5/test';
import { chapter6Theory } from './gujarati-grammar/chapter6/theory';
import { chapter6Tests } from './gujarati-grammar/chapter6/test';
import { chapter7Theory } from './gujarati-grammar/chapter7/theory';
import { chapter7Tests } from './gujarati-grammar/chapter7/test';
import { chapter8Theory } from './gujarati-grammar/chapter8/theory';
import { chapter8Tests } from './gujarati-grammar/chapter8/test';

export const chaptersData = [
    {
        id: 1,
        name: 'વ્યાકરણ : મહત્વ, પ્રયોજનાદિ',
        desc: 'વ્યાકરણનો અર્થ, તેના કાર્યો અને ભાષાશુદ્ધિમાં તેનું મહત્વ.',
        theory: chapter1Theory,
        tests: chapter1Tests
    },
    {
        id: 2,
        name: 'ભાષા, લિપિ અને બોલી',
        desc: 'ગુજરાતી ભાષાનો ઉદ્ભવ, વિકાસ, લિપિ અને પ્રાદેશિક બોલીઓની સમજૂતી.',
        theory: chapter2Theory,
        tests: chapter2Tests
    },
    {
        id: 3,
        name: 'વર્ણ વ્યવસ્થા',
        desc: 'ધ્વનિ, સ્વર અને વ્યંજનનું વર્ગીકરણ અને ઉચ્ચારણ સ્થાનની સમજૂતી.',
        theory: chapter3Theory,
        tests: chapter3Tests
    },
    {
        id: 4,
        name: 'ધ્વનિશ્રેણી',
        desc: 'શબ્દમાં રહેલા સ્વર અને વ્યંજનના સમૂહને છૂટા પાડવાની ક્રિયા અને તેના નિયમોની સમજૂતી.',
        theory: chapter4Theory,
        tests: chapter4Tests
    },
    {
        id: 5,
        name: 'જોડાક્ષર (સંયુક્તાક્ષર)',
        desc: 'વ્યંજન સાથે વ્યંજનના જોડાણના પ્રકારો અને તેના લેખનના નિયમોની સમજૂતી.',
        theory: chapter5Theory,
        tests: chapter5Tests
    },
    {
        id: 6,
        name: 'શબ્દકોશ (Dictionary)',
        desc: 'શબ્દકોશનો ઇતિહાસ, ક્રમ અને શબ્દો શોધવાના નિયમો.',
        theory: chapter6Theory,
        tests: chapter6Tests
    },
    {
        id: 7,
        name: 'લિંગ અને વચન વ્યવસ્થા',
        desc: 'ગુજરાતી ભાષામાં લિંગ (જાતિ) અને વચન (એકવચન-બહુવચન) ના નિયમો.',
        theory: chapter7Theory,
        tests: chapter7Tests
    },
    {
        id: 8,
        name: 'સંજ્ઞા (Noun)',
        desc: 'સંજ્ઞાની વ્યાખ્યા, વિશેષતાઓ (વિકારી/અવિકારી) અને તેના ૬ મુખ્ય પ્રકારોની સમજૂતી.',
        theory: chapter8Theory,
        tests: chapter8Tests
    }
];
