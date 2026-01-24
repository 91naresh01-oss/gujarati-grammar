import React, { createContext, useContext } from 'react';

// --- 🎯 Context for Automatic Theme Propagation ---
const TheoryThemeContext = createContext('indigo');

// --- 🎨 Global Theme Configuration (Colorful Professional) ---
const themeConfig = {
    fontSizes: {
        body: '1.05rem',
        headingMain: '1.8rem',
        headingSection: '1.5rem',
        headingSub: '1.2rem',
        small: '0.9rem',
        tableHeader: '0.95rem',
    },
    spacing: {
        cardPadding: '24px',
        elementGap: '16px',
        lineHeight: '1.6'
    },
    colors: {
        textMain: '#0f172a',      // Dark Slate (વધુ કોન્ટ્રાસ્ટ)
        textLight: '#475569',     // Medium Slate
        border: '#e2e8f0',
        cardBg: '#ffffff',
        // વાઈબ્રન્ટ કલર્સ
        primary: '#6366f1',       // Indigo
        secondary: '#ec4899',     // Pink
        accent: '#8b5cf6',        // Violet
        success: '#10b981',       // Emerald
        warning: '#f59e0b',       // Amber
        surface: '#f8fafc',       // Background Surface
    },
    gradients: {
        main: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Indigo -> Purple
        warm: 'linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)', // Rose -> Amber
        cool: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)', // Blue -> Teal
        dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // Slate
        glass: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)'
    },
    shadows: {
        soft: '0 4px 20px -2px rgba(99, 102, 241, 0.1)', // જાંબલી ટિન્ટવાળો પડછાયો
        card: '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        hover: '0 20px 40px -10px rgba(99, 102, 241, 0.2)', // હોવર ઇફેક્ટ
        text: '0 2px 10px rgba(99, 102, 241, 0.3)'
    },
    radius: {
        card: '24px',
        element: '16px',
        pill: '50px'
    }
};

