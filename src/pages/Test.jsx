import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { chaptersData } from '../data';
import BackArrow from '../components/BackArrow';

// Gradient colors for test buttons
const testGradients = [
    'linear-gradient(135deg, #667eea, #764ba2)', // Purple-Indigo
    'linear-gradient(135deg, #43e97b, #38f9d7)', // Green-Mint
    'linear-gradient(135deg, #a18cd1, #fbc2eb)', // Purple-Pink
    'linear-gradient(135deg, #f6d365, #fda085)', // Yellow-Orange
    'linear-gradient(135deg, #f093fb, #f5576c)', // Pink-Red
    'linear-gradient(135deg, #4facfe, #00f2fe)', // Blue-Cyan
    'linear-gradient(135deg, #43e97b, #38f9d7)', // Green-Teal
    'linear-gradient(135deg, #fa709a, #fee140)', // Pink-Yellow
    'linear-gradient(135deg, #a18cd1, #fbc2eb)', // Lavender
    'linear-gradient(135deg, #667eea, #764ba2)', // Indigo
    'linear-gradient(135deg, #f093fb, #f5576c)', // Magenta
    'linear-gradient(135deg, #e44d26, #f16529)', // Red
    'linear-gradient(135deg, #11998e, #38ef7d)', // Teal-Green
    'linear-gradient(135deg, #ee0979, #ff6a00)', // Pink-Orange
    'linear-gradient(135deg, #0575e6, #021b79)', // Deep Blue
];

