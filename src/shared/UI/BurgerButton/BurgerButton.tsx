import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

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
    >
      <span className={cls.buttonLines}></span>
    </button>
  );
};
