import React from "react";
import './button.css';
import Text from '../text/Text';


export default function Button(props) {
    const {children, onClick} = props;
    const audio = new Audio('https://github.com/react-wolf/react-wolf/raw/master/assets/sound/select.wav');

    const onButtonClick = (e) => {
        audio.play();
        onClick && onClick(e);
    };

    const text = <Text
        variant={'medium'}>
        {children}
    </Text>;

    return <span
        onClick={onButtonClick}
        className={'wolf-button'}>
            {text}
    </span>
}