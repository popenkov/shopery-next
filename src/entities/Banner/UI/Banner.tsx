import cn from 'classnames';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { AppLink, Button } from '@/shared';
import ArrowIcon from '@public/icons/icon__arrow.svg';

import cls from './Banner.module.scss';
import { TBanner } from '../model/interfaces/model.interface';

interface BannerProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
      'id'
    >,
    TBanner {}

export const Banner: FC<BannerProps> = (props) => {
  const { background, subtitle, title, text, textPosition = 'left' } = props;
  return (
    <Link
      className={cn(cls.banner, {
        [cls.right]: textPosition === 'right',
      })}
      href="#"
    >
      <span
        className={cls.image}
        style={{ background: `center / cover  url("/images/${background}")` }}
      ></span>
      <span className={cls.content}>
        <p className={cls.subtitle}>{subtitle}</p>
        <h3 className={cls.title}>{title}</h3>
        <p className={cls.text}>{text}</p>
        <span className={cls.buttonContainer}>
          <Button theme="white" className={cls.button}>
            <span className="icon-button__text">Shop Now</span>
            <ArrowIcon className="icon-button__icon" />
          </Button>
        </span>
      </span>
    </Link>
  );
};
