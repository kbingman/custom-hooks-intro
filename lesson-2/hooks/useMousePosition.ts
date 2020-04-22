import { useEffect } from 'react';

export const useMousePosition = () => {
  useEffect(() => {
    console.log('add effect here');
    return () => console.log('remove effect here');
  }, []);
};
