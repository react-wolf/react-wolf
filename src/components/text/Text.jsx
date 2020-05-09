import React from 'react';
import './text.css';

export default function Text(props) {
    const {children, variant} = props;

    return <div className={`wolf-text-base wolf-text-${variant}`}>{children}</div>
}