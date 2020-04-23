import React from 'react';
import { useMouseDown } from '../hooks';
import { Box } from './Box';

export const App = () => {
  const { dx, dy } = useMouseDown();

  return (
    <div>
      <h1>Lesson 2</h1>
      <p>dx: {dx}</p>
      <p>dy: {dy}</p>
      <Box />
      <Box />
    </div>
  );
};
