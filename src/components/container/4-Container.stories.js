import React from 'react';
import Container from './Container';
import Text from '../text/Text';

export default {
  title: 'Container',
  component: Container,
};

export const ContainerTitle = () => (
  <Container title={'Container with a title'} variant={'parent'}>
    <Text variant={'normal'}>You can place containers inside containers.</Text>
    <Container title={'Subcontainer'} variant={'child'}>
      <Text variant={'normal'}>Container-ception!</Text>
    </Container>
  </Container>
);
