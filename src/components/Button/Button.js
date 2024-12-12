import React from 'react';
import './Button.css';

const Button = ({ size = 'md', variant = 'primary', children, ...props }) => {
    const className = `button button--${size} button--${variant}`;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default Button;
