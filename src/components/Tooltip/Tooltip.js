import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, position = 'top', children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className={`tooltip tooltip--${position}`}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
