import cn from 'classnames';
import {
  ComponentProps,
  ElementType,
  FC,
  ReactNode,
  Ref,
  forwardRef,
  memo,
} from 'react';

import style from './RoundButton.module.scss';

export type RoundButtonTheme = 'primary' | 'primary_inversed' | 'ghost';

const DEFAULT_ELEMENT: ElementType = 'button';

interface ButtonOwnProps<E extends ElementType = ElementType> {
  className?: string;
  theme?: RoundButtonTheme;
  children: ReactNode;
  as?: E;
}

type Props<E extends ElementType = ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps> &
  Ref<HTMLButtonElement>;

const ButtonElement = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, children, as, theme = 'primary', ...otherProps } = props;

  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element
      className={cn(style.button, className, {
        [style[theme]]: true,
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Element>
  );
});

export const RoundButton = memo(ButtonElement);
