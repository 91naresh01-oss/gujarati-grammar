import { chapter1Theory } from './gujarati-grammar/chapter1/theory';
import { chapter1Tests } from './gujarati-grammar/chapter1/test';
import { chapter2Theory } from './gujarati-grammar/chapter2/theory';
import { chapter2Tests } from './gujarati-grammar/chapter2/test';
import { chapter3Theory } from './gujarati-grammar/chapter3/theory';

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
        tests: []
    }
];
