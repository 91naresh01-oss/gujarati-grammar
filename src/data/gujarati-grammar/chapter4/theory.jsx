import React from 'react';

export const chapter4Theory = [
    {
        title: "૧. ધ્વનિશ્રેણી સમજ (પેજ ૧)",
        content: (
            <div style={{ padding: '10px' }}>
                {/* Intro Card with Mesh Gradient */}
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
                        <h2 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: '800', letterSpacing: '-0.5px' }}>ધ્વનિશ્રેણી</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.95' }}>
                            શબ્દમાં રહેલા <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>સ્વર</span> અને <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>વ્યંજન</span> ના સમૂહને છૂટા પાડવાની ક્રિયા.
                        </p>
                    </div>
                </div>

                {/* Info Boxes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#3b82f6', fontSize: '2rem', marginBottom: '15px' }}>📱</div>
                        <h4 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '10px', fontWeight: '700' }}>ફોનેટિક ભાષા</h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>ગુજરાતી 'ફોનેટિક' ભાષા છે. એટલે કે જેવું બોલાય એવું જ લખાય. ઉચ્ચારણ અને જોડણી સમાન હોય છે.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ color: '#ef4444', fontSize: '2rem', marginBottom: '15px' }}>📜</div>
                        <h4 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '10px', fontWeight: '700' }}>વ્યંજનાન્ત ભાષા</h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>છેલ્લા અક્ષર પછી 'અ' સ્વર બોલાતો નથી, તેથી ગુજરાતી ભાષાને 'વ્યંજનાન્ત' પણ કહે છે.</p>
                    </div>
                </div>

                {/* Example Section */}
                <h3 style={{ color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#dbeafe', padding: '8px', borderRadius: '10px' }}>📘</span> બેઝિક ઉદાહરણો
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
                    {[{ word: "ગોપાળ", break: "ગ્ + ઓ + પ્ + આ + ળ્" }, { word: "વહાલા", break: "વ્ + અ + હ્ + આ + લ્ + આ" }].map((ex, i) => (
                        <div key={i} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '2px dashed #cbd5e1', flex: '1 1 200px' }}>
                            <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '5px' }}>શબ્દ</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e293b', marginBottom: '10px' }}>{ex.word}</div>
                            <div style={{ fontSize: '1.1rem', color: '#3b82f6', fontWeight: '600' }}>{ex.break}</div>
                        </div>
                    ))}
                </div>

                {/* GCERT Examples Grid */}
                <h3 style={{ color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#fee2e2', padding: '8px', borderRadius: '10px' }}>🔍</span> GCERT ઉદાહરણો
                </h3>
                <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {[
                                { word: "અરજ", break: "અ + ર્ + અ + જ્" },
                                { word: "ગિરિધર", break: "ગ્ + ઈ + ર્ + ઈ + ધ્ + અ + ર્" },
                                { word: "હળધર", break: "હ્ + અ + ળ્ + અ + ધ્ + અ + ર્" },
                                { word: "શું", break: "શ્ + ઉં" },
                                { word: "આત્મકથા", break: "આ + ત્ + મ્ + અ + ક્ + અ + થ્ + આ" },
                                { word: "બિંદુ", break: "બ્ + ઈ + ન્ + દ્ + ઉ" },
                                { word: "દૂરબીન", break: "દ્ + ઊ + ર્ + અ + બ્ + ઈ + ન્" },
                                { word: "અપૂજ", break: "અ + પ્ + ઊ + જ્" },
                                { word: "દોકડો", break: "દ્ + ઓ + ક્ + અ + ડ્ + ઓ" },
                                { word: "હાથોહાથ", break: "હ્ + આ + થ્ + ઓ + હ્ + આ + થ્" },
                                { word: "વિદ્વત્તા", break: "વ્ + ઈ + દ્ + વ્ + અ + ત્ + ત્ + આ" },
                                { word: "જ્ઞાનચક્ષુ", break: "જ્ + ગ્ + આ + ન્ + અ + ચ્ + અ + ક્ + ષ + ઉ" },
                                { word: "નિસ્તબ્ધતા", break: "ન્ + ઈ + સ્ + ત્ + અ + બ્ + ધ્ + અ + ત્ + આ" }
                            ].map((ex, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '15px', fontWeight: '700', color: '#475569', width: '30%' }}>{ex.word}</td>
                                    <td style={{ padding: '15px', color: '#2563eb', fontWeight: '500' }}>{ex.break}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    {
        title: "૨. જોડાક્ષર ઉદાહરણો (પેજ ૨)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                    {[
                        { word: "જન્મ", break: "જ્ + અ + ન્ + મ્ + અ" },
                        { word: "પુણ્ય", break: "પ્ + ઉ + ણ્ + ય્ + અ" },
                        { word: "શિલ્પ", break: "શ્ + ઈ + લ્ + પ્ + અ" },
                        { word: "ભાઈબંધ", break: "ભ્ + આ + ઈ + બ્ + અ + ન્ + ધ્ + અ" },
                        { word: "વચ્ચે", break: "વ્ + અ + ચ્ + ચ્ + એ" },
                        { word: "સ્વરૂપ", break: "સ્ + વ્ + અ + ર્ + ઊ + પ્" },
                        { word: "જશ્ન", break: "જ્ + અ + શ્ + ન્ + અ" },
                        { word: "કર્ણ", break: "ક્ + અ + ર્ + ણ્ + અ" },
                        { word: "નિત્ય", break: "ન્ + ઈ + ત્ + ય્ + અ" },
                        { word: "અન્ન", break: "અ + ન્ + ન્ + અ" },
                        { word: "અશક્ય", break: "અ + શ્ + અ + ક્ + ય્ + અ" },
                        { word: "ચિઠ્ઠી", break: "ચ્ + ઈ + ઠ્ + ઠ્ + ઈ" },
                        { word: "રમ્ય", break: "ર્ + અ + મ્ + ય્ + અ" },
                        { word: "કાર્ય", break: "ક્ + આ + ર્ + ય્ + અ" },
                        { word: "ક્ષમા", break: "ક્ + ષ + અ + મ્ + આ" },
                        { word: "ભિક્ષા", break: "ભ્ + ઈ + ક્ + ષ + આ" },
                        { word: "વિજ્ઞાન", break: "વ્ + ઈ + જ્ + ગ્ + આ + ન્ + અ" },
                        { word: "આજ્ઞા", break: "આ + જ્ + ગ્ + આ" },
                        { word: "ત્રાડ", break: "ત્ + ર્ + આ + ડ્ + અ" },
                        { word: "ચિત્ર", break: "ચ્ + ઈ + ત્ + ર્ + અ" },
                        { word: "વર્તન", break: "વ્ + અ + ર્ + ત્ + અ + ન્" },
                        { word: "વ્રત", break: "વ્ + ર્ + અ + ત્" },
                        { word: "અંગરક્ષક", break: "અં + ગ્ + અ + ર્ + અ + ક્ + ષ + અ + ક્" },
                        { word: "અક્ષાંશ", break: "અ + ક્ + ષ + આ + ન્ + શ્" },
                        { word: "નક્ષત્ર", break: "ન્ + અ + ક્ + ષ + અ + ત્ + ર્ + અ" },
                        { word: "છત્રપતિ", break: "છ્ + અ + ત્ + ર્ + અ + પ્ + અ + ત્ + ઈ" },
                        { word: "ક્ષેત્ર", break: "ક્ + ષ + એ + ત્ + ર્ + અ" },
                        { word: "ગણિતજ્ઞ", break: "ગ્ + અ + ણ્ + ઈ + ત્ + અ + જ્ + ગ્ + અ" },
                        { word: "જ્ઞાતિ", break: "જ્ + ગ્ + આ + ત્ + ઈ" },
                        { word: "યજ્ઞચિત્ર", break: "ય્ + અ + જ્ + ગ્ + અ + ચ્ + ઈ + ત્ + ર્ + અ" },
                        { word: "સર્પ", break: "સ્ + અ + ર્ + પ્ + અ" },
                        { word: "વર્ણન", break: "વ્ + અ + ર્ + ણ્ + અ + ન્" },
                        { word: "પદાર્થ", break: "પ્ + અ + દ્ + આ + ર્ + થ્ + અ" },
                        { word: "નિર્ભય", break: "ન્ + ઈ + ર્ + ભ્ + અ + ય્" },
                        { word: "જીર્ણ", break: "જ્ + ઈ + ર્ + ણ્ + અ" }
                    ].map((ex, i) => (
                        <div key={i} style={{ background: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontWeight: '800', color: '#1e3a8a', marginBottom: '5px' }}>{ex.word}</div>
                            <div style={{ color: '#64748b', fontSize: '0.95rem' }}>{ex.break}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "૩. નિયમો અને વધુ ઉદાહરણો (પેજ ૩)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ background: '#fff7ed', borderLeft: '6px solid #f97316', padding: '25px', borderRadius: '16px', marginBottom: '30px' }}>
                    <h3 style={{ color: '#9a3412', marginBottom: '15px' }}>⚠️ ધ્યાનમાં રાખવાના નિયમો</h3>
                    <ul style={{ paddingLeft: '20px', color: '#431407', lineHeight: '1.8' }}>
                        <li>શબ્દને અંતે જોડાક્ષર હોય તો <b>'અ'</b> બોલાય છે.</li>
                        <li>સ્વર છૂટો પડે ત્યારે તેને <b>આખો</b> લખવો.</li>
                        <li>વ્યંજન છૂટો પડે ત્યારે તેને <b>ખોડો (હલન્ત)</b> લખવો.</li>
                        <li>રેફ (અર્થ) માં <b>'ર'</b> પહેલા આવશે (અ + ર્ + થ્ + અ).</li>
                        <li>ક્ર, પ્ર, વ્ર માં અક્ષર પછી <b>'ર'</b> આવશે.</li>
                    </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                    {[
                        { word: "સૂર્ય", break: "સ્ + ઊ + ર્ + અ + ય્" },
                        { word: "માર્ગ", break: "મ્ + આ + ર્ + ગ્ + અ" },
                        { word: "સ્પર્શ", break: "સ્ + પ્ + અ + ર્ + શ્ + અ" },
                        { word: "ક્રમ", break: "ક્ + ર્ + અ + મ્ + અ" },
                        { word: "વજ્ર", break: "વ્ + અ + જ્ + ર્ + અ" },
                        { word: "પ્રત્યે", break: "પ્ + ર્ + અ + ત્ + ય્ + એ" },
                        { word: "વિગ્રહ", break: "વ્ + ઈ + ગ્ + ર્ + અ + હ્" },
                        { word: "રાષ્ટ્ર", break: "ર્ + આ + ષ + ટ્ + ર્ + અ" },
                        { word: "હૃદય", break: "હ્ + ઋ + દ્ + અ + ય્" },
                        { word: "ચિત્ર", break: "ચ્ + ઈ + ત્ + ર્ + અ" }
                    ].map((ex, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', background: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <div style={{ background: '#3b82f6', color: '#fff', padding: '5px 10px', borderRadius: '8px', marginRight: '15px', fontWeight: '700' }}>{ex.word}</div>
                            <div style={{ color: '#475569', fontWeight: '500' }}>{ex.break}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];
