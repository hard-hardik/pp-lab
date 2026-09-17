import { useEffect, useCallback } from 'react';

/**
 * Custom hook for keyboard event handling.
 * 
 * Supports two calling conventions:
 * 1. Map-based: useKeyboard({ ArrowLeft: prevFn, ArrowRight: nextFn, Escape: closeFn })
 * 2. Object-based: useKeyboard({ key: 'Escape', action: closeFn, isActive: true })
 */
const useKeyboard = (config) => {
  const isObjectStyle = config && typeof config.key === 'string' && typeof config.action === 'function';

  const handleKeyDown = useCallback((event) => {
    if (isObjectStyle) {
      // Object-style: { key, action, isActive }
      if (config.isActive !== false && event.key === config.key) {
        event.preventDefault();
        config.action(event);
      }
    } else if (config && typeof config === 'object') {
      // Map-style: { ArrowLeft: fn, ArrowRight: fn }
      const action = config[event.key];
      if (action && typeof action === 'function') {
        event.preventDefault();
        action(event);
      }
    }
  }, [config, isObjectStyle]);

  useEffect(() => {
    // For object-style, skip if isActive is explicitly false
    if (isObjectStyle && config.isActive === false) {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isObjectStyle, config]);
};

export default useKeyboard;
