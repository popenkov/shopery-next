'use client';

import { ComponentProps, ElementType, ReactNode, Ref, forwardRef, memo } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { type TRoundButtonTheme } from '../model';

import style from './RoundButton.module.scss';

const DEFAULT_ELEMENT: ElementType = 'button';

interface ButtonOwnProps<E extends ElementType = ElementType> {
  className?: string;
  theme?: TRoundButtonTheme;
  icon: ReactNode;
  as?: E;
}

type Props<E extends ElementType = ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps> &
  Ref<HTMLButtonElement>;

const ButtonElement = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, icon, as, theme = 'primary', ...otherProps } = props;
  // @ts-ignore
  const Element = as ? motion[as] : motion[DEFAULT_ELEMENT];

  return (
    <Element
      className={cn(style.button, className, {
        [style[theme]]: true,
      })}
      ref={ref}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      {...otherProps}
    >
      {icon}
    </Element>
  );
});

ButtonElement.displayName = 'ButtonElement';

export const RoundButton = memo(ButtonElement);
