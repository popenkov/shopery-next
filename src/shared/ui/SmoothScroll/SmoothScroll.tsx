'use client';

import { FC, ReactNode, useEffect, useRef } from 'react';

import { useWindowSize } from '@/shared/lib/hooks';

import cls from './SmoothScroll.module.scss';

type Props = {
  children: ReactNode;
  speed?: number;
};

const DEFAULT_SCROLL_SPEED = 0.1;

export const SmoothScroll: FC<Props> = ({ children, speed = DEFAULT_SCROLL_SPEED }) => {
  const windowSize = useWindowSize();

  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const data = {
    ease: speed,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [scrollingContainerRef, windowSize]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className={cls.SmoothScroll}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

// export default SmoothScroll;
