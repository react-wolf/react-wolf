import React from 'react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

export const Parent = () => (
  <Header variant={'parent'}>
    Parent text
  </Header>
);

export const Child = () => (
  <Header variant={'child'}>
    Child text
  </Header>
);