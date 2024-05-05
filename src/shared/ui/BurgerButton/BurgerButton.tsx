import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';


import cls from './BurgerButton.module.scss';

interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
    onClick?: () => void;
}

export const BurgerButton: FC<Props> = ({ className, onClick }) => {
    const handleBurgerButtonClick = () => {
        onClick?.();
    };
    return (
        <button
            className={cn(cls.button, className)}
            onClick={handleBurgerButtonClick}
            data-testid="burger-button"
        >
            <span className={cls.buttonLines}></span>
        </button>
    );
};
