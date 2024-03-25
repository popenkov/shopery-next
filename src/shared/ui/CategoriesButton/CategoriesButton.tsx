import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { BurgerButton } from '../BurgerButton';
import cls from './CategoriesButton.module.scss';
import { Text, TextVariant, TextWeight } from '..';
import ChevronIcon from '@public/icons/icon__chevron-down.svg';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const CategoriesButton: FC<Props> = () => {
  return (
    <button className={cls.button}>
      <BurgerButton className="header__all-categories-burger" />
      <Text variant={TextVariant.BODY_S} weight={TextWeight.MEDIUM} as="span">
        All Categories
      </Text>
      <ChevronIcon className={cls.chevron} />
    </button>
  );
};
