import React from 'react';
import { useMouseDelta } from '../hooks';
import { Box } from './Box';

export const App = () => {
  const { dx, dy } = useMouseDelta();

  return (
    <div>
      <h1>Lesson 3</h1>
      <p>dx: {dx}</p>
      <p>dy: {dy}</p>
      <Box />
      <Box />
    </div>
  );
};
