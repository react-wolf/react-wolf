import React from 'react';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
};

export const Basic = () => (
  <TextField/>
);

export const Password = () => (
  <TextField type={'password'}/>
);
