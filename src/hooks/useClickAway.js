import { useEffect } from 'react';

export const useClickAway = ({ ref, callback, enabled }) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const listener = (event) => {
      if (ref.current?.contains(event.target)) {
        return;
      }
      callback();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback, enabled]);
};
