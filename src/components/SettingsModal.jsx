import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SettingsModal = ({ isOpen, onClose }) => {
    const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useTheme();

    if (!isOpen) return null;

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-modal" onClick={e => e.stopPropagation()}>
                <div className="settings-header">
                    <h3>સેટિંગ્સ (Settings)</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="settings-content">
                    <div className="setting-item">
                        <label>ફોન્ટ સાઈઝ (Font Size)</label>
                        <div className="font-controls">
                            <button className="font-btn" onClick={decreaseFontSize} disabled={fontSize <= 12}>A-</button>
                            <span className="font-value">{fontSize}px</span>
                            <button className="font-btn" onClick={increaseFontSize} disabled={fontSize >= 24}>A+</button>
                        </div>
                    </div>

                    <button className="reset-btn" onClick={resetFontSize}>
                        ડિફોલ્ટ (Reset)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
