import React from 'react';
import Cursor from './Cursor';

export default {
  title: 'Cursor',
  component: Cursor,
};

export const CursorTest = () => (
  <Cursor>
    <div style={{height: 150, backgroundColor: 'grey'}}>Cursor should appear on mouse over</div>
  </Cursor>
);
