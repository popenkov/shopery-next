import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { BurgerButton } from '../BurgerButton';
import cls from './CategoriesButton.module.scss';
import { Text, TextVariant, TextWeight } from '..';
import ChevronIcon from '@public/icons/icon__chevron-down.svg';
import cn from 'classnames';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  onClick: () => void;
}

export const CategoriesButton: FC<Props> = ({ className, onClick }) => {
  const handleCategoryButtonClick = () => {
    onClick();
  };
  return (
    <button
      className={cn(cls.button, className)}
      onClick={handleCategoryButtonClick}
    >
      <BurgerButton />
      <Text variant={TextVariant.BODY_S} weight={TextWeight.MEDIUM} as="span">
        All Categories
      </Text>
      <ChevronIcon className={cls.chevron} />
    </button>
  );
};
