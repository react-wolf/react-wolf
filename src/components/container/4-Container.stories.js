import React from 'react';
import Container from './Container';
import Text from '../text/Text';

export default {
  title: 'Container',
  component: Container,
};

export const Parent = () => (
  <Container title={'Container with a title'} variant={'parent'}>
    <Text variant={'normal'}>Parent container</Text>
  </Container>
);

export const Child = () => (
  <Container title={'Subcontainer'} variant={'child'}>
    <Text variant={'normal'}>Child container</Text>
  </Container>
);


