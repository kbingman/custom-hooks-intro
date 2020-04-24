import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMousemove = (e: MouseEvent) => setPosition({ x: e.x, y: e.y });

  useEffect(() => {
    window.addEventListener('mousemove', handleMousemove);
    return () => window.removeEventListener('mousemove', handleMousemove);
  }, []);

  return { x: position.x, y: position.y };
};

export const useMouseDelta = () => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePosition();

  const handleMouseDown = (e: MouseEvent) => {
    setInitialPosition({ x: e.x, y: e.y });
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    dx: initialPosition.x - x,
    dy: initialPosition.y - y,
  };
};
