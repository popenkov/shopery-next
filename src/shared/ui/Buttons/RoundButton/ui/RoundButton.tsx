import {
    ComponentProps,
    ElementType,
    ReactNode,
    Ref,
    forwardRef,
    memo,
} from 'react';
import cn from 'classnames';


import style from './RoundButton.module.scss';

export type RoundButtonTheme = 'primary' | 'secondary' | 'ghost';

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
    const { className, children, as, theme = 'primary' } = props;

    const Element = as || DEFAULT_ELEMENT;

    return (
        <Element
            className={cn(style.button, className, {
                [style[theme]]: true,
            })}
            ref={ref}
        >
            {children}
        </Element>
    );
});

ButtonElement.displayName = 'ButtonElement';

export const RoundButton = memo(ButtonElement);
