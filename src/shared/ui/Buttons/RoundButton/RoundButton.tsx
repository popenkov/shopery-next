import cn from 'classnames';
import { ComponentProps, ElementType, ReactNode, memo } from 'react';

import style from './RoundButton.module.scss';

export enum RoundButtonTheme {
  PRIMARY = 'primary',
  PRIMARYINVERSED = 'primary-inversed',
  GHOST = 'ghost',
}

const DEFAULT_ELEMENT: ElementType = 'button';

interface ButtonOwnProps<E extends ElementType = ElementType> {
  className?: string;
  theme?: RoundButtonTheme;
  children: ReactNode;
  as?: E;
}

type RoundButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const ButtonElement = <E extends ElementType = typeof DEFAULT_ELEMENT>(
  props: RoundButtonProps<E>
) => {
  const {
    className,
    children,
    as,
    theme = RoundButtonTheme.PRIMARY,
    ...otherProps
  } = props;

  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={cn(style.button, className, {
        [style[theme]]: true,
      })}
      {...otherProps}
    >
      {children}
    </Element>
  );
};

export const RoundButton = memo(ButtonElement);
