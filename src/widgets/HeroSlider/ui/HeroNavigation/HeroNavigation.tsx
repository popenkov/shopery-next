import { RoundButton } from '@/shared';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import ArrowIcon from '@public/icons/icon__arrow.svg';
import cls from './HeroNavigation.module.scss';
import cn from 'classnames';

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
        {/* <button className="button-round button-round--white-green hero__navigation-button hero__navigation-button--prev">
          <svg className="button-round__icon">
            <use href="img/svgSprite.svg#icon__arrow"></use>
          </svg>
        </button> */}
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
        {/* <button className="button-round button-round--white-green hero__navigation-button hero__navigation-button--next">
          <svg className="button-round__icon">
            <use href="img/svgSprite.svg#icon__arrow"></use>
          </svg>
        </button> */}
      </div>
    </>
  );
};
