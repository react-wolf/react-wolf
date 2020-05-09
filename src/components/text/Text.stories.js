import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Normal = () => (
  <Text variant={'normal'}>
    Normal text
  </Text>
);

export const Medium = () => (
  <Text variant={'medium'}>
    Medium text
  </Text>
);

export const Huge = () => (
  <Text variant={'huge'}>
    Huge text
  </Text>
);
