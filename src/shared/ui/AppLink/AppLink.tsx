'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';

import cls from './AppLink.module.scss';

type TAppLinkTheme =
  | 'primary'
  | 'ghost'
  | 'secondary'
  | 'outlined'
  | 'gray'
  | 'text'
  | 'monochrome-light';

type TAppLinkSize = 'small' | 'normal' | 'large';

interface Props
  extends LinkProps,
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
  theme?: TAppLinkTheme;
  size?: TAppLinkSize;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
  isDisabled?: boolean;
}

const MotionLink = motion(Link);

export const AppLink: FC<Props> = (props) => {
  const {
    href,
    className,
    children,
    ref,
    theme = 'primary',
    size = 'normal',
    isDisabled,
    ...otherProps
  } = props;
  return (
    // @ts-ignore
    <MotionLink
      href={href}
      className={cn(cls.link, className, {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: isDisabled,
      })}
      ref={ref}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      {...otherProps}
    >
      {children}
    </MotionLink>
  );
};
