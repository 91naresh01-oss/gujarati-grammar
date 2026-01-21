import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { chaptersData } from '../data';

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

    if (!chapter) return <div>Chapter Not Found</div>;

    // Helper to reset and start a specific test
    const startTest = (testId) => {
        setSelectedTestId(testId);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
    };

    // If no test is selected yet, show the "Select Test" screen
    if (!selectedTestId) {
        return (
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
                <div className="theory-header-outside" style={{
                    justifyContent: 'center',
                    marginBottom: '30px',
                    alignItems: 'center',
                    position: 'relative',
                    display: 'flex',
                    width: '100%'
                }}>
                    <button
                        onClick={() => navigate('/chapters')}
                        className="back-btn-theory-outside"
                        style={{
                            width: '40px',
                            height: '40px',
                            fontSize: '1rem',
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}>
                        ←
                    </button>

                    <div className="theory-title-pill" style={{
                        background: '#3b82f6',
                        color: 'white',
                        padding: '12px 30px',
                        borderRadius: '50px',
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        textAlign: 'center'
                    }}>
                        {chapter.name} : ટેસ્ટ સીરીઝ
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '20px' }}>
                    {chapter.tests && chapter.tests.length > 0 ? (
                        chapter.tests.map((test) => (
                            <div key={test.id} className="clean-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: '#eff6ff',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        padding: '8px'
                                    }}>
                                        <img
                                            src="/icon/test icon.png"
                                            alt="Test"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1f2937' }}>{test.name}</h3>
                                        <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
                                            {test.questions.length} પ્રશ્નો
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="btn-primary"
                                    style={{ marginTop: 0, padding: '10px 20px', fontSize: '1rem' }}
                                    onClick={() => startTest(test.id)}
                                >
                                    Start
                                </button>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center' }}>No tests available yet.</p>
                    )}
                </div>
            </div>
        );
    }

    // Active Test Logic
    const activeTest = chapter.tests.find(t => t.id === selectedTestId);
    if (!activeTest) return <div>Test Not Found</div>;

    const currentQuestion = activeTest.questions[currentQuestionIndex];

    const handleOptionSelect = (option) => {
        if (selectedOption) return; // Prevent changing after selection
        setSelectedOption(option);
        if (option === currentQuestion.answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
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
        return (
            <div className="clean-card" style={{ maxWidth: '500px', margin: '50px auto', padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>પરિણામ</h2>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '10px' }}>
                    {score} / {activeTest.questions.length}
                </div>
                <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '30px' }}>
                    {score === activeTest.questions.length ? "ખૂબ સરસ! 🎉" : "સારા પ્રયાસ! 👍"}
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button className="btn-primary" onClick={() => startTest(selectedTestId)} style={{ marginTop: 0 }}>
                        ફરીથી ટેસ્ટ આપો
                    </button>
                    <button
                        className="btn-primary"
                        style={{ marginTop: 0, background: 'white', color: '#3b82f6', border: '2px solid #3b82f6' }}
                        onClick={() => setSelectedTestId(null)}
                    >
                        બીજી ટેસ્ટ પસંદ કરો
                    </button>
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
                    ←
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
