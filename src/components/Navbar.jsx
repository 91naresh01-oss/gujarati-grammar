import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import InstallButton from './InstallButton';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <nav className="top-navbar">
                <div className="navbar-brand" onClick={() => navigate('/')}>
                    <img src="/app-icon.png" alt="App Logo" className="brand-icon" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '4px' }} />
                </div>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <InstallButton />
                    <button
                        className="settings-trigger-btn"
                        onClick={() => setIsSettingsOpen(true)}
                        title="Settings"
                    >
                        ⚙️
                    </button>
                </div>
            </nav>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </>
    );
};

export default Navbar;