function Test() {
    const navigate = useNavigate();
    const { id } = useParams();
    const chapter = chaptersData.find(c => c.id === parseInt(id));

    // States for Test Logic
    const [selectedTestId, setSelectedTestId] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    // State for lazy-loaded test data
    const [testsData, setTestsData] = useState(null);
    const [isLoadingTests, setIsLoadingTests] = useState(true);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        if (chapter && chapter.loadTests) {
            setIsLoadingTests(true);
            chapter.loadTests()
                .then(data => {
                    setTestsData(data);
                    setIsLoadingTests(false);
                })
                .catch(err => {
                    console.error("Failed to load tests:", err);
                    setError("ટેસ્ટ ડેટા લોડ કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.");
                    setIsLoadingTests(false);
                });
        } else {
            setIsLoadingTests(false);
        }
    }, [chapter]);

    if (!chapter) return <div>Chapter Not Found</div>;

    // Helper to reset and start a specific test
    const startTest = (testId) => {
        setSelectedTestId(testId);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
        setUserAnswers([]);
    };

    // If no test is selected yet, show the "Select Test" screen
    if (!selectedTestId) {
        return (
            <div className="test-select-wrapper">
                {/* Glass Container */}
                <div className="test-select-container">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/chapters')}
                        className="test-select-back-btn"
                    >
                        <BackArrow size={18} color="white" />
                    </button>

                    {/* Chapter Badge */}
                    <div className="test-select-badge">
                        <span className="test-badge-dot"></span>
                        CHAPTER {id}
                    </div>

                    {/* Chapter Name */}
                    <h2 className="test-select-title">{chapter.name}</h2>

                    {/* Test Buttons Grid */}
                    {isLoadingTests ? (
                        <div style={{ textAlign: 'center', padding: '50px 0', color: '#3b82f6', fontSize: '1.1rem', fontWeight: 600 }}>
                            <div style={{
                                width: '40px', height: '40px', border: '4px solid #e5e7eb',
                                borderTop: '4px solid #3b82f6', borderRadius: '50%',
                                animation: 'spin 0.8s linear infinite', margin: '0 auto 15px'
                            }} />
                            ટેસ્ટ લોડ થઈ રહી છે...
                        </div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', padding: '20px', color: '#ef4444' }}>{error}</div>
                    ) : testsData && testsData.length > 0 ? (
                        <div className="test-select-grid">
                            {testsData.map((test, index) => (
                                <button
                                    key={test.id}
                                    className="test-pill-btn"
                                    style={{ background: testGradients[index % testGradients.length] }}
                                    onClick={() => startTest(test.id)}
                                >
                                    <span className="test-pill-num">{index + 1}</span>
                                    <span className="test-pill-text">Test</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', color: '#9ca3af', padding: '30px 0' }}>No tests available yet.</p>
                    )}
                </div>
            </div>
        );
    }

    // Active Test Logic
    const activeTest = testsData?.find(t => t.id === selectedTestId);
    if (!activeTest) return <div>Test Not Found</div>;

    const currentQuestion = activeTest.questions[currentQuestionIndex];

    const handleOptionSelect = (option) => {
        if (selectedOption) return; // Prevent changing after selection
        setSelectedOption(option);
        setUserAnswers(prev => [...prev, { questionIndex: currentQuestionIndex, selected: option }]);
        if (option === currentQuestion.answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        // If skipped (no option selected), record skip
        if (!selectedOption) {
            setUserAnswers(prev => [...prev, { questionIndex: currentQuestionIndex, selected: null }]);
        }
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < activeTest.questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    // Helper to determine button style based on state
    const getOptionStyle = (option) => {
        const baseStyle = {
            padding: '12px 15px', // Reduced padding
            textAlign: 'left',
            borderRadius: '12px',
            fontSize: '1rem', // Reduced font size
            cursor: selectedOption ? 'default' : 'pointer',
            transition: 'all 0.2s',
            color: '#1f2937',
            border: '1px solid #e5e7eb',
            background: 'white'
        };

        if (selectedOption) {
            if (option === currentQuestion.answer) {
                // Correct Answer - Always Green
                return { ...baseStyle, border: '2px solid #22c55e', background: '#f0fdf4', color: '#15803d' };
            }
            if (selectedOption === option && option !== currentQuestion.answer) {
                // Wrong Selection - Red
                return { ...baseStyle, border: '2px solid #ef4444', background: '#fef2f2', color: '#b91c1c' };
            }
        }

        return baseStyle;
    };

    // Result Screen
    if (showResult) {
        const percentage = Math.round((score / activeTest.questions.length) * 100);
        const getResultEmoji = () => {
            if (percentage === 100) return '🏆';
            if (percentage >= 80) return '🎉';
            if (percentage >= 60) return '😊';
            if (percentage >= 40) return '👍';
            return '💪';
        };
        const getResultMsg = () => {
            if (percentage === 100) return 'ઉત્તમ! પરફેક્ટ સ્કોર!';
            if (percentage >= 80) return 'ખૂબ સરસ!';
            if (percentage >= 60) return 'સારું!';
            if (percentage >= 40) return 'સારા પ્રયાસ!';
            return 'ફરી પ્રયાસ કરો!';
        };
        const wrongCount = activeTest.questions.length - score;
        const skippedCount = userAnswers.filter(a => a.selected === null).length;

        return (
            <div className="result-page-wrapper">
                {/* Score Card */}
                <div className="result-score-card">
                    <div className="result-score-ring">
                        <svg viewBox="0 0 120 120" className="result-ring-svg">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                            <circle cx="60" cy="60" r="52" fill="none" stroke={percentage >= 60 ? '#22c55e' : percentage >= 40 ? '#f59e0b' : '#ef4444'} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(percentage / 100) * 327} 327`} transform="rotate(-90 60 60)" style={{ transition: 'stroke-dasharray 1s ease' }} />
                        </svg>
                        <div className="result-ring-text">
                            <span className="result-ring-score">{score}/{activeTest.questions.length}</span>
                            <span className="result-ring-percent">{percentage}%</span>
                        </div>
                    </div>
                    <div className="result-emoji">{getResultEmoji()}</div>
                    <h2 className="result-msg">{getResultMsg()}</h2>

                    <div className="result-stats">
                        <div className="result-stat correct"><span className="stat-num">{score}</span><span className="stat-label">સાચા</span></div>
                        <div className="result-stat wrong"><span className="stat-num">{wrongCount - skippedCount}</span><span className="stat-label">ખોટા</span></div>
                        <div className="result-stat skipped"><span className="stat-num">{skippedCount}</span><span className="stat-label">છોડ્યા</span></div>
                    </div>

                    <div className="result-actions">
                        <button className="result-btn result-btn-primary" onClick={() => startTest(selectedTestId)}>ફરીથી ટેસ્ટ આપો</button>
                        <button className="result-btn result-btn-outline" onClick={() => setSelectedTestId(null)}>બીજી ટેસ્ટ પસંદ કરો</button>
                    </div>
                </div>

                {/* Questions Review */}
                <div className="result-review-section">
                    <h3 className="review-heading">📋 જવાબોની સમીક્ષા</h3>
                    {activeTest.questions.map((q, qIndex) => {
                        const userAns = userAnswers.find(a => a.questionIndex === qIndex);
                        const userSelected = userAns ? userAns.selected : null;
                        const isCorrect = userSelected === q.answer;
                        const isSkipped = userSelected === null;

                        return (
                            <div key={qIndex} className={`review-card ${isSkipped ? 'review-skipped' : isCorrect ? 'review-correct' : 'review-wrong'}`}>
                                <div className="review-q-header">
                                    <span className={`review-q-badge ${isSkipped ? 'badge-skip' : isCorrect ? 'badge-correct' : 'badge-wrong'}`}>
                                        {isSkipped ? '⏩' : isCorrect ? '✅' : '❌'}
                                    </span>
                                    <span className="review-q-num">Q{qIndex + 1}.</span>
                                    <span className="review-q-text">{q.question}</span>
                                </div>
                                <div className="review-answers">
                                    {!isSkipped && !isCorrect && (
                                        <div className="review-ans review-ans-wrong">
                                            <span className="review-ans-label">તમારો જવાબ:</span>
                                            <span className="review-ans-value">{userSelected}</span>
                                        </div>
                                    )}
                                    <div className="review-ans review-ans-correct">
                                        <span className="review-ans-label">સાચો જવાબ:</span>
                                        <span className="review-ans-value">{q.answer}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Question Screen
    return (
        <div style={{ maxWidth: '650px', margin: '0 auto', padding: '20px' }}>
            <div className="theory-title-pill" style={{
                width: '100%',
                padding: '10px 15px',
                borderRadius: '50px',
                background: '#3b82f6',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                marginBottom: '20px',
                border: '2px solid rgba(255, 255, 255, 0.2)'
            }}>
                <button
                    onClick={() => setSelectedTestId(null)}
                    style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        color: 'white',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}
                >
                    <BackArrow size={18} color="white" />
                </button>

                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0 10px',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ opacity: 0.95 }}>પ્રકરણ {id} : {chapter.name}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 'normal', marginTop: '2px' }}>{activeTest.name}</span>
                </div>

                <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    minWidth: '60px',
                    textAlign: 'center'
                }}>
                    {currentQuestionIndex + 1} / {activeTest.questions.length}
                </div>
            </div>

            <div className="clean-card" style={{ padding: '25px', marginTop: '10px', borderRadius: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '30px', lineHeight: '1.5' }}>
                    <span style={{ color: '#3b82f6', marginRight: '10px' }}>{currentQuestionIndex + 1}.</span>
                    {currentQuestion.question}
                </h2>

                <div style={{ display: 'grid', gap: '15px' }}>
                    {currentQuestion.options.map((option, index) => {
                        const isCorrect = selectedOption && option === currentQuestion.answer;
                        const isWrong = selectedOption && selectedOption === option && option !== currentQuestion.answer;

                        return (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                disabled={!!selectedOption}
                                style={{
                                    ...getOptionStyle(option),
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <span>{option}</span>
                                {isCorrect && <span>✅</span>}
                                {isWrong && <span>❌</span>}
                            </button>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                    <button
                        className="btn-primary"
                        onClick={handleNextQuestion}
                        style={{
                            flex: 1,
                            marginTop: 0,
                            padding: '10px',
                            fontSize: '1rem',
                            background: '#f3f4f6',
                            color: '#4b5563',
                            border: 'none',
                            display: selectedOption ? 'none' : 'block' // Hide if option selected
                        }}
                    >
                        Skip ⏩
                    </button>

                    <button
                        className="btn-primary"
                        disabled={!selectedOption}
                        onClick={handleNextQuestion}
                        style={{
                            flex: 1,
                            marginTop: 0,
                            padding: '10px',
                            fontSize: '1rem',
                            opacity: !selectedOption ? 0.5 : 1,
                            cursor: !selectedOption ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {currentQuestionIndex === activeTest.questions.length - 1 ? "Finish Test" : "Next →"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Test;
