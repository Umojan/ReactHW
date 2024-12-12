import React from 'react';
import './Input.css';

const Input = ({
                   type = 'text',
                   placeholder = '',
                   value,
                   onChange,
                   disabled = false,
                   label,
                   danger = false,
               }) => {
    const inputClass = `input ${danger ? 'input--danger' : ''} ${disabled ? 'input--disabled' : ''}`;

    return (
        <div className="input-wrapper">
            {label && <label className={`input-label ${danger ? 'input-label--danger' : ''}`}>{label}</label>}
            <input
                className={inputClass}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
