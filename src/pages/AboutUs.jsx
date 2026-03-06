import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../components/BackArrow';

function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            {/* Header Section */}
            <div className="about-header-section compact">
                <button className="about-back-btn" onClick={() => navigate('/')}>
                    <BackArrow size={20} color="white" />
                </button>
                <div className="about-branding">
                    <img src="/gyan-logo.png" alt="Gyan Academy Logo" className="about-logo" />
                </div>
                <p className="about-location compact">Gandhinagar, Gujarat</p>
            </div>

            <p className="about-tagline">
                ગુજરાતી ભાષાના વ્યાકરણને સરળ અને રસપ્રદ રીતે શીખવાનું એક વિશ્વસનીય માધ્યમ.
            </p>

            {/* Mission Card */}
            <div className="about-info-card">
                <div className="info-card-header">
                    <span className="info-icon">🎯</span>
                    <h2>અમારો ઉદ્દેશ્ય</h2>
                </div>
                <p>
                    <strong>ગુજરાતી વ્યાકરણ</strong> માં અમારો મુખ્ય ઉદ્દેશ્ય દરેક વિદ્યાર્થી માટે શિક્ષણને સુલભ,
                    રસપ્રદ અને અસરકારક બનાવવાનો છે. અમે માનીએ છીએ કે મજબૂત પાયો અને સ્પષ્ટ સમજ એ
                    જ્ઞાન પ્રાપ્તિના મુખ્ય આધારસ્તંભ છે. અમે વિદ્યાર્થીઓને સ્પર્ધાત્મક પરીક્ષાઓ અને
                    શૈક્ષણિક અભ્યાસક્રમ માટે શ્રેષ્ઠ ગુણવત્તાવાળા સાધનો અને માર્ગદર્શન પૂરું પાડવા માટે સમર્પિત છીએ.
                </p>
            </div>

            {/* What We Offer Section */}
            <div className="about-section-title">
                <span className="sparkle-icon">✨</span>
                <span>અમે શું પ્રદાન કરીએ છીએ?</span>
            </div>

            <div className="about-features-grid">
                <div className="feature-card">
                    <div className="feature-header">
                        <span className="feature-icon">📖</span>
                        <h3>વિષય નિપુણતા</h3>
                    </div>
                    <p>
                        ગુજરાતી વ્યાકરણ અને અન્ય જટિલ વિષયોના નિયમો ખૂબ જ સરળ
                        અને સ્પષ્ટ ગુજરાતી ભાષામાં સમજાવવામાં આવે છે.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-header">
                        <span className="feature-icon">📝</span>
                        <h3>પ્રેક્ટિસ ટેસ્ટ</h3>
                    </div>
                    <p>
                        તમારા જ્ઞાનને ચકાસવા અને આત્મવિશ્વાસ વધારવા માટે વિષય
                        મુજબ વિવિધ સ્તરના પ્રેક્ટિસ ટેસ્ટ ઉપલબ્ધ છે.
                    </p>
                </div>
            </div>

            {/* Target Audience */}
            <div className="about-section-title">
                <span className="sparkle-icon">👥</span>
                <span>કોના માટે છે?</span>
            </div>

            <div className="about-features-grid">
                <div className="feature-card">
                    <div className="feature-header">
                        <span className="feature-icon">🎓</span>
                        <h3>વિદ્યાર્થીઓ</h3>
                    </div>
                    <p>શાળા અને કોલેજના વિદ્યાર્થીઓ માટે વ્યાકરણ શીખવાનું સરળ બનાવ્યું.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-header">
                        <span className="feature-icon">📚</span>
                        <h3>GPSC/TET તૈયારી</h3>
                    </div>
                    <p>સ્પર્ધાત્મક પરીક્ષાની તૈયારી માટે સંપૂર્ણ વ્યાકરણ કોર્સ.</p>
                </div>
            </div>

            {/* Footer */}
            <div className="about-footer-card">
                <div className="made-with-love">
                    <span>Made with</span>
                    <span className="heart">❤️</span>
                    <span>in Gujarat</span>
                </div>
                <p className="copyright">© 2026 ગુજરાતી વ્યાકરણ</p>
            </div>
        </div>
    );
}

export default AboutUs;
