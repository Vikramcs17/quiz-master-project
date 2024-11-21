import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ScoreHistory = ({ scores }) => {
    if (!scores || scores.length === 0) {
        return (
            <div className="text-center text-gray-500 py-8">
                No quiz attempts yet. Try taking a quiz!
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scores.map((score, index) => (
                <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {score.subject}
                        </h3>
                        <span className="text-sm text-gray-500">
                            {formatDistanceToNow(new Date(score.timestamp), { addSuffix: true })}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${
                                (score.score / score.totalQuestions) * 100 >= 70 
                                    ? 'bg-green-500' 
                                    : (score.score / score.totalQuestions) * 100 >= 40 
                                        ? 'bg-yellow-500' 
                                        : 'bg-red-500'
                            }`}></div>
                            <span className="font-medium">
                                {score.score}/{score.totalQuestions}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            Time: {score.timeTaken}
                        </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className={`h-2 rounded-full ${
                                (score.score / score.totalQuestions) * 100 >= 70 
                                    ? 'bg-green-500' 
                                    : (score.score / score.totalQuestions) * 100 >= 40 
                                        ? 'bg-yellow-500' 
                                        : 'bg-red-500'
                            }`}
                            style={{ width: `${(score.score / score.totalQuestions) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScoreHistory;
