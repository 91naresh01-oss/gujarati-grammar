import React from 'react';

export const chapter1Theory = [
    {
        title: "૧. વ્યાકરણ એટલે શું ? (પેજ ૧)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                    padding: '30px',
                    borderRadius: '24px',
                    color: '#fff',
                    marginBottom: '30px',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: '800', letterSpacing: '-0.5px' }}>વ્યાકરણ નો અર્થ</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.95' }}>
                            વ્યાકરણ શબ્દનો અર્થ <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>'સ્પષ્ટીકરણ'</span> થાય છે.
                        </p>
                    </div>
                </div>

                <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        <div style={{ background: '#dbeafe', padding: '10px', borderRadius: '12px', fontSize: '1.5rem' }}>📖</div>
                        <div>
                            <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                જે શાસ્ત્રમાં શબ્દના પ્રકૃતિ ને પ્રત્યય જુદા પાડી પ્રત્યયના અર્થ દર્શાવ્યા હોય છે અને જેમાં શબ્દોના શુદ્ધ રૂપ તથા તેનો વાક્યમાં પરસ્પર સંબંધ કેવી રીતી છે તે વિષે વિવેચન કર્યું હોય છે, તેને <b style={{ color: '#1e3a8a' }}>‘વ્યાકરણ’</b> કહે છે.
                            </p>
                            <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem', marginTop: '15px' }}>
                                એને <b style={{ color: '#2563eb' }}>‘શબ્દાનુશાસન’</b> પણ કહે છે.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '20px', border: '1px solid #cbd5e1', marginBottom: '30px' }}>
                    <h3 style={{ color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.5rem' }}>🔱</span> વેદના છ અંગો
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                        {[
                            "શિક્ષા (ઉચ્ચારણશાસ્ત્ર)",
                            "કલ્પ (ક્રિયા વિધિશાસ્ત્ર)",
                            "વ્યાકરણ",
                            "નિરુક્ત (વ્યુત્પત્તિશાસ્ત્ર)",
                            "છંદ",
                            "જ્યોતિષ"
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', padding: '12px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#475569', fontWeight: '600', textAlign: 'center' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '20px', color: '#64748b', fontStyle: 'italic', textAlign: 'center' }}>
                        "છ અંગોમાં વ્યાકરણ એ પ્રધાનતમ અંગ છે."
                    </p>
                </div>
            </div>
        )
    },
    {
        title: "૨. વ્યાકરણ શુદ્ધિ અને કાર્યો (પેજ ૨)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#059669', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            ✅ શુદ્ધિનું મહત્વ
                        </h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>વ્યાકરણશુદ્ધિ એટલે વ્યાકરણના નિયમો જાળવીને કરેલું લખાણ. જો અર્થમાં બદલાવ આવે તો તે મોટો અનર્થ સર્જી શકે છે.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#d97706', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            ⚠️ ઉદાહરણ (અનર્થ)
                        </h4>
                        <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                            <p style={{ color: '#9a3412', fontSize: '0.95rem' }}>'સ્વજન' ને બદલે 'શ્વજન' લખાય તો તેનો અર્થ 'કુતરા જેવા સગા' થઈ જાય!</p>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '30px', borderRadius: '24px', border: '1px solid #bae6fd' }}>
                    <h3 style={{ color: '#0369a1', marginBottom: '20px' }}>🚀 વ્યાકરણના મુખ્ય કાર્યો</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            "શબ્દરૂપોનું શુદ્ધિ અને અશુદ્ધિ બાબતે ધ્યાન આપવું.",
                            "ભાષાશુદ્ધિ અને લેખનશુદ્ધિ પર ભાર મુકવો.",
                            "શબ્દ અને અર્થ વચ્ચેનો સંબંધ સમજવો.",
                            "પોતાના ઉદ્દેશ અને વિચારો ને સ્પષ્ટ રીતે વ્યક્ત કરવા.",
                            "વિષય અને વાક્ય મુજબ પદક્રમ ને પદસંવાદ સાચવવો."
                        ].map((task, i) => (
                            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{i + 1}.</span>
                                <span style={{ color: '#1e40af', fontWeight: '500' }}>{task}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
];
