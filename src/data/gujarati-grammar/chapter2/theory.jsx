import React from 'react';

export const chapter2Theory = [
    {
        title: "૧. ગુજરાતી શબ્દભંડોળ (પેજ ૧)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                    padding: '30px',
                    borderRadius: '24px',
                    color: '#fff',
                    marginBottom: '30px',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '800' }}>શબ્દ એટલે 'અક્ષરબ્રહ્મ'</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: '0.9' }}>
                        સૃષ્ટિનો આરંભ 'શબ્દતત્ત્વ'થી થયો છે. કવિ દંડીએ કહ્યું છે: "જો શબ્દ જ્યોતિનો પ્રકાશ ન હોત તો આ વિશ્વ અંધકારપૂર્ણ હોત."
                    </p>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#dbeafe', padding: '8px', borderRadius: '10px' }}>📚</span> શબ્દોના પ્રકાર
                </h3>

                {/* Types Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '18px', border: '1px solid #e5e7eb', borderTop: '5px solid #3b82f6' }}>
                        <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>૧. તત્સમ શબ્દો</h4>
                        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>સંસ્કૃતમાંથી કોઈ પણ ફેરફાર વગર આવેલા શબ્દો.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '18px', border: '1px solid #e5e7eb', borderTop: '5px solid #10b981' }}>
                        <h4 style={{ color: '#065f46', marginBottom: '10px' }}>૨. તદ્ભવ શબ્દો</h4>
                        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>સંસ્કૃતમાંથી થોડાંક ફેરફાર સાથે આવેલા શબ્દો.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '18px', border: '1px solid #e5e7eb', borderTop: '5px solid #f59e0b' }}>
                        <h4 style={{ color: '#92400e', marginBottom: '10px' }}>૩. દેશ્યક શબ્દો</h4>
                        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>જેનું મૂળ જ્ઞાત નથી (તળપદા શબ્દો).</p>
                    </div>
                </div>

                <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                    <div style={{ background: '#f8fafc', padding: '15px 25px', borderBottom: '1px solid #f1f5f9', fontWeight: '800', color: '#334155' }}>📍 તત્સમ શબ્દોનું લિસ્ટ</div>
                    <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                            {["કર્મ", "ગર્વ", "ગ્રામ", "વર્ષા", "કાર્ય", "અગ્નિ", "આશા", "છિદ્ર", "ભાષ્ય", "વિશુદ્ધ", "સત્ય", "અજ્ઞાન", "આવરણ", "બિંદુ", "વ્યક્તિ", "હૃદય", "ધર્મ", "વૃક્ષ", "પત્ર"].map((w, i) => (
                                <span key={i} style={{ background: '#eff6ff', color: '#1e40af', padding: '8px 12px', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '600' }}>{w}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ background: '#fee2e2', padding: '8px', borderRadius: '10px' }}>🌍</span> વિદેશી શબ્દો
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#ef4444', marginBottom: '10px' }}>પોર્ટુગીઝ</h4>
                        <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>તમાકુ, બટાટા, આફૂસ, પલટણ, પગાર, ચાવી, મેજ, ઇસ્ત્રી, કાજુ, સાબુ, તિજોરી, વરંડો.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>અંગ્રેજી</h4>
                        <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>બેંચ, બેગ, કેમ્પ, ક્લાસ, પોલીસ, જજ, મોટર, સિમેન્ટ, બિટ્કિટ, એપ્ટિટ્યુડ, ચેક, બિલ્ડિંગ.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૨. લિપિ અને બોલી (પેજ ૨)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ background: '#ebf5ff', padding: '25px', borderRadius: '24px', border: '1px solid #bfdbfe', marginBottom: '30px' }}>
                    <h3 style={{ color: '#1e40af', marginBottom: '15px' }}>🖋️ લિપિ એટલે શું?</h3>
                    <p style={{ color: '#1e3a8a', lineHeight: '1.7' }}>
                        લિપિની શોધમાં ભારત દેશ પ્રથમ છે. ગુજરાતી લિપિ <b>બ્રાહ્મી લિપિ</b> માંથી ઉતરી આવેલી <b>દેવનાગરી</b> ની ઉપપેદાશ છે. તે ડાબી બાજુથી જમણી બાજુ લખાય છે.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>🗣️ બોલી</h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>એક જ ભાષાના જુદા જુદા પ્રાદેશિક ઉચ્ચારણોને 'બોલી' કહેવાય છે. <b>"બાર ગાઉ એ બોલી બદલાય"</b>.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#ec4899', marginBottom: '15px' }}>🎭 ઉપશિષ્ટ (Slang)</h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>વિશિષ્ટ અર્થ ધરાવતી લૌકિક ભાષા. ઉ.દા. 'ટ્યુબલાઇટ થવી', 'ગુંદરિયો'.</p>
                    </div>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '20px' }}>📍 પ્રાદેશિક બોલીઓ</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {[
                        { area: "ઉત્તર ગુજરાત", dialect: "પટ્ટણી" },
                        { area: "મધ્ય ગુજરાત", dialect: "ચરોતરી" },
                        { area: "દક્ષિણ ગુજરાત", dialect: "સુરતી" },
                        { area: "સૌરાષ્ટ્ર", dialect: "સૌરાષ્ટ્રી" }
                    ].map((d, i) => (
                        <div key={i} style={{ background: '#fff', padding: '15px', borderRadius: '15px', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{d.area}</div>
                            <div style={{ fontWeight: '800', color: '#1e293b', fontSize: '1.1rem' }}>{d.dialect}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "૩. બોલીના નમૂનાઓ (પેજ ૩)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {[
                        { title: "ઉત્તર ગુજરાત (પટ્ટણી)", sample: "આંહિ આયે બે દહાડા થયા, જાણોજ સો તો ક શમો ફરિ ક્યો શિં..." },
                        { title: "મધ્ય ગુજરાત (ચરોતરી)", sample: "ચેટલાક ચોરો ઘરમાં પેહીને ચોરી કરવાના વેચારથી તે માહેં પેઠા..." },
                        { title: "દક્ષિણ ગુજરાત (સુરતી)", sample: "એક જણને બે પોયરા ઉતા. તેમાંના નાલ્લાએ બાપને ક્યું..." },
                        { title: "સૌરાષ્ટ્ર (સૌરાષ્ટ્રી)", sample: "એક હતા ડોસીમાં. ઈ રોજ કથાવારતા સાંભળે ને દેવદર્શને જાય..." }
                    ].map((s, i) => (
                        <div key={i} style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', borderLeft: '8px solid #3b82f6' }}>
                            <h4 style={{ color: '#1e40af', marginBottom: '10px' }}>🔸 {s.title}</h4>
                            <p style={{ fontStyle: 'italic', color: '#475569', lineHeight: '1.8', fontSize: '1.05rem' }}>"{s.sample}"</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];
