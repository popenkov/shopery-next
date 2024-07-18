'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { useCountDown } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

import cls from './Countdown.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: string;
  className?: string;
}

export const Countdown: FC<Props> = ({ date, className }) => {
  const { days, hours, minutes, seconds } = useCountDown(date);
  // todo  если дата прошла, то не выводить
  return (
    <div className={cn(cls.counter, className)}>
      <div className={cls.counterItem}>
        <Text variant="heading_5" className={cls.counterValue}>
          {days}
        </Text>
        <span className={cls.counterDescription}>Days</span>
      </div>
      <Text variant="body_xl" className={cls.counterSeparator}>
        :
      </Text>
      <div className={cls.counterItem}>
        <Text variant="heading_5" className={cls.counterValue}>
          {hours}
        </Text>
        <span className={cls.counterDescription}>Hours</span>
      </div>
      <Text variant="body_xl" className={cls.counterSeparator}>
        :
      </Text>
      <div className={cls.counterItem}>
        <Text variant="heading_5" className={cls.counterValue}>
          {minutes}
        </Text>
        <span className={cls.counterDescription}>Mins</span>
      </div>
      <Text variant="body_xl" className={cls.counterSeparator}>
        :
      </Text>
      <div className={cls.counterItem}>
        <Text variant="heading_5" className={cls.counterValue}>
          {seconds}
        </Text>
        <span className={cls.counterDescription}>Secs</span>
      </div>
    </div>
  );
};
