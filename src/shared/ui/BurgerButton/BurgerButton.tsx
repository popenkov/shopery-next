import { DetailedHTMLProps, FC, HTMLAttributes, Ref } from 'react';

import cls from './BurgerButton.module.scss';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const BurgerButton: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <button className={cls.button} {...otherProps}>
      <span className={cls.buttonLines}></span>
    </button>
  );
};
