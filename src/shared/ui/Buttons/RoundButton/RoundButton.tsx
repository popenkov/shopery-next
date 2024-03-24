import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';

import style from './RoundButton.module.scss';

export enum RoundButtonTheme {
  PRIMARY = 'primary',
  PRIMARYINVERSED = 'primary-inversed',
  GHOST = 'ghost',
}

interface AppButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  theme?: RoundButtonTheme;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export const RoundButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    ref,
    theme = RoundButtonTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <button
      className={cn(style.button, className, {
        [style[theme]]: true,
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
};
