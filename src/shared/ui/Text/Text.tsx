import { memo } from 'react';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import cn from 'classnames';

import cls from './Text.module.scss';
import {
  type TTextAlign,
  type TTextTheme,
  type TTextVariant,
  type TTextWeight,
} from './Text.types';

interface TextOwnProps<E extends ElementType = ElementType> {
  children: ReactNode;
  className?: string;
  href?: string;
  title?: string;
  text?: string;
  theme?: TTextTheme;
  align?: TTextAlign;
  variant?: TTextVariant;
  weight?: TTextWeight;
  as?: E;
}

const DEFAULT_ELEMENT: ElementType = 'p';

type Props<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>;

const T = <E extends ElementType = typeof DEFAULT_ELEMENT>(props: Props<E>) => {
  const {
    className,
    children,
    as,
    theme = 'primary',
    align = 'left',
    variant = 'body_m',
    weight = 'regular',
  } = props;

  const Element = as || DEFAULT_ELEMENT;

  const mods = {
    [cls[theme]]: true,
    [cls[variant]]: true,
    [cls[align]]: true,
    [cls[weight]]: true,
  };

  return <Element className={cn(cls.text, className, mods)}>{children}</Element>;
};

export const Text = memo(T);

Text.displayName = 'Text';
