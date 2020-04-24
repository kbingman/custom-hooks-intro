import React from 'react';
import { useMousePosition } from '../hooks';

export const App = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Lesson 2</h1>
      <h2>The mouse position is ({x}, {y})</h2>
    </div>
  );
};
