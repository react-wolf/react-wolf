import React from 'react';
import './textfield.css';

export default function TextField(props) {
    const {onChange, type} = props;

    return <input onChange={onChange} type={type} className={'wolf-text-field'}/>
}