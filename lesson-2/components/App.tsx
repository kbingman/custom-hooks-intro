import React from 'react';
import { useMousePosition } from '../hooks';

export const App = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Lesson 2</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
};
