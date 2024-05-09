import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

type ButtonTheme = 'primary' | 'ghost' | 'secondary' | 'outlined' | 'gray' | 'text';

type ButtonSize = 'small' | 'normal' | 'large';

interface AppButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  type?: 'button' | 'reset' | 'submit';
  size?: ButtonSize;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  form?: string;
}

export const Button: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    ref,
    form,
    theme = 'primary',
    size = 'normal',
    type = 'button',
    ...otherProps
  } = props;
  return (
    <button
      className={cn(
        style.button,
        {
          [style[theme]]: true,
          [style[size]]: true,
        },
        className,
      )}
      ref={ref}
      type={type}
      form={form}
      {...otherProps}
    >
      {children}
    </button>
  );
};
