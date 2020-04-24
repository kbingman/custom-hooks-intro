import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMousemove = (e: MouseEvent) => setPosition({ x: e.x, y: e.y });

  useEventListener('mousemove', handleMousemove, window);

  return { x: position.x, y: position.y };
};

export const useEventListener = (
  eventName: string,
  handler: EventListener,
  element: Window | HTMLElement = window
) => {
  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) {
        return;
      }

      element.addEventListener(eventName, handler);
      return () => {
        element.removeEventListener(eventName, handler);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};

