import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';

import style from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'ghost' | 'white' | 'border' | 'gray' | 'text';

type AppLinkSize = 'small' | 'normal' | 'large';

interface AppLinkProps
  extends LinkProps,
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
  theme?: AppLinkTheme;
  size?: AppLinkSize;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

export const AppLink: FC<AppLinkProps> = (props) => {
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
