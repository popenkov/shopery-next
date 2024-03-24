import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import cls from './Banner.module.scss';
import ArrowIcon from '../../../../public/icons/icon__arrow.svg';
import { AppLink, AppLinkTheme } from '..';

interface BannerProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  background: string;
  subtitle: string;
  title?: string;
  text?: string;
  textPosition?: 'left' | 'right';
}

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
        style={{ background: `center / cover  url(${background})` }}
      ></div>
      <div className={cls.content}>
        <p className={cls.subtitle}>{subtitle}</p>
        <h3 className={cls.title}>{title}</h3>
        <p className={cls.text}>{text}</p>
        <div className={cls.buttonContainer}>
          <AppLink href="#" theme={AppLinkTheme.WHITE} className={cls.button}>
            <span className="icon-button__text">Shop Now</span>
            <ArrowIcon className="icon-button__icon" />
          </AppLink>
        </div>
      </div>
    </Link>
  );
};
