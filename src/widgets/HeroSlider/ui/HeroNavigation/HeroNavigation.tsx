import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { RoundButton } from 'shared/ui/Buttons';
import { ArrowIcon } from 'shared/ui/icons';

import cls from './HeroNavigation.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  fractionRef: React.RefObject<HTMLDivElement>;
}

export const HeroNavigation: FC<Props> = ({ prevRef, nextRef, fractionRef }) => {
  return (
    <>
      <div className={cls.pagination} ref={fractionRef}></div>
      <div className={cls.navigation}>
        <RoundButton
          theme="secondary"
          className={cn(cls.navigationButton, cls.navigationButtonPrev)}
          ref={prevRef}
        >
          <ArrowIcon className={cls.navigationButtonIcon} />
        </RoundButton>
        <RoundButton
          theme="secondary"
          className={cn(cls.navigationButton, cls.navigationButtonNext)}
          ref={nextRef}
        >
          <ArrowIcon className={cls.navigationButtonIcon} />
        </RoundButton>
      </div>
    </>
  );
};
