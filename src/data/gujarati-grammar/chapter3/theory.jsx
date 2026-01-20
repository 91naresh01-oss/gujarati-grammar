import React from 'react';
import {
    TheoryCard,
    GradientCard,
    TheoryHeading,
    TheorySubHeading,
    TheoryText,
    TheoryTable,
    TheoryTableHeader,
    TheoryTableRow,
    TheoryGrid,
    HighlightBox,
    TheoryList,
    TheoryListItem
} from '../../../components/TheoryComponents';

export const chapter3Theory = [
    {
        title: "૧. ધ્વનિ અને સ્વર પરિચય",
        content: (
            <div className="modern-theory-wrapper">
                <GradientCard
                    heading="🔊 ધ્વનિ અને સ્વર પરિચય"
                    description="ભાષાનો નાનામાં નાનો એકમ"
                    theme="teal"
                >
                    <div style={{ marginTop: '15px' }}>
                        <TheorySubHeading glass>ધ્વનિ એટલે શું?</TheorySubHeading>
                        <TheoryList color="#000000">
                            <TheoryListItem>
                                ઉચ્ચારણ પ્રક્રિયામાં ફેફસાંમાંથી આવતી હવા નાદતંત્રીને કંપાવે છે.
                            </TheoryListItem>
                            <TheoryListItem>
                                જેનો ઉચ્ચાર અન્ય ધ્વનિની મદદ વિના થાય, તેને <strong>'સ્વર'</strong> કહેવાય.
                            </TheoryListItem>
                        </TheoryList>
                    </div>
                </GradientCard>

                <TheoryCard>
                    <TheoryHeading color="#7c3aed">🎵 સ્વર (Vowels)</TheoryHeading>
                    <TheoryText>
                        જેનો ઉચ્ચાર અન્ય ધ્વનિની મદદ વિના થાય. હવા અવરોધાયા વિના બહાર નીકળે. ગુજરાતીમાં મુખ્ય <span style={{ color: '#7c3aed', fontWeight: '800' }}>૮ સ્વરો</span> માન્ય છે.
                    </TheoryText>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
                            <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', marginBottom: '5px' }}>કુલ સંખ્યા</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4c1d95' }}>૧૧ / ૮ (માન્ય)</div>
                        </div>
                        <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
                            <div style={{ fontWeight: '800', color: '#6d28d9', fontSize: '1.05rem', marginBottom: '5px' }}>દીર્ઘ સ્વર (૭)</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#4c1d95' }}>આ, ઈ, ઊ, એ, ઐ, ઓ, ઔ</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <TheorySubHeading>🔄 સજાતીય vs વિજાતીય</TheorySubHeading>
                        <div style={{ fontSize: '1.15rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f0fdfa', padding: '12px', borderRadius: '8px', border: '1px solid #ccfbf1' }}>
                                <span style={{ fontWeight: '600' }}>અ, આ</span> <span style={{ color: '#059669', fontWeight: '800' }}>સજાતીય</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#fef2f2', padding: '12px', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                                <span style={{ fontWeight: '600' }}>અ, આ ↔ ઈ, ઉ</span> <span style={{ color: '#dc2626', fontWeight: '800' }}>વિજાતીય</span>
                            </div>
                        </div>
                    </div>
                </TheoryCard>

                <TheoryCard>
                    <TheoryHeading color="#6d28d9">📢 સ્વરોનું ઉચ્ચારણ સ્થાન</TheoryHeading>
                    <TheoryTable>
                        <TheoryTableHeader headers={["સ્થાન", "સ્વર"]} />
                        <tbody>
                            {[
                                ["કંઠ્ય", "અ, આ"],
                                ["તાલવ્ય", "ઇ, ઈ"],
                                ["ઓષ્ઠય", "ઉ, ઊ"],
                                ["મૂર્ધન્ય", "ઋ"],
                                ["કંઠ્યતાલવ્ય", "એ, ઐ"],
                                ["કંઠ્યૌષ્ઠય", "ઓ, ઔ"]
                            ].map((row, i) => (
                                <TheoryTableRow key={i} cells={row} isEven={i % 2 !== 0} />
                            ))}
                        </tbody>
                    </TheoryTable>
                </TheoryCard>

                <TheoryCard style={{ background: '#fffbeb', borderColor: '#fde68a' }}>
                    <TheoryHeading color="#92400e">👄 સંવૃત અને વિવૃત</TheoryHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <div style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>
                            <strong style={{ color: '#b45309' }}>સંવૃત (ઓછું અંતર):</strong><br />એ, ઓ (દા.ત. ઓટલો, દેવ)
                        </div>
                        <div style={{ background: '#fff', padding: '15px', borderRadius: '10px' }}>
                            <strong style={{ color: '#b45309' }}>વિવૃત (વધુ અંતર):</strong><br />ઍ, ઑ (દા.ત. ઑફિસ, બેટ)
                        </div>
                    </div>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૨. વ્યંજન પરિચય (Consonants)",
        content: (
            <div>
                <TheoryCard>
                    <TheoryHeading color="#0369a1">વ્યંજન (૩૪)</TheoryHeading>
                    <TheoryText>
                        સ્વરોની મદદથી બોલાતા વર્ણો. ઉચ્ચારણમાં હવા મુખના કોઈ ભાગે અવરોધાય છે. <span style={{ color: '#0369a1', fontWeight: '700' }}>(ઙ, ઞ, ણ, ળ થી શબ્દ શરૂ થતા નથી)</span>
                    </TheoryText>

                    <div style={{ textAlign: 'center', background: '#e0f2fe', padding: '8px', borderRadius: '8px', color: '#0369a1', marginBottom: '15px', fontWeight: '700', fontSize: '1.1rem' }}>
                        વર્ગીય વ્યંજનો (સ્પર્શ) - ૨૫
                    </div>

                    <TheoryTable>
                        <thead>
                            <tr>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>વર્ગ</th>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>અઘોષ<br /><span style={{ fontSize: '0.85rem' }}>અલ્પ</span></th>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>અઘોષ<br /><span style={{ fontSize: '0.85rem' }}>મહા</span></th>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>ઘોષ<br /><span style={{ fontSize: '0.85rem' }}>અલ્પ</span></th>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>ઘોષ<br /><span style={{ fontSize: '0.85rem' }}>મહા</span></th>
                                <th style={{ background: '#f3f4f6', padding: '10px', borderBottom: '2px solid #e5e7eb', textAlign: 'left', fontWeight: '700' }}>અનુનાસિક</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["કંઠ્ય", "ક", "ખ", "ગ", "ઘ", "ઙ"],
                                ["તાલવ્ય", "ચ", "છ", "જ", "ઝ", "ઞ"],
                                ["મૂર્ધન્ય", "ટ", "ઠ", "ડ", "ઢ", "ણ"],
                                ["દંત્ય", "ત", "થ", "દ", "ધ", "ન"],
                                ["ઓષ્ઠય", "પ", "ફ", "બ", "ભ", "મ"]
                            ].map((row, i) => (
                                <tr key={i} style={{ background: i % 2 !== 0 ? '#f0f9ff' : '#fff' }}>
                                    <td style={{ padding: '12px', fontWeight: '800', background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>{row[0]}</td>
                                    {row.slice(1).map((cell, j) => (
                                        <td key={j} style={{ padding: '12px', fontWeight: j === 4 ? '800' : '600', color: j === 4 ? '#0369a1' : '#1f2937', fontSize: '1.25rem', borderBottom: '1px solid #f1f5f9' }}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </TheoryTable>
                </TheoryCard>

                <TheoryCard>
                    <TheorySubHeading>અવર્ગીય વ્યંજનો (૯)</TheorySubHeading>
                    <TheoryGrid minWidth="160px">
                        {[
                            { type: "અર્ધસ્વર", val: "ય, વ" },
                            { type: "સંઘર્ષી/ઉષ્માક્ષર", val: "શ, ષ, સ, હ" },
                            { type: "પ્રકંપી", val: "ર" },
                            { type: "પાર્શ્વિક", val: "લ" },
                            { type: "થડકારવાળો", val: "ળ" }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#f9fafb', padding: '15px', borderRadius: '10px', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                                <div style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '600', marginBottom: '8px' }}>{item.type}</div>
                                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1f2937' }}>{item.val}</div>
                            </div>
                        ))}
                    </TheoryGrid>
                </TheoryCard>
            </div>
        )
    },
    {
        title: "૩. વિશેષ સમજ અને અક્ષર",
        content: (
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <TheoryCard>
                        <TheoryHeading color="#be123c">🗣️ હવા (પ્રાણ)</TheoryHeading>
                        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '1.15rem', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#be123c' }}>અલ્પપ્રાણ:</strong> ઓછી હવા <span style={{ fontSize: '1rem', color: '#6b7280' }}>(ક, ગ, ચ...)</span></li>
                            <li><strong style={{ color: '#be123c' }}>મહાપ્રાણ:</strong> વધુ હવા <span style={{ fontSize: '1rem', color: '#6b7280' }}>(ખ, ઘ, છ...)</span></li>
                        </ul>
                    </TheoryCard>
                    <TheoryCard>
                        <TheoryHeading color="#b45309">🔔 નાદ (ઘોષ)</TheoryHeading>
                        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '1.15rem', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#b45309' }}>અઘોષ:</strong> કઠોર, નાદ વિના <span style={{ fontSize: '1rem', color: '#6b7280' }}>(ક, ખ, ચ...)</span></li>
                            <li><strong style={{ color: '#b45309' }}>ઘોષ:</strong> કોમળ, નાદ સાથે <span style={{ fontSize: '1rem', color: '#6b7280' }}>(ગ, ઘ, જ...)</span></li>
                        </ul>
                    </TheoryCard>
                </div>

                <TheoryCard>
                    <TheoryHeading color="#1e3a8a">📝 અગત્યની વ્યાખ્યાઓ</TheoryHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.15rem' }}>
                        <div style={{ background: '#eff6ff', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #3b82f6', lineHeight: '1.6' }}>
                            <strong style={{ color: '#1d4ed8' }}>વર્ણ (ખોડો):</strong> સ્વર વિનાનો એકલો વ્યંજન <span style={{ fontWeight: '800' }}>(ક્, ખ્, ગ્)</span>
                        </div>
                        <div style={{ background: '#fdf2f8', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #db2777', lineHeight: '1.6' }}>
                            <strong style={{ color: '#be185d' }}>અક્ષર:</strong> સ્વર ભળેલો વ્યંજન <span style={{ fontWeight: '800' }}>(ક્ + અ = ક)</span>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #22c55e', lineHeight: '1.6' }}>
                            <strong style={{ color: '#15803d' }}>સંધ્યક્ષર:</strong> બે સ્વરનું મિશ્રણ <span style={{ fontWeight: '800' }}>(એ, ઐ, ઓ, ઔ)</span>
                        </div>
                        <div style={{ background: '#fefce8', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #eab308', lineHeight: '1.6' }}>
                            <strong style={{ color: '#a16207' }}>પાર્શ્વિક:</strong> જીભની બંને બાજુથી હવા નીકળે <span style={{ fontWeight: '800' }}>(લ, ળ)</span>
                        </div>
                    </div>
                </TheoryCard>
            </div>
        )
    }
];
