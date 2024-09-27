'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useWindowSize = () => {
  const pathname = usePathname();
  const [windowSize, setWindowSize] = useState(() => {
    return {
      width: 0,
      height: 0,
    };
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return windowSize;
};
