import { useCallback, useEffect, useRef, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const handleMousemove = (e: MouseEvent) => setPosition({ x: e.x, y: e.y });

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) =>
      setPosition({ x: clientX, y: clientY }),
    [setPosition]
  );

  useEventListener('mousemove', handleMouseMove, window);

  return { x: position.x, y: position.y };
};

export const useEventListener = (
  eventName: string,
  handler: EventListener,
  element: Window | HTMLElement = window
) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) {
        return;
      }

      const eventListener = (e: Event) => savedHandler.current(e);

      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};