// --- 🎨 Unified Theme System (15 Color Combinations) ---
const themePalette = {
    // 1. Indigo (Default - Professional Purple-Blue)
    indigo: { main: '#6366f1', light: '#eef2ff', dark: '#4338ca', grad: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' },
    // 2. Blue (Classic Corporate Blue)
    blue: { main: '#3b82f6', light: '#eff6ff', dark: '#1e40af', grad: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)' },
    // 3. Sky (Light Fresh Blue)
    sky: { main: '#0ea5e9', light: '#f0f9ff', dark: '#0369a1', grad: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)' },
    // 4. Teal (Calming Ocean)
    teal: { main: '#14b8a6', light: '#f0fdfa', dark: '#0f766e', grad: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)' },
    // 5. Cyan (Bright Aqua)
    cyan: { main: '#06b6d4', light: '#ecfeff', dark: '#0891b2', grad: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)' },
    // 6. Emerald (Rich Green)
    emerald: { main: '#059669', light: '#ecfdf5', dark: '#047857', grad: 'linear-gradient(135deg, #059669 0%, #34d399 100%)' },
    // 7. Green (Nature Fresh)
    green: { main: '#10b981', light: '#f0fdf4', dark: '#047857', grad: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' },
    // 8. Lime (Vibrant Yellow-Green)
    lime: { main: '#84cc16', light: '#f7fee7', dark: '#4d7c0f', grad: 'linear-gradient(135deg, #84cc16 0%, #a3e635 100%)' },
    // 9. Amber (Warm Golden)
    amber: { main: '#f59e0b', light: '#fffbeb', dark: '#b45309', grad: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' },
    // 10. Orange (Energetic Sunset)
    orange: { main: '#f97316', light: '#fff7ed', dark: '#c2410c', grad: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' },
    // 11. Rose (Elegant Pink-Red)
    rose: { main: '#f43f5e', light: '#fff1f2', dark: '#be185d', grad: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)' },
    // 12. Pink (Soft Feminine)
    pink: { main: '#ec4899', light: '#fdf2f8', dark: '#be185d', grad: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)' },
    // 13. Fuchsia (Bold Magenta)
    fuchsia: { main: '#d946ef', light: '#fdf4ff', dark: '#a21caf', grad: 'linear-gradient(135deg, #d946ef 0%, #e879f9 100%)' },
    // 14. Purple (Royal Violet)
    purple: { main: '#8b5cf6', light: '#f5f3ff', dark: '#6d28d9', grad: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)' },
    // 15. Violet (Deep Elegant)
    violet: { main: '#7c3aed', light: '#ede9fe', dark: '#5b21b6', grad: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }
};

const getTheme = (theme) => themePalette[theme] || themePalette.indigo;

// 1. ✨ Theory Card (Unified Theme)
export const TheoryCard = ({ title, icon, children, theme = 'indigo', style = {} }) => {
    const activeTheme = getTheme(theme);
    return (
        <TheoryThemeContext.Provider value={theme}>
            <div style={{
                background: themeConfig.colors.cardBg,
                padding: themeConfig.spacing.cardPadding,
                borderRadius: themeConfig.radius.card,
                border: `1px solid rgba(0,0,0,0.05)`,
                boxShadow: themeConfig.shadows.card,
                marginBottom: themeConfig.spacing.elementGap,
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                overflow: 'hidden',
                ...style
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = themeConfig.shadows.hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = themeConfig.shadows.card;
                }}>


                {(icon || title) && (
                    <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '18px' }}>
                        {icon && (
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: themeConfig.radius.element,
                                background: activeTheme.light,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.6rem',
                                border: `1px solid ${activeTheme.main}30`
                            }}>
                                {icon}
                            </div>
                        )}
                        {title && (
                            <h3 style={{
                                fontSize: themeConfig.fontSizes.headingSection,
                                fontWeight: '800',
                                color: themeConfig.colors.textMain,
                                margin: 0,
                                letterSpacing: '-0.02em'
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
        </TheoryThemeContext.Provider>
    );
};

// 2. 🌈 Gradient Card (Vibrant Glassmorphism)
export const GradientCard = ({ title, heading, icon, description, theme = 'indigo', children }) => {
    const activeTheme = getTheme(theme);
    const bgGradient = activeTheme.grad;
    const displayTitle = title || heading;

    return (
        <TheoryThemeContext.Provider value={theme}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)', // White Glosy
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: themeConfig.spacing.cardPadding,
                borderRadius: themeConfig.radius.card,
                marginBottom: themeConfig.spacing.elementGap,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
                {/* Background Texture Circles */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {(icon || displayTitle) && (
                        <div style={{ marginBottom: description ? '16px' : '20px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            {icon && (
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '18px',
                                    minWidth: '64px',
                                    height: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.2rem',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
                                }}>
                                    {icon}
                                </div>
                            )}
                            <div style={{ flex: 1 }}>
                                {displayTitle && (
                                    <h2 style={{
                                        fontSize: themeConfig.fontSizes.headingMain,
                                        fontWeight: '900',
                                        marginBottom: '8px',
                                        lineHeight: '1.1',
                                        color: '#0f172a', // Dark text for readability
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {displayTitle}
                                    </h2>
                                )}
                                {description && (
                                    <p style={{
                                        fontSize: themeConfig.fontSizes.body,
                                        opacity: '0.9',
                                        margin: 0,
                                        fontWeight: '500',
                                        color: '#334155',
                                        maxWidth: '90%'
                                    }}>
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                    {/* Content Container (Glass) */}
                    <div style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: children ? '16px' : '0',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                    }}>
                        {children}
                    </div>
                </div>
            </div>
        </TheoryThemeContext.Provider>
    );
};

// 3. 🎯 Section Heading (Gradient Text)
export const TheoryHeading = ({ children, color }) => (
    <div style={{ marginBottom: '12px', marginTop: '24px', position: 'relative' }}>
        <h3 style={{
            fontSize: themeConfig.fontSizes.headingSection,
            fontWeight: '800',
            margin: 0,
            display: 'inline-block',
            background: color || themeConfig.gradients.main,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: color ? 'initial' : 'transparent',
            color: color || themeConfig.colors.primary, // Fallback
            letterSpacing: '-0.01em',
            paddingBottom: '8px'
        }}>
            {children}
        </h3>
        {/* Underline Decoration */}
        <div style={{
            height: '4px',
            width: '40px',
            background: color || themeConfig.gradients.main,
            borderRadius: '2px',
            marginTop: '4px'
        }} />
    </div>
);

// 4. 🏷️ Sub Heading (Modern Pill)
export const TheorySubHeading = ({ children, bg, color, glass = false }) => {
    return (
        <h4 style={{
            fontSize: themeConfig.fontSizes.headingSub,
            fontWeight: '700',
            color: color || '#1e293b',
            background: glass ? 'rgba(255,255,255,0.5)' : (bg || '#f1f5f9'),
            padding: '6px 16px',
            borderRadius: themeConfig.radius.pill,
            marginBottom: '8px',
            marginTop: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: glass ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
        }}>
            <span style={{ color: themeConfig.colors.primary }}>❖</span>
            {children}
        </h4>
    );
};

// 5. 📝 Text (Clean Typography)
export const TheoryText = ({ children, highlight = false, color: customColor }) => (
    <p style={{
        fontSize: themeConfig.fontSizes.body,
        color: customColor || (highlight ? '#0f172a' : themeConfig.colors.textLight),
        marginBottom: '10px',
        lineHeight: '1.8',
        fontWeight: highlight ? '600' : '400',
        letterSpacing: '0.01em'
    }}>
        {children}
    </p>
);

// --- ✅ List Components (Custom Checkmarks) ---
export const TheoryList = ({ children }) => (
    <ul style={{ listStyle: 'none', padding: '0', margin: '12px 0' }}>
        {children}
    </ul>
);

export const TheoryListItem = ({ children, color }) => (
    <li style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '8px',
        lineHeight: '1.6',
        fontSize: themeConfig.fontSizes.body,
        background: '#fff',
        padding: '8px 12px',
        borderRadius: '12px',
        border: '1px solid #f1f5f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        transition: 'transform 0.2s',
        alignItems: 'center'
    }}>
        <div style={{
            minWidth: '24px',
            height: '24px',
            borderRadius: '50%',
            background: color || themeConfig.gradients.cool,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            flexShrink: 0
        }}>
            ✓
        </div>
        <span style={{ color: '#334155' }}>{children}</span>
    </li>
);

// 6. 💡 Highlight Box (Colorful Borders & Backgrounds)
export const HighlightBox = ({ title, children, type, theme: explicitTheme }) => {
    const contextTheme = useContext(TheoryThemeContext);
    const theme = explicitTheme || contextTheme;
    const activeTheme = getTheme(theme);

    // Default style mappings if no theme is specified
    const types = {
        info: { bg: '#eef2ff', border: '#6366f1', icon: 'ℹ️' }, // Indigo
        warn: { bg: '#fff7ed', border: '#f97316', icon: '⚠️' },
        success: { bg: '#f0fdf4', border: '#10b981', icon: '✅' },
        error: { bg: '#fef2f2', border: '#ef4444', icon: '⛔' },
        note: { bg: '#f5f3ff', border: '#8b5cf6', icon: '📌' }, // Purple/Violet
        example: { bg: '#fdf2f8', border: '#ec4899', icon: '💡' } // Pink
    };

    // If theme is provided, use palette colors, else fallback to type styles
    const style = theme ? {
        bg: activeTheme.light,
        border: activeTheme.main,
        icon: types[type]?.icon || '📌'
    } : (types[type] || types.info);

    return (
        <div style={{
            background: style.bg,
            borderLeft: `6px solid ${style.border}`,
            padding: '16px',
            borderRadius: '0 16px 16px 0',
            marginBottom: '16px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, transparent 50%, ${style.border}20 50%)`,
                borderRadius: '0 0 0 20px'
            }} />

            {title && (
                <div style={{
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.1rem'
                }}>
                    <span>{style.icon}</span>
                    {title}
                </div>
            )}
            <div style={{ color: '#334155', lineHeight: '1.6', fontSize: '1.05rem' }}>
                {children}
            </div>
        </div>
    );
};

// 7. 📊 Table Components (Colorful Headers)
const getTableHeaderColor = (theme) => {
    const activeTheme = getTheme(theme);
    if (!theme) return { bg: '#f8fafc', text: themeConfig.colors.primary };

    // Light-colored themes need dark text for readability
    const lightThemes = ['amber', 'lime', 'teal', 'cyan', 'emerald', 'green'];
    const textColor = lightThemes.includes(theme) ? '#1f2937' : '#ffffff';

    return {
        bg: activeTheme.grad,
        text: textColor
    };
};

export const TheoryTable = ({ children, theme: explicitTheme }) => {
    const contextTheme = useContext(TheoryThemeContext);
    const theme = explicitTheme || contextTheme;

    return (
        <div style={{
            overflowX: 'auto',
            borderRadius: '16px',
            marginBottom: '16px',
            border: `1px solid ${themeConfig.colors.border}`,
            boxShadow: themeConfig.shadows.soft,
            background: '#ffffff',
            overflow: 'hidden' // Important for rounded corners on header
        }}>
            <table style={{
                width: '100%',
                minWidth: '600px',
                borderCollapse: 'collapse',
                fontSize: themeConfig.fontSizes.tableCell
            }}>
                {/* Render Header if exists */}
                {React.Children.map(children, child => {
                    if (React.isValidElement(child) && child.type === TheoryTableHeader) {
                        return React.cloneElement(child, { theme: child.props.theme || theme });
                    }
                    return null;
                })}
                {/* Render Rows in TBody */}
                <tbody>
                    {React.Children.map(children, child => {
                        if (React.isValidElement(child) && child.type !== TheoryTableHeader) {
                            return child;
                        }
                        return null;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export const TheoryTableHeader = ({ headers, children, theme }) => {
    const headerStyle = getTableHeaderColor(theme);

    return (
        <thead>
            <tr style={{ background: headerStyle.bg }}>
                {headers ? headers.map((h, i) => (
                    <th key={i} style={{
                        padding: '12px',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: headerStyle.text,
                        fontSize: themeConfig.fontSizes.tableHeader,
                        borderBottom: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textShadow: headerStyle.text === '#ffffff' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                    }}>
                        {h}
                    </th>
                )) : children}
            </tr>
        </thead>
    );
};

export const TheoryTableRow = ({ cells, isEven = false, children }) => (
    <tr style={{
        background: isEven ? '#f8fafc' : '#ffffff',
        transition: 'background 0.2s'
    }}>
        {cells ? cells.map((c, i) => (
            <td key={i} style={{
                padding: '12px',
                color: '#475569',
                verticalAlign: 'top',
                borderBottom: '1px solid #f1f5f9'
            }}>
                {c}
            </td>
        )) : children}
    </tr>
);

// 8. 🔲 Grid
export const TheoryGrid = ({ children, minWidth = '320px' }) => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        gap: '16px',
        marginTop: '16px'
    }}>
        {children}
    </div>
);
