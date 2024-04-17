import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, Ref } from 'react';

import cn from 'classnames';

import style from './Button.module.scss';

type ButtonTheme =
    | 'primary'
    | 'ghost'
    | 'secondary'
    | 'outlined'
    | 'gray'
    | 'text';

type ButtonSize = 'small' | 'normal' | 'large';

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
        theme = 'primary',
        size = 'normal',
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
            {...otherProps}
        >
            {children}
        </button>
    );
};