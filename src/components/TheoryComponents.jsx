import React from 'react';

// --- Global Theme Configuration ---
const themeConfig = {
    fontSizes: {
        body: '1.05rem',          // થોડું નાનું પણ વાંચવામાં સરળ
        headingMain: '1.75rem',   // મુખ્ય હેડિંગ મોટું
        headingSection: '1.4rem',
        headingSub: '1.15rem',
        small: '0.9rem',
        tableHeader: '0.95rem',
        tableCell: '0.95rem'
    },
    spacing: {
        cardPadding: '28px',      // વધુ સ્પેસિંગ (Breathing room)
        elementGap: '24px',
        lineHeight: '1.75'
    },
    colors: {
        textMain: '#1e293b',      // Slate 800 - ગાઢ ગ્રે (વધુ પ્રોફેશનલ)
        textLight: '#475569',     // Slate 600
        border: '#e2e8f0',        // Slate 200
        cardBg: '#ffffff',
        accentBg: '#f8fafc',
        primary: '#6366f1',       // Indigo 500 (વધુ વાઈબ્રન્ટ)
        primaryDark: '#4338ca'    // Indigo 700
    },
    shadows: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // એકદમ હળવો પડછાયો
        card: '0 10px 30px -5px rgba(0, 0, 0, 0.06)', // કાર્ડ માટે ઊંડાણ
        glow: '0 0 20px rgba(99, 102, 241, 0.25)',
        glass: 'backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);'
    },
    radius: {
        card: '20px',
        element: '12px'
    }
};

// --- Helper for Theme Gradients (More Vibrant) ---
const getGradient = (theme) => {
    const gradients = {
        blue: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)',
        teal: 'linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)',
        purple: 'linear-gradient(135deg, #faf5ff 0%, #ddd6fe 100%)',
        amber: 'linear-gradient(135deg, #fffbeb 0%, #fde68a 100%)',
        rose: 'linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)',
        indigo: 'linear-gradient(135deg, #eef2ff 0%, #c7d2fe 100%)',
        primary: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        orange: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
        pink: 'linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)',
        // New Premium Gradients
        ocean: 'linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)',
        midnight: 'linear-gradient(135deg, #e0e7ff 0%, #818cf8 100%)'
    };
    return gradients[theme] || gradients.primary;
};

// --- Components ---

// 1. Theory Card (Clean, Elevated, Minimalist)
export const TheoryCard = ({ title, icon, children, theme, style = {} }) => (
    <div style={{
        background: themeConfig.colors.cardBg,
        padding: themeConfig.spacing.cardPadding,
        borderRadius: themeConfig.radius.card,
        border: `1px solid ${themeConfig.colors.border}`,
        boxShadow: themeConfig.shadows.card,
        marginBottom: themeConfig.spacing.elementGap,
        maxWidth: '100%',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Smooth hover effect intent
        ...style
    }}>
        {/* Top Accent Line */}
        <div style={{
            position: 'absolute',
            top: '20px',
            left: '0',
            width: '4px',
            height: '40px',
            background: theme ? getGradient(theme) : themeConfig.colors.primary,
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px'
        }} />

        {(icon || title) && (
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                {icon && (
                    <span style={{
                        fontSize: '1.6rem',
                        background: theme ? getGradient(theme) : '#f1f5f9',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: themeConfig.radius.element,
                        color: themeConfig.colors.primaryDark,
                        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8)'
                    }}>
                        {icon}
                    </span>
                )}
                {title && (
                    <h3 style={{
                        fontSize: themeConfig.fontSizes.headingSection,
                        fontWeight: '700',
                        color: themeConfig.colors.textMain,
                        margin: 0,
                        letterSpacing: '-0.01em'
                    }}>
                        {title}
                    </h3>
                )}
            </div>
        )}
        <div style={{ color: themeConfig.colors.textLight, lineHeight: themeConfig.spacing.lineHeight }}>
            {children}
        </div>
    </div>
);

// 2. Gradient Card (Glassmorphism Style)
export const GradientCard = ({ title, heading, icon, description, theme = 'indigo', children }) => {
    const bgGradient = getGradient(theme);
    const displayTitle = title || heading;

    return (
        <div style={{
            background: bgGradient,
            padding: themeConfig.spacing.cardPadding,
            borderRadius: themeConfig.radius.card,
            color: '#0f172a',
            marginBottom: themeConfig.spacing.elementGap,
            boxShadow: themeConfig.shadows.soft,
            border: '1px solid rgba(255,255,255,0.5)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Circle Background */}
            <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {(icon || displayTitle) && (
                    <div style={{ marginBottom: description ? '16px' : '20px', display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                        {icon && (
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.4)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '16px',
                                minWidth: '56px',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                border: '1px solid rgba(255,255,255,0.6)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                            }}>
                                {icon}
                            </div>
                        )}
                        <div style={{ flex: 1 }}>
                            {displayTitle && (
                                <h2 style={{
                                    fontSize: themeConfig.fontSizes.headingMain,
                                    fontWeight: '800',
                                    marginBottom: '6px',
                                    lineHeight: '1.2',
                                    color: '#0f172a',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {displayTitle}
                                </h2>
                            )}
                            {description && (
                                <p style={{
                                    fontSize: themeConfig.fontSizes.body,
                                    opacity: '0.85',
                                    margin: 0,
                                    fontWeight: '500',
                                    color: '#334155'
                                }}>
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                )}
                <div style={{
                    background: 'rgba(255,255,255,0.3)',
                    borderRadius: '16px',
                    padding: children ? '16px' : '0',
                    border: '1px solid rgba(255,255,255,0.4)'
                }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

// 3. Section Heading (H3 with Underline)
export const TheoryHeading = ({ children, color = themeConfig.colors.textMain }) => (
    <div style={{ marginBottom: '16px', marginTop: '32px' }}>
        <h3 style={{
            fontSize: themeConfig.fontSizes.headingSection,
            fontWeight: '700',
            color: color,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            <span style={{
                height: '24px',
                width: '6px',
                background: themeConfig.colors.primary,
                borderRadius: '4px',
                display: 'inline-block'
            }}></span>
            {children}
        </h3>
    </div>
);

// 4. Sub Heading (Chip Style)
export const TheorySubHeading = ({ children, bg, color, glass = false }) => {
    const defaultBg = bg || '#f1f5f9';
    const defaultColor = color || '#334155';

    return (
        <h4 style={{
            fontSize: themeConfig.fontSizes.headingSub,
            fontWeight: '600',
            color: glass ? '#0f172a' : defaultColor,
            background: glass ? 'rgba(255, 255, 255, 0.5)' : defaultBg,
            padding: '8px 18px',
            borderRadius: '50px', // Pill shape
            marginBottom: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '12px',
            border: glass ? '1px solid rgba(255, 255, 255, 0.5)' : `1px solid ${bg || '#e2e8f0'}`,
            backdropFilter: glass ? 'blur(8px)' : 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
            <span style={{ marginRight: '8px', fontSize: '1.2em' }}>📌</span>
            {children}
        </h4>
    );
};

// 5. Text (Better Readability)
export const TheoryText = ({ children, highlight = false, color: customColor }) => (
    <p style={{
        fontSize: themeConfig.fontSizes.body,
        color: customColor || (highlight ? '#1e293b' : themeConfig.colors.textLight),
        marginBottom: '16px',
        lineHeight: '1.8',
        fontWeight: highlight ? '600' : '400',
        letterSpacing: '0.015em'
    }}>
        {children}
    </p>
);

// --- List Components ---
export const TheoryList = ({ children, color = 'inherit' }) => (
    <ul style={{ listStyle: 'none', padding: '0 0 0 4px', margin: '20px 0' }}>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { color: color !== 'inherit' ? color : child.props?.color });
            }
            return child;
        })}
    </ul>
);

export const TheoryListItem = ({ children, color = 'inherit' }) => (
    <li style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '14px',
        lineHeight: '1.6',
        color: color,
        alignItems: 'flex-start',
        fontSize: themeConfig.fontSizes.body,
        background: 'rgba(255,255,255,0.5)',
        padding: '8px 12px',
        borderRadius: '8px'
    }}>
        <div style={{
            background: '#e0e7ff',
            color: themeConfig.colors.primary,
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '0.8rem',
            marginTop: '2px'
        }}>
            ✦
        </div>
        <span style={{ flex: 1, paddingTop: '1px' }}>{children}</span>
    </li>
);

// 6. Highlight Box (Modern Callout)
export const HighlightBox = ({ title, children, type = 'info' }) => {
    const types = {
        info: { bg: '#eff6ff', border: '#60a5fa', text: '#1e40af', icon: '💡' },
        warn: { bg: '#fff7ed', border: '#fb923c', text: '#9a3412', icon: '⚠️' },
        success: { bg: '#f0fdf4', border: '#4ade80', text: '#166534', icon: '✅' },
        error: { bg: '#fef2f2', border: '#f87171', text: '#991b1b', icon: '🛑' },
        note: { bg: '#f8fafc', border: '#94a3b8', text: '#334155', icon: '📝' },
        example: { bg: '#faf5ff', border: '#a78bfa', text: '#6b21a8', icon: '�' }
    };

    const style = types[type] || types.info;

    return (
        <div style={{
            background: style.bg,
            borderLeft: `5px solid ${style.border}`,
            padding: '20px',
            borderRadius: '0 12px 12px 0',
            marginBottom: '24px',
            fontSize: themeConfig.fontSizes.body,
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}>
            {title && (
                <div style={{
                    fontWeight: '700',
                    color: style.text,
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '1.1rem'
                }}>
                    <span style={{ fontSize: '1.4rem' }}>{style.icon}</span>
                    {title}
                </div>
            )}
            <div style={{ color: '#334155', lineHeight: '1.7' }}>
                {children}
            </div>
        </div>
    );
};

// 7. Table Components (Clean & Striped)
export const TheoryTable = ({ children }) => (
    <div style={{
        overflowX: 'auto',
        borderRadius: '16px',
        marginBottom: '24px',
        border: `1px solid ${themeConfig.colors.border}`,
        boxShadow: themeConfig.shadows.soft,
        background: '#ffffff'
    }}>
        <table style={{
            width: '100%',
            minWidth: '500px',
            borderCollapse: 'collapse',
            fontSize: themeConfig.fontSizes.tableCell
        }}>
            {children}
        </table>
    </div>
);

export const TheoryTableHeader = ({ headers, children }) => (
    <thead>
        <tr style={{ background: '#f1f5f9' }}>
            {headers ? headers.map((h, i) => (
                <th key={i} style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: '700',
                    color: '#334155',
                    fontSize: themeConfig.fontSizes.tableHeader,
                    borderBottom: '2px solid #cbd5e1',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    {h}
                </th>
            )) : children}
        </tr>
    </thead>
);

export const TheoryTableRow = ({ cells, isEven = false, children }) => (
    <tr style={{
        background: isEven ? '#f8fafc' : '#ffffff',
        borderBottom: '1px solid #f1f5f9'
    }}>
        {cells ? cells.map((c, i) => (
            <td key={i} style={{
                padding: '16px',
                color: '#475569',
                verticalAlign: 'top',
                lineHeight: '1.6'
            }}>
                {c}
            </td>
        )) : children}
    </tr>
);

// 8. Grid
export const TheoryGrid = ({ children, minWidth = '300px' }) => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        gap: '24px',
        marginTop: '24px'
    }}>
        {children}
    </div>
);
