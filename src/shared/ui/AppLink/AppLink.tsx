import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';
import cn from 'classnames';
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
    <Link
      href={href}
      className={cn(cls.link, className, {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: isDisabled,
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
