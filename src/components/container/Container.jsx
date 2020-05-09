import React from 'react';
import './container.css';
import Header from '../header/Header';

export default function Container(props) {
    const {children, title, variant} = props;

    return <div className={'wolf-container'}>
        <Header variant={variant}>
            {title}
        </Header>

        <div className={'wolf-container-children'}>
            {children}
            </div>
    </div>
}