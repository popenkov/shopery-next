import { useCountDown } from '@/shared/lib/hooks/useCountDown/useCountDown';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: string;
}

export const Countdown: FC<Props> = ({ date }) => {
  const { days, hours, minutes, seconds } = useCountDown(date);
  return (
    <div className="counter">
      <div className="best-deals__counter-item">
        <span className="best-deals__counter-value js-counter-days">
          {days}
        </span>
        <span className="best-deals__counter-description">Days</span>
      </div>
      <span className="best-deals__counter-separator">:</span>
      <div className="best-deals__counter-item">
        <span className="best-deals__counter-value js-counter-hours">
          {hours}
        </span>
        <span className="best-deals__counter-description">Hours</span>
      </div>
      <span className="best-deals__counter-separator">:</span>
      <div className="best-deals__counter-item">
        <span className="best-deals__counter-value js-counter-minutes">
          {minutes}
        </span>
        <span className="best-deals__counter-description">Mins</span>
      </div>
      <span className="best-deals__counter-separator">:</span>
      <div className="best-deals__counter-item">
        <span className="best-deals__counter-value js-counter-seconds">
          {seconds}
        </span>
        <span className="best-deals__counter-description">Secs</span>
      </div>
    </div>
  );
};
