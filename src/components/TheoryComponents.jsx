import React from 'react';

// --- Global Theme Configuration ---
const themeConfig = {
    fontSizes: {
        body: '1.1rem',           // Body Text
        headingMain: '1.5rem',     // Main Title
        headingSection: '1.3rem',  // Section Heading (H3)
        headingSub: '1.2rem',      // Sub Heading (H4)
        small: '1rem',             // Table/Small
        tableHeader: '1rem',
        tableCell: '1rem'
    },
    spacing: {
        cardPadding: '20px',
        elementGap: '15px',
        lineHeight: '1.7'
    },
    colors: {
        textMain: '#1f2937', // Gray 800
        textLight: '#4b5563', // Gray 600
        border: '#e5e7eb',    // Gray 200
        cardBg: '#ffffff',
        accentBg: '#f3f4f6'
    }
};

// --- Components ---

// 1. Standard Card
export const TheoryCard = ({ children, style = {} }) => (
    <div style={{
        background: themeConfig.colors.cardBg,
        padding: themeConfig.spacing.cardPadding,
        borderRadius: '15px',
        border: `1px solid ${themeConfig.colors.border}`,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)',
        marginBottom: themeConfig.spacing.elementGap,
        maxWidth: '100%',
        overflowWrap: 'anywhere',
        wordBreak: 'normal',
        ...style
    }}>
        {children}
    </div>
);

// 2. Gradient Header Card
export const GradientCard = ({ heading, description, theme = 'blue', children }) => {
    // Higher-quality Vibrant Pastel Gradient Presets
    const gradients = {
        blue: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        teal: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
        purple: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        amber: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        rose: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        indigo: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
        primary: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    };

    const bgGradient = gradients[theme] || gradients.primary;

    return (
        <div style={{
            background: bgGradient,
            padding: '22px',
            borderRadius: '16px',
            color: '#1e293b', // Darker text for light backgrounds
            marginBottom: themeConfig.spacing.elementGap,
            boxShadow: '0 4px 15px rgba(0,0,0, 0.08)',
            maxWidth: '100%',
            overflowWrap: 'anywhere',
            wordBreak: 'normal',
            border: '1px solid rgba(0,0,0,0.05)'
        }}>
            {heading && (
                <h2 style={{
                    fontSize: themeConfig.fontSizes.headingMain,
                    fontWeight: '800',
                    marginBottom: description ? '8px' : '0',
                    lineHeight: '1.3'
                }}>
                    {heading}
                </h2>
            )}
            {description && (
                <p style={{
                    fontSize: themeConfig.fontSizes.body,
                    opacity: '0.95',
                    margin: 0,
                    lineHeight: '1.6'
                }}>
                    {description}
                </p>
            )}
            {children}
        </div>
    );
};

// 3. Section Heading (H3)
export const TheoryHeading = ({ children, color = themeConfig.colors.textMain }) => (
    <h3 style={{
        fontSize: themeConfig.fontSizes.headingSection,
        fontWeight: '800',
        marginBottom: '15px',
        color: color,
        lineHeight: '1.4'
    }}>
        {children}
    </h3>
);

// 4. Sub Heading (H4 Styled)
export const TheorySubHeading = ({ children, bg = '#eff6ff', color = '#1e3a8a', glass = false }) => (
    <h4 style={{
        fontSize: themeConfig.fontSizes.headingSub,
        fontWeight: '700',
        color: glass ? '#1e293b' : color, // Use dark color even if glass on light background
        background: glass ? 'rgba(255, 255, 255, 0.5)' : bg,
        padding: '10px 18px',
        borderRadius: '12px',
        marginBottom: '15px',
        display: 'inline-block',
        marginTop: '10px',
        border: glass ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: glass ? 'blur(4px)' : 'none'
    }}>
        {children}
    </h4>
);

// 5. Standard Text Paragraph
export const TheoryText = ({ children, highlight = false, color: customColor }) => (
    <p style={{
        fontSize: themeConfig.fontSizes.body,
        color: customColor || (highlight ? '#111827' : themeConfig.colors.textLight),
        marginBottom: '10px',
        lineHeight: themeConfig.spacing.lineHeight,
        fontWeight: highlight ? '500' : '400',
        overflowWrap: 'anywhere',
        wordBreak: 'normal'
    }}>
        {children}
    </p>
);

// --- List Components ---
export const TheoryList = ({ children, color = 'inherit' }) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: '15px 0' }}>
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
        gap: '12px',
        marginBottom: '12px',
        lineHeight: '1.7',
        color: color,
        alignItems: 'flex-start',
        fontSize: themeConfig.fontSizes.body
    }}>
        <span style={{
            color: color === '#ffffff' ? '#ffffff' : '#0d9488',
            fontSize: '1.2rem',
            marginTop: '2px',
            opacity: '0.9'
        }}>✦</span>
        <span style={{ flex: 1 }}>{children}</span>
    </li>
);

// 6. Highlight/Info Box
export const HighlightBox = ({ title, children, type = 'info' }) => {
    const types = {
        info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e3a8a' }, // Blue
        warn: { bg: '#fff7ed', border: '#fed7aa', text: '#9a3412' }, // Orange
        success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' }, // Green
        error: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b' }, // Red
        note: { bg: '#f9fafb', border: '#e5e7eb', text: '#374151' }, // Gray
        'translucent-white': { bg: 'rgba(255, 255, 255, 0.2)', border: 'rgba(255, 255, 255, 0.3)', text: '#ffffff' } // For gradient backgrounds
    };

    const style = types[type] || types.info;

    return (
        <div style={{
            background: style.bg,
            border: `1px solid ${style.border}`,
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '12px',
            fontSize: themeConfig.fontSizes.body
        }}>
            {title && <div style={{ fontWeight: '700', color: style.text, marginBottom: '5px' }}>{title}</div>}
            <div style={{ color: type === 'translucent-white' ? '#ffffff' : '#1f2937', lineHeight: '1.6' }}>{children}</div>
        </div>
    );
};

// 7. Table and Row Components
export const TheoryTable = ({ children }) => (
    <div style={{
        overflowX: 'auto',
        border: `1px solid ${themeConfig.colors.border}`,
        borderRadius: '10px',
        marginBottom: '15px',
        WebkitOverflowScrolling: 'touch'
    }}>
        <table style={{
            width: '100%',
            minWidth: '300px',
            borderCollapse: 'collapse',
            fontSize: themeConfig.fontSizes.tableCell
        }}>
            {children}
        </table>
    </div>
);

export const TheoryTableHeader = ({ headers }) => (
    <thead>
        <tr>
            {headers.map((h, i) => (
                <th key={i} style={{
                    background: '#f9fafb',
                    padding: '12px',
                    borderBottom: '2px solid #e5e7eb',
                    textAlign: 'left',
                    fontWeight: '700',
                    color: '#374151',
                    fontSize: themeConfig.fontSizes.tableHeader
                }}>
                    {h}
                </th>
            ))}
        </tr>
    </thead>
);

export const TheoryTableRow = ({ cells, isEven = false }) => (
    <tr style={{ background: isEven ? '#f9fafb' : '#fff' }}>
        {cells.map((c, i) => (
            <td key={i} style={{
                padding: '12px',
                borderBottom: '1px solid #f3f4f6',
                color: '#1f2937',
                verticalAlign: 'top'
            }}>
                {c}
            </td>
        ))}
    </tr>
);

// 8. Grid Container for Cards
export const TheoryGrid = ({ children, minWidth = '250px' }) => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        gap: '15px',
        marginTop: '15px'
    }}>
        {children}
    </div>
);
