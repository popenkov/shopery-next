import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useWindowSize = () => {
  const pathname = usePathname();
  const [windowSize, setWindowSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return windowSize;
};
