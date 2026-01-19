import React from 'react';

export const chapter3Theory = [
    {
        title: "૧. ધ્વનિ અને સ્વર પરિચય (પેજ ૧)",
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
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '800' }}>વર્ણ વ્યવસ્થા</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: '0.9' }}>
                        ભાષાના સૌથી નાનામાં નાના એકમને <b>'ધ્વનિ'</b> કહેવાય છે. આપણી પરંપરા મુજબ આપણે તેને 'સ્વર' અને 'વ્યંજન' તરીકે ઓળખીએ છીએ.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#3b82f6', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            🌟 સ્વર એટલે શું?
                        </h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>જે ધ્વનિનો ઉચ્ચાર અન્ય ધ્વનિના સહાય વિના થઈ શકે, તેને <b>'સ્વર'</b> કહેવાય છે. ગુજરાતીમાં કુલ <b>૧૧</b> મૂળભૂત સ્વર છે.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            ✅ માન્ય સ્વરો
                        </h4>
                        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>ભાષાવિજ્ઞાન મુજબ <b>૮</b> માન્ય સ્વર છે: અ, આ, ઈ, ઉ, એ, ઍ, ઓ, ઑ.</p>
                    </div>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '20px' }}>📍 સ્વરોનું ઉચ્ચારણ સ્થાન</h3>
                <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '20px', padding: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#1e3a8a' }}>ઉચ્ચારણ સ્થાન</th>
                                <th style={{ padding: '15px', textAlign: 'left', color: '#1e3a8a' }}>સ્વર</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { pos: "કંઠ્ય", val: "અ, આ" },
                                { pos: "તાલવ્ય", val: "ઇ, ઈ" },
                                { pos: "ઓષ્ઠય", val: "ઉ, ઊ" },
                                { pos: "મૂર્ધન્ય", val: "ઋ" },
                                { pos: "કંઠ્યતાલવ્ય", val: "એ, ઐ" },
                                { pos: "કંઠ્યૌષ્ઠય", val: "ઓ, ઔ" }
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: '700', color: '#475569' }}>{row.pos}</td>
                                    <td style={{ padding: '12px 15px', color: '#3b82f6', fontWeight: '600' }}>{row.val}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    {
        title: "૨. વ્યંજન પરિચય અને વર્ગીકરણ (પેજ ૨)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ background: '#f0fdf4', borderLeft: '6px solid #22c55e', padding: '25px', borderRadius: '16px', marginBottom: '30px' }}>
                    <h3 style={{ color: '#166534', marginBottom: '10px' }}>🛡️ વ્યંજન પરિચય</h3>
                    <p style={{ color: '#14532d', lineHeight: '1.7' }}>
                        જે ધ્વનિના ઉચ્ચારણમાં <b>સ્વરોની સહાય</b> લેવી પડે છે, તેને વ્યંજન કહેવાય છે. ગુજરાતીમાં કુલ <b>૩૪</b> વ્યંજનો છે.
                    </p>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '20px' }}>📊 વર્ગીય વ્યંજન કોષ્ટક (કંઠ્ય થી ઓષ્ઠય)</h3>
                <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '24px', overflowX: 'auto', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead style={{ background: '#1e3a8a', color: '#fff' }}>
                            <tr>
                                <th style={{ padding: '15px' }}>સ્થાન</th>
                                <th style={{ padding: '15px' }}>વર્ગ</th>
                                <th style={{ padding: '15px' }}>અઘોષ (અલ્પ)</th>
                                <th style={{ padding: '15px' }}>અઘોષ (મહા)</th>
                                <th style={{ padding: '15px' }}>ઘોષ (અલ્પ)</th>
                                <th style={{ padding: '15px' }}>ઘોષ (મહા)</th>
                                <th style={{ padding: '15px' }}>અનુનાસિક</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { p: "કંઠ્ય", v: "ક", a1: "ક", a2: "ખ", g1: "ગ", g2: "ઘ", an: "ઙ" },
                                { p: "તાલવ્ય", v: "ચ", a1: "ચ", a2: "છ", g1: "જ", g2: "ઝ", an: "ઞ" },
                                { p: "મૂર્ધન્ય", v: "ટ", a1: "ટ", a2: "ઠ", g1: "ડ", g2: "ઢ", an: "ણ" },
                                { p: "દંત્ય", v: "ત", a1: "ત", a2: "થ", g1: "દ", g2: "ધ", an: "ન" },
                                { p: "ઓષ્ઠય", v: "પ", a1: "પ", a2: "ફ", g1: "બ", g2: "ભ", an: "મ" }
                            ].map((r, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', textAlign: 'center' }}>
                                    <td style={{ padding: '12px', fontWeight: '800', background: '#f8fafc' }}>{r.p}</td>
                                    <td style={{ padding: '12px', color: '#64748b' }}>{r.v}</td>
                                    <td style={{ padding: '12px', fontWeight: '700' }}>{r.a1}</td>
                                    <td style={{ padding: '12px', fontWeight: '700' }}>{r.a2}</td>
                                    <td style={{ padding: '12px', fontWeight: '700', color: '#2563eb' }}>{r.g1}</td>
                                    <td style={{ padding: '12px', fontWeight: '700', color: '#2563eb' }}>{r.g2}</td>
                                    <td style={{ padding: '12px', color: '#ef4444', fontWeight: '800' }}>{r.an}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    {
        title: "૩. વ્યંજનોની વિશેષ સમજ (પેજ ૩)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📍 અલ્પપ્રાણ</h4>
                        <p style={{ color: '#64748b' }}>ઉચ્ચારણ વખતે <b>ઓછી હવા</b>ની જરૂર પડે. (ક, ગ, ચ, જ...)</p>
                    </div>
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#ef4444', marginBottom: '10px' }}>📍 મહાપ્રાણ</h4>
                        <p style={{ color: '#64748b' }}>ઉચ્ચારણ વખતે <b>વધારે હવા</b>ની જરૂર પડે. (ખ, ઘ, છ, ઝ...)</p>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%)', padding: '30px', borderRadius: '24px', border: '1px solid #fecdd3' }}>
                    <h3 style={{ color: '#be123c', marginBottom: '15px' }}>🎭 ઉનાસિક વ્યંજન (નાસિક્ય)</h3>
                    <p style={{ color: '#881337', fontSize: '1.1rem', marginBottom: '20px' }}>જે વ્યંજનોના ઉચ્ચારણ વખતે હવા મુખ અને નાક બંનેમાંથી પસાર થાય.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '2rem', fontWeight: '900', color: '#e11d48' }}>
                        <span>ઙ</span><span>ઞ</span><span>ણ</span><span>ન</span><span>મ</span>
                    </div>
                </div>

                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {[
                        { label: "સંઘર્ષી", val: "શ, ષ, સ, હ" },
                        { label: "પાર્શ્વિક", val: "લ, ળ" },
                        { label: "પ્રકંપી", val: "ર" },
                        { label: "થડકાર", val: "ળ" }
                    ].map((item, i) => (
                        <div key={i} style={{ background: '#fff', padding: '15px', borderRadius: '15px', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{item.label}</div>
                            <div style={{ fontWeight: '800', color: '#1e293b', fontSize: '1.2rem' }}>{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
];
