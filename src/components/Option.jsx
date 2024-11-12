// Option.js

import React from 'react';

const Options = ({ options, selectedOption, onOptionChange }) => {
    return (
        <div className="space-y-2">
            {options.map((option, index) => (
                <div key={index} className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="radio radio-primary"
                        />
                        <span className="label-text">{option}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Options;
