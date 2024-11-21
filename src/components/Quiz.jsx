import React, { useState, useEffect } from 'react';
import questionBank from './QuestionBank';
import Score from './Score';

const Quiz = ({ subjectName }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [timeTaken, setTimeTaken] = useState(0);
    const [timerActive, setTimerActive] = useState(true);
    
    const questions = questionBank[subjectName];

    useEffect(() => {
        let timer;
        if (timerActive && timeLeft > 0 && !showScore) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
                setTimeTaken(prev => prev + 1);
            }, 1000);
        } else if (timeLeft === 0 && !showScore) {
            handleQuizEnd();
        }
        return () => clearInterval(timer);
    }, [timeLeft, timerActive, showScore]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleQuizEnd = () => {
        setTimerActive(false);
        setShowScore(true);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer('');
        } else {
            handleQuizEnd();
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer('');
        setTimeLeft(120);
        setTimeTaken(0);
        setTimerActive(true);
    };

    if (!questions) {
        return <div>Loading questions...</div>;
    }

    return (
        <div className="p-4 relative">
            <h2 className="text-2xl font-bold mb-4">{subjectName} Quiz</h2>
            
            {showScore ? (
                <Score 
                    score={score} 
                    totalQuestions={questions.length}
                    timeTaken={timeTaken}
                />
            ) : (
                <div>
                    {/* Timer and Progress Display */}
                    <div className="absolute top-2 right-4 text-right">
                        <div className={`text-lg font-bold ${timeLeft <= 30 ? 'text-red-600' : 'text-gray-700'}`}>
                            Time Left: {formatTime(timeLeft)}
                        </div>
                        <div className="text-sm text-gray-600">
                            Question {currentQuestion + 1}/{questions.length}
                        </div>
                    </div>

                    <div className="mb-4 mt-12">
                        <h3 className="text-lg font-semibold">{questions[currentQuestion].question}</h3>
                    </div>
                    <div className="space-y-2">
                        {questions[currentQuestion].options.map((option, index) => (
                            <div 
                                key={index}
                                className={`p-3 border rounded cursor-pointer ${
                                    selectedAnswer === option ? 'bg-primary text-white' : 'hover:bg-gray-100'
                                }`}
                                onClick={() => handleAnswerClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    <button 
                        className="btn btn-primary mt-4"
                        onClick={handleNextQuestion}
                        disabled={!selectedAnswer}
                    >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;