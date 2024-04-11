import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';

import { RoundButton } from '@/shared';
import ArrowIcon from '@public/icons/icon__arrow.svg';

import cls from './HeroNavigation.module.scss';


interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  fractionRef: React.RefObject<HTMLDivElement>;
}

export const HeroNavigation: FC<Props> = ({
  prevRef,
  nextRef,
  fractionRef,
}) => {
  return (
    <>
      <div className={cls.pagination} ref={fractionRef}></div>
      <div className={cls.navigation}>
        <RoundButton
          theme="primary_inversed"
          className={cn(cls.navigationButton, cls.navigationButtonPrev)}
          ref={prevRef}
        >
          <ArrowIcon />
        </RoundButton>
        <RoundButton
          theme="primary_inversed"
          className={cn(cls.navigationButton, cls.navigationButtonNext)}
          ref={nextRef}
        >
          <ArrowIcon />
        </RoundButton>
      </div>
    </>
  );
};
