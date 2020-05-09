import React from 'react';
import './header.css';
import Text from '../text/Text';

export default function Header(props) {
    const {variant} = props;
    const textVariant = getTextVariant(variant);

    return <div className={`wolf-header-${variant}`}>
        <Text variant={textVariant}>{props.children}</Text>
    </div>
}

function getTextVariant(containerVariant) {
    switch (containerVariant) {
        default:
        case 'parent': return 'huge';
        case 'child': return 'medium';

    }
}