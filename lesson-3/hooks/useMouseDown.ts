import { useEffect } from 'react';

export const useMouseDown = () => {
  const handleMouseDown = () => console.log('down');
  const handleMouseUp = () => console.log('up');

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return null;
};
