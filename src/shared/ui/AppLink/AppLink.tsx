import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';

import style from './AppLink.module.scss';

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
}

export const AppLink: FC<Props> = (props) => {
  const {
    href,
    className,
    children,
    ref,
    theme = 'primary',
    size = 'normal',
    ...otherProps
  } = props;
  return (
    <Link
      href={href}
      className={cn(style.link, className, {
        [style[theme]]: true,
        [style[size]]: true,
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
