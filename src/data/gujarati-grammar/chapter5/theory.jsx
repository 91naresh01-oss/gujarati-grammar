import React from 'react';

export const chapter5Theory = [
    {
        title: "૧. જોડાક્ષરની વ્યાખ્યા અને મહત્વ (પેજ ૧)",
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
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: '800' }}>જોડાક્ષર (સંયુક્તાક્ષર)</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: '0.9' }}>
                        ગુજરાતી ભાષાના ઉચ્ચારણ અને લેખનશુદ્ધિ માટે જોડાક્ષરોનું જ્ઞાન ખૂબ જ મહત્વનું છે. તેને <b>'સંયુક્તાક્ષર'</b> પણ કહેવાય છે.
                    </p>
                </div>

                <div style={{ background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                    <h4 style={{ color: '#3b82f6', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        🌟 વ્યાખ્યા
                    </h4>
                    <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem' }}>
                        “સ્વરની મદદ લીધા વિના <b>વ્યંજન સાથે વ્યંજન</b> જોડાય” તેને <b>‘જોડાક્ષર’</b> કહેવાય છે.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    {[
                        { char: "ક્ષ", spell: "ક્ + ષ + અ" },
                        { char: "ત્ર", spell: "ત્ + ર્ + અ" },
                        { char: "જ્ઞ", spell: "જ્ + ગ્ + અ" }
                    ].map((item, i) => (
                        <div key={i} style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '5px' }}>{item.char}</div>
                            <div style={{ color: '#64748b', fontWeight: '600' }}>{item.spell}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "૨. દેવનાગરી લિપિ અનુસાર જોડાક્ષરો (પેજ ૨)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#1e3a8a', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        📍 'દ' અને 'ધ' ના જોડાક્ષર
                    </h3>
                    <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '20px', overflowX: 'auto', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ background: '#eff6ff', borderBottom: '2px solid #e2e8f0' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>જોડાક્ષર</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>ઉદાહરણ</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>શબ્દ</th>
                                    <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>ધ્વનિશ્રેણી</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { j: "દ + દ = દ્દ", e: "મુદ્દો, રદ્દી", s: "મુદ્દો", d: "મ્ + ઉ + દ્ + દ્ + ઓ" },
                                    { j: "દ + ધ = દ્ધ", e: "શુદ્ધ, યુદ્ધ", s: "શુદ્ધ", d: "શ્ + ઉ + દ્ + ધ્ + અ" },
                                    { j: "દ + ય = દ્ય", e: "ગદ્ય, પદ્ય", s: "વિદ્યા", d: "વ્ + ઈ + દ્ + ય્ + આ" },
                                    { j: "ધ + ધ = દ્ધ", e: "યોદ્ધા, અધ્ધર", s: "અધ્ધર", d: "અ + ધ્ + ધ્ + અ + ર્" },
                                    { j: "ધ + વ = ધ્વ", e: "ધ્વનિ, ધ્વજ", s: "ધ્વજ", d: "ધ્ + વ્ + અ + જ્" }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '12px', fontWeight: '700', color: '#2563eb' }}>{row.j}</td>
                                        <td style={{ padding: '12px', color: '#64748b', fontSize: '0.9rem' }}>{row.e}</td>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>{row.s}</td>
                                        <td style={{ padding: '12px', color: '#4b5563', fontSize: '0.9rem' }}>{row.d}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>📍 'શ' ના જોડાક્ષર</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}>🔹 શ + ર = <b>શ્ર</b> (શ્રદ્ધા)</li>
                            <li style={{ marginBottom: '8px' }}>🔹 શ + વ = <b>શ્વ</b> (શ્વાન)</li>
                            <li style={{ marginBottom: '8px' }}>🔹 શ + ચ = <b>શ્ચ</b> (નિશ્ચિત)</li>
                        </ul>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: '#1e3a8a', marginBottom: '10px' }}>📍 'હ' ના જોડાક્ષર</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '8px' }}>🔹 હ + મ = <b>હ્મ</b> (બ્રહ્મ)</li>
                            <li style={{ marginBottom: '8px' }}>🔹 હ + ઋ = <b>હૃ</b> (હૃદય)</li>
                            <li style={{ marginBottom: '8px' }}>🔹 હ + વ = <b>હ્વ</b> (જિહ્વા)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "૩. 'ર' ના જોડાક્ષર અને અન્ય પ્રકારો (પેજ ૩)",
        content: (
            <div style={{ padding: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#fff1f2', padding: '25px', borderRadius: '20px', border: '1px solid #fecdd3' }}>
                        <h4 style={{ color: '#e11d48', marginBottom: '10px' }}>🌀 રેફ ( ઁ ) ના નિયમો</h4>
                        <p style={{ color: '#881337', fontSize: '0.95rem' }}>જો 'ર' વ્યંજન <b>પહેલા</b> આવે તો તે 'રેફ' તરીકે ઓળખાય છે.</p>
                        <div style={{ marginTop: '10px', fontWeight: '700', color: '#be123c' }}>ઉદા: સર્પ, વર્ણન, પદાર્થ</div>
                    </div>
                    <div style={{ background: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                        <h4 style={{ color: '#166534', marginBottom: '10px' }}>🖋️ ફાળો ( ્ર ) ના નિયમો</h4>
                        <p style={{ color: '#14532d', fontSize: '0.95rem' }}>જો 'ર' વ્યંજન <b>પછી</b> આવે તો તે 'ફાળો' તરીકે ઓળખાય છે.</p>
                        <div style={{ marginTop: '10px', fontWeight: '700', color: '#15803d' }}>ઉદા: ક્રમ, વજ્ર, પ્રત્યે</div>
                    </div>
                </div>

                <h3 style={{ color: '#1e3a8a', marginBottom: '15px' }}>📂 જોડાક્ષરોના અન્ય પ્રકારો</h3>
                <div style={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '20px', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>પ્રકાર</th>
                                <th style={{ padding: '12px', textAlign: 'left', color: '#1e3a8a' }}>ઉદાહરણો</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { t: "સીધી લીટીમાં જોડાણ", e: "ગ્ય (યોગ્ય), ચ્છ (સ્વચ્છ)" },
                                { t: "ઉપર-નીચે જોડાણ", e: "ડ્ડ (ઉડ્ડયન), દ્મ (પદ્મ)" },
                                { t: "સજાતીય (સરખા)", e: "ક્ક (અક્કલ), જ્જ (સજ્ઝાય)" },
                                { t: "વિજાતીય (અલગ)", e: "ક્ય (વાક્ય)" },
                                { t: "આકૃતિ બિલકુલ ન સચવાય", e: "ક્ષ (પક્ષ), જ્ઞ (જ્ઞાન)" }
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '12px', fontWeight: '700', color: '#475569' }}>{row.t}</td>
                                    <td style={{ padding: '12px', color: '#3b82f6', fontWeight: '600' }}>{row.e}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', padding: '25px', borderRadius: '24px', border: '1px solid #fcd34d', marginTop: '30px' }}>
                    <h4 style={{ color: '#92400e', marginBottom: '10px' }}>💡 જાણવા જેવું</h4>
                    <p style={{ color: '#78350f', lineHeight: '1.6' }}>
                        'ૐ' એ જોડાક્ષર નથી પણ <b>'સંધ્યાક્ષર'</b> કહેવાય છે કારણ કે તેમાં બે વ્યંજન નહીં પણ બે સ્વર મળેલા છે.
                    </p>
                </div>
            </div>
        )
    }
];
