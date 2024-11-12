import React, { useState } from 'react';
import questionBank from './QuestionBank';
import Score from './Score';

const Quiz = ({ subjectName }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    
    const questions = questionBank[subjectName];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
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
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer('');
    };

    if (!questions) {
        return <div>Loading questions...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{subjectName} Quiz</h2>
            
            {showScore ? (
                <Score 
                    score={score} 
                    totalQuestions={questions.length} 
                />
            ) : (
                <div>
                    <div className="mb-4">
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                    <div className="mb-4">
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