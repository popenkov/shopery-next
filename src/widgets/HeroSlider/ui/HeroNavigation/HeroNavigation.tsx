import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { RoundButton } from '@/shared/ui/Buttons';
import { ArrowIcon } from '@/shared/ui/icons';

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
          icon={<ArrowIcon className={cls.navigationButtonIcon} />}
          theme="secondary"
          className={cn(cls.navigationButton, cls.navigationButtonPrev)}
          ref={prevRef}
        />
        <RoundButton
          icon={<ArrowIcon className={cls.navigationButtonIcon} />}
          theme="secondary"
          className={cn(cls.navigationButton, cls.navigationButtonNext)}
          ref={nextRef}
        />
      </div>
    </>
  );
};
