import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const App = () => {
  useMousePosition();

  return (
    <div>
      <h1>Lesson 2</h1>
    </div>
  );
};
