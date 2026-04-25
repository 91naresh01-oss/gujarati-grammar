import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { chaptersData } from '../data';
import BackArrow from '../components/BackArrow';

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

function getTestNumber(testId) {
    const rawTestNumber = String(testId).replace(/^t/i, '') || '1';
    return rawTestNumber.split('-').pop() || rawTestNumber;
}

function Test() {
    const navigate = useNavigate();
    const { id } = useParams();
    const chapter = chaptersData.find((item) => item.id === parseInt(id, 10));

    const [selectedTestId, setSelectedTestId] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [testsData, setTestsData] = useState(null);
    const [isLoadingTests, setIsLoadingTests] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!chapter || !chapter.loadTests) {
            setIsLoadingTests(false);
            return;
        }

        setIsLoadingTests(true);
        setError(null);

        chapter.loadTests()
            .then((data) => {
                setTestsData(data);
                setIsLoadingTests(false);
            })
            .catch((loadError) => {
                console.error('Failed to load tests:', loadError);
                setError('ટેસ્ટ ડેટા લોડ કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.');
                setIsLoadingTests(false);
            });
    }, [chapter]);

    if (!chapter) {
        return <div className="test-fallback">Chapter Not Found</div>;
    }

    const resetTestProgress = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setShowResult(false);
    };

    const startTest = (testId) => {
        setSelectedTestId(testId);
        resetTestProgress();
    };

    const exitToSelection = () => {
        setSelectedTestId(null);
        resetTestProgress();
    };

    if (!selectedTestId) {
        return (
            <div className="test-page test-page-select">
                <div className="test-shell test-shell-select">
                    <button
                        onClick={() => navigate('/chapters')}
                        className="test-top-back"
                        aria-label="Back to chapters"
                    >
                        <BackArrow size={18} color="white" />
                    </button>

                    <div className="test-select-header">
                        <span className="test-select-chapter-pill">CHAPTER {id}</span>
                        <h1 className="test-select-title">{chapter.name}</h1>
                    </div>

                    {isLoadingTests ? (
                        <div className="test-state-card">
                            <div className="test-loader" />
                            <p>ટેસ્ટ લોડ થઈ રહી છે...</p>
                        </div>
                    ) : error ? (
                        <div className="test-state-card test-state-card-error">
                            <p>{error}</p>
                        </div>
                    ) : testsData && testsData.length > 0 ? (
                        <div className="test-select-grid">
                            {testsData.map((test, index) => (
                                <button
                                    key={test.id}
                                    className={`test-select-card test-select-card-tone-${(index % 14) + 1}`}
                                    onClick={() => startTest(test.id)}
                                >
                                    <span className="test-select-number">{getTestNumber(test.id)}</span>
                                    <span className="test-select-label">Test</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="test-state-card">
                            <p>હજુ સુધી ટેસ્ટ ઉપલબ્ધ નથી.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const activeTest = testsData?.find((test) => test.id === selectedTestId);
    if (!activeTest) {
        return <div className="test-fallback">Test Not Found</div>;
    }

    const totalQuestions = activeTest.questions.length;
    const currentQuestion = activeTest.questions[currentQuestionIndex];
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    const progressStep = showResult ? totalQuestions : currentQuestionIndex + 1;
    const progressPercent = Math.round((progressStep / totalQuestions) * 100);
    const score = activeTest.questions.reduce((total, question, index) => {
        return total + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);

    const handleOptionSelect = (option) => {
        if (currentAnswer !== undefined) {
            return;
        }

        setSelectedAnswers((prev) => {
            const nextAnswers = [...prev];
            nextAnswers[currentQuestionIndex] = option;
            return nextAnswers;
        });
    };

    const handleSkipQuestion = () => {
        if (currentAnswer !== undefined) {
            return;
        }

        setSelectedAnswers((prev) => {
            const nextAnswers = [...prev];
            nextAnswers[currentQuestionIndex] = null;
            return nextAnswers;
        });

        if (currentQuestionIndex === totalQuestions - 1) {
            setShowResult(true);
            return;
        }

        setCurrentQuestionIndex((prev) => prev + 1);
    };

    const handleNextQuestion = () => {
        if (currentAnswer === undefined) {
            return;
        }

        if (currentQuestionIndex === totalQuestions - 1) {
            setShowResult(true);
            return;
        }

        setCurrentQuestionIndex((prev) => prev + 1);
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex === 0) {
            return;
        }

        setCurrentQuestionIndex((prev) => prev - 1);
    };

    if (showResult) {
        const percentage = Math.round((score / totalQuestions) * 100);
        const skippedCount = selectedAnswers.filter((answer) => answer === null).length;
        const wrongCount = totalQuestions - score - skippedCount;

        const resultToneClass = percentage >= 80
            ? 'test-result-good'
            : percentage >= 50
                ? 'test-result-mid'
                : 'test-result-low';

        return (
            <div className="test-page">
                <div className="test-shell">
                    <div className="test-result-topbar">
                        <button
                            onClick={exitToSelection}
                            className="test-top-back"
                            aria-label="Back to test selection"
                        >
                            <BackArrow size={18} color="white" />
                        </button>

                        <div className="test-chip-row test-chip-row-center">
                            <span className="test-chip">CH {id}</span>
                            <span className="test-chip test-chip-soft">TEST {getTestNumber(selectedTestId)}</span>
                            <span className="test-result-title">{chapter.name}</span>
                        </div>
                    </div>

                    <div className={`test-result-hero ${resultToneClass}`}>
                        <div className="test-result-score">
                            <span className="test-result-score-value">{score}/{totalQuestions}</span>
                            <span className="test-result-score-label">કુલ સ્કોર</span>
                        </div>

                        <div className="test-result-summary">
                            <h1>{percentage}%</h1>
                            <p>
                                {percentage >= 80
                                    ? 'ખૂબ સરસ પ્રદર્શન.'
                                    : percentage >= 50
                                        ? 'સારો પ્રયાસ. થોડો વધુ અભ્યાસ કરો.'
                                        : 'ફરીથી પ્રયત્ન કરો અને concepts revise કરો.'}
                            </p>
                        </div>
                    </div>

                    <div className="test-result-stats">
                        <div className="test-stat-card">
                            <span className="test-stat-value">{score}</span>
                            <span className="test-stat-label">સાચા</span>
                        </div>
                        <div className="test-stat-card">
                            <span className="test-stat-value">{wrongCount}</span>
                            <span className="test-stat-label">ખોટા</span>
                        </div>
                        <div className="test-stat-card">
                            <span className="test-stat-value">{skippedCount}</span>
                            <span className="test-stat-label">છોડેલા</span>
                        </div>
                    </div>

                    <div className="test-result-actions">
                        <button className="test-action-btn test-action-btn-secondary" onClick={exitToSelection}>
                            બીજો ટેસ્ટ પસંદ કરો
                        </button>
                        <button className="test-action-btn test-action-btn-primary" onClick={() => startTest(selectedTestId)}>
                            ફરી ટેસ્ટ આપો
                        </button>
                    </div>

                    <div className="test-review-section">
                        <div className="test-review-heading">
                            <h2>જવાબોની સમીક્ષા</h2>
                            <span>{totalQuestions} પ્રશ્નો</span>
                        </div>

                        <div className="test-review-list">
                            {activeTest.questions.map((question, index) => {
                                const selectedAnswer = selectedAnswers[index];
                                const isSkipped = selectedAnswer === null;
                                const isCorrect = selectedAnswer === question.answer;
                                const reviewClass = isSkipped
                                    ? 'is-skipped'
                                    : isCorrect
                                        ? 'is-correct'
                                        : 'is-wrong';

                                return (
                                    <div key={question.id ?? index} className={`test-review-card ${reviewClass}`}>
                                        <div className="test-review-card-header">
                                            <span className="test-review-number">{index + 1}</span>
                                            <p>{question.question}</p>
                                        </div>

                                        <div className="test-review-answer-row">
                                            <span className="test-review-label">તમારો જવાબ</span>
                                            <span className="test-review-value">
                                                {isSkipped ? 'છોડ્યો' : selectedAnswer}
                                            </span>
                                        </div>

                                        <div className="test-review-answer-row test-review-answer-row-correct">
                                            <span className="test-review-label">સાચો જવાબ</span>
                                            <span className="test-review-value">{question.answer}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="test-page">
            <div className="test-question-layout">
                <div className="test-question-header">
                    <button
                        onClick={exitToSelection}
                        className="test-top-back"
                        aria-label="Back to test selection"
                    >
                        <BackArrow size={18} color="white" />
                    </button>

                    <div className="test-question-header-main">
                        <div className="test-chip-row">
                            <span className="test-chip">CH {id}</span>
                            <span className="test-chip test-chip-soft">TEST {getTestNumber(selectedTestId)}</span>
                        </div>
                        <h1 className="test-question-title">{chapter.name}</h1>
                    </div>

                </div>

                <div className="test-shell test-shell-question">
                <div className="test-question-banner">
                    <div className="test-question-banner-number">
                        {String(currentQuestionIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="test-question-banner-text">{currentQuestion.question}</div>
                    <div className="test-question-banner-cap" />
                </div>

                <div className="test-options-list">
                    {currentQuestion.options.map((option, index) => {
                        const label = optionLabels[index] || String(index + 1);
                        const isCorrect = currentAnswer !== undefined && option === currentQuestion.answer;
                        const isSelectedWrong = currentAnswer === option && option !== currentQuestion.answer;
                        const isLocked = currentAnswer !== undefined;
                        const stateClass = isCorrect
                            ? 'is-correct'
                            : isSelectedWrong
                                ? 'is-wrong'
                                : currentAnswer === option
                                    ? 'is-selected'
                                    : '';

                        return (
                            <button
                                key={`${currentQuestion.id}-${index}`}
                                onClick={() => handleOptionSelect(option)}
                                disabled={isLocked}
                                className={`test-option-card ${stateClass}`}
                            >
                                <span className="test-option-badge">{label}</span>
                                <span className="test-option-text">{option}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="test-progress-section">
                    <div className="test-progress-row">
                        <span>PROGRESS: {progressStep} / {totalQuestions}</span>
                        <span>{progressPercent}%</span>
                    </div>
                    <div className="test-progress-bar">
                        <span style={{ width: `${progressPercent}%` }} />
                    </div>
                </div>

                <div className="test-footer-actions">
                    <button
                        className="test-nav-icon-btn"
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        aria-label="Previous question"
                    >
                        <BackArrow size={18} color={currentQuestionIndex === 0 ? '#b8c1d1' : '#7c8aa5'} />
                    </button>

                    {currentAnswer === undefined ? (
                        <button className="test-action-btn test-action-btn-secondary" onClick={handleSkipQuestion}>
                            Skip
                        </button>
                    ) : (
                        <div className="test-feedback-chip">
                            {currentAnswer === null
                                ? 'Skipped'
                                : currentAnswer === currentQuestion.answer
                                    ? 'સાચો જવાબ'
                                    : 'ખોટો જવાબ'}
                        </div>
                    )}

                    <button
                        className="test-action-btn test-action-btn-primary"
                        onClick={handleNextQuestion}
                        disabled={currentAnswer === undefined}
                    >
                        {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
