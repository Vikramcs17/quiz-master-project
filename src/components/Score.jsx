// Score.js

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Score = ({ score, totalQuestions, timeTaken }) => {
    const [percentage, setPercentage] = useState(0);
    
    useEffect(() => {
        // Animate the percentage from 0 to the actual score
        const timer = setTimeout(() => {
            setPercentage((score / totalQuestions) * 100);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [score, totalQuestions]);

    const getColor = () => {
        if (percentage >= 80) return '#4CAF50'; // Green
        if (percentage >= 60) return '#2196F3'; // Blue
        if (percentage >= 40) return '#FF9800'; // Orange
        return '#f44336'; // Red
    };

    const getMessage = () => {
        if (percentage === 100) return "Perfect! You're a genius! ";
        if (percentage >= 80) return "Excellent work! ";
        if (percentage >= 60) return "Good job! ";
        if (percentage >= 40) return "Keep practicing! ";
        return "Don't give up! Try again! ";
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-8">Quiz Results</h2>
            
            {/* Circular Progress Bar */}
            <div className="w-64 h-64 mx-auto mb-8">
                <CircularProgressbar
                    value={percentage}
                    text={`${Math.round(percentage)}%`}
                    styles={buildStyles({
                        pathColor: getColor(),
                        textColor: getColor(),
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                        pathTransition: 'stroke-dashoffset 1s ease-in-out',
                        textSize: '16px',
                    })}
                />
            </div>

            {/* Score Details */}
            <div className="space-y-4">
                <div className="text-xl font-semibold">
                    You scored {score} out of {totalQuestions}
                </div>
                
                <div className="text-lg text-gray-600">
                    Time taken: {formatTime(timeTaken)}
                </div>
                
                <div className={`text-lg font-medium transition-all duration-500
                    ${percentage >= 80 ? 'text-green-600' : 
                      percentage >= 60 ? 'text-blue-600' : 
                      percentage >= 40 ? 'text-orange-500' : 
                      'text-red-600'}`}>
                    {getMessage()}
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mt-6">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Correct</div>
                        <div className="text-xl font-bold text-green-600">{score}</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Incorrect</div>
                        <div className="text-xl font-bold text-red-600">{totalQuestions - score}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Score;