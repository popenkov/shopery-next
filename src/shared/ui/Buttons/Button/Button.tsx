import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';
import cn from 'classnames';
import style from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  GHOST = 'ghost',
  WHITE = 'white',
  BORDER = 'border',
  GRAY = 'gray',
}

export enum ButtonSize {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large',
}

interface AppButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export const Button: FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    ref,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.NORMAL,
    ...otherProps
  } = props;
  return (
    <button
      className={cn(style.button, className, {
        [style[theme]]: true,
        [style[size]]: true,
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
};
