import React from 'react';
import Select from './Select';

export default {
  title: 'Select',
  component: Select,
};

export const Basic = () => (
  <div>
    <p>You can select the next option by pressing the <strong>left mouse button</strong></p>
    <p>You can select the previous option by pressing the <strong>right mouse button</strong></p>
    <Select label={'Select'} options={['Option 1', 'Option 2', 'Option 3']} preselectedIndex={1} onChange={(index) => console.log(`Selected index: ${index}`)}/>
  </div>
);