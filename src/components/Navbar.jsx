import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsModal from './SettingsModal';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <nav className="top-navbar">
                <div className="navbar-brand" onClick={() => navigate('/')}>
                    <img src="/app-icon.png" alt="App Logo" className="brand-icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                    <span className="brand-text">ગુજરાતી વ્યાકરણ</span>
                </div>

                <button
                    className="settings-trigger-btn"
                    onClick={() => setIsSettingsOpen(true)}
                    title="Settings"
                >
                    ⚙️
                </button>
            </nav>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </>
    );
};

export default Navbar;


