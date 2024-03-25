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
    <button className={className} {...otherProps}>
      <span className={cls.button}></span>
    </button>
  );
};
