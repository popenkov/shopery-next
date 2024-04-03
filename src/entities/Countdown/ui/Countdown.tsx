'use client';

import { useCountDown } from '@/shared/lib/hooks/useCountDown/useCountDown';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './Countdown.module.scss';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: string;
}

export const Countdown: FC<Props> = ({ date }) => {
  const { days, hours, minutes, seconds } = useCountDown(date);
  return (
    <div className={cls.counter}>
      <div className={cls.counterItem}>
        <span className={cls.counterValue}>{days}</span>
        <span className={cls.counterDescription}>Days</span>
      </div>
      <span className={cls.counterSeparator}>:</span>
      <div className={cls.counterItem}>
        <span className={cls.counterValue}>{hours}</span>
        <span className={cls.counterDescription}>Hours</span>
      </div>
      <span className={cls.counterSeparator}>:</span>
      <div className={cls.counterItem}>
        <span className={cls.counterValue}>{minutes}</span>
        <span className={cls.counterDescription}>Mins</span>
      </div>
      <span className={cls.counterSeparator}>:</span>
      <div className={cls.counterItem}>
        <span className={cls.counterValue}>{seconds}</span>
        <span className={cls.counterDescription}>Secs</span>
      </div>
    </div>
  );
};