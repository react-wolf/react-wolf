import React from "react";
import './button.css';
import Text from '../text/Text';


export default function Button(props) {
    const {children, onClick} = props;

    return <span onClick={onClick} className={'wolf-button'}><Text variant={'medium'}>{children}</Text></span>
}