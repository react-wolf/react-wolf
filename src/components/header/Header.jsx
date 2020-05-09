import React from 'react';
import './header.css';

export default function Header(props) {
    return <div className={'wolf-header'}>
        {props.children}
    </div>
}