import React, { useState } from 'react';
import Text from '../text/Text';
import './select.css';

export default function Select(props) {
    const {label, onChange, options, preselectedIndex} = props;
    const [selectedIndex, setSelectedIndex] = useState(preselectedIndex || 0);
    const audio = new Audio('https://github.com/react-wolf/react-wolf/raw/master/assets/sound/filter.wav');

    const onLeftClick = (e) => {
        audio.play();

        var nextSelectedIndex = selectedIndex + 1;

        if (nextSelectedIndex >= options.length) {
            nextSelectedIndex = 0;
        }

        setSelectedIndex(nextSelectedIndex);    // Next option
        onChange && onChange(nextSelectedIndex);    // Notify parent component of new selection
    };

    const onRightClick = (e) => {
        audio.play();
        e.preventDefault(); // We don't want a context menu appearring
        var nextSelectedIndex = selectedIndex - 1;

        if (selectedIndex == 0) {
            nextSelectedIndex = options.length - 1; // There are no more options - wrap around
        }

        setSelectedIndex(nextSelectedIndex);    // Previous option
        onChange && onChange(nextSelectedIndex);    // Notify parent component of new selection
    };

    return <div className={'wolf-select'} onClick={onLeftClick} onContextMenu={onRightClick}>
        <Text variant={'normal'}>{label}: {options[selectedIndex]}</Text>
    </div>
}
