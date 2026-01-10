import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Default size 14px
    const [fontSize, setFontSize] = useState(14);

    useEffect(() => {
        // Apply font size to root HTML element
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const increaseFontSize = () => {
        setFontSize(prev => Math.min(prev + 2, 24)); // Max 24px
    };

    const decreaseFontSize = () => {
        setFontSize(prev => Math.max(prev - 2, 12)); // Min 12px
    };

    const resetFontSize = () => {
        setFontSize(14);
    };

    return (
        <ThemeContext.Provider value={{ fontSize, setFontSize, increaseFontSize, decreaseFontSize, resetFontSize }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
