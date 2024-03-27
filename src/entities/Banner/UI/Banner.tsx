import cn from 'classnames';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { AppLink } from '@/shared';
import ArrowIcon from '@public/icons/icon__arrow.svg';

import cls from './Banner.module.scss';
import { BannerType } from '../model/interfaces/model.interface';

export interface BannerProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
      'id'
    >,
    BannerType {}

export const Banner: FC<BannerProps> = (props) => {
  const { background, subtitle, title, text, textPosition = 'left' } = props;
  return (
    <Link
      className={cn(cls.banner, {
        [cls.right]: textPosition === 'right',
      })}
      href="#"
    >
      <div
        className={cls.image}
        style={{ background: `center / cover  url("/images/${background}")` }}
      ></div>
      <div className={cls.content}>
        <p className={cls.subtitle}>{subtitle}</p>
        <h3 className={cls.title}>{title}</h3>
        <p className={cls.text}>{text}</p>
        <div className={cls.buttonContainer}>
          <AppLink href="#" theme="white" className={cls.button}>
            <span className="icon-button__text">Shop Now</span>
            <ArrowIcon className="icon-button__icon" />
          </AppLink>
        </div>
      </div>
    </Link>
  );
};
