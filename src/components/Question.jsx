// Question.js

import React from 'react';
import Options from './Option';

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
            <form onSubmit={onSubmit} className="space-y-4">
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={!selectedOption}
                >
                    {question.id === 5 ? "Finish Quiz" : "Next Question"}
                </button>
            </form>
        </div>
    );
};

export default Question;
