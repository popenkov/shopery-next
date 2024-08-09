import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { ChevronDownIcon } from '@/shared/ui/icons';

import { Text } from '../Text';

import cls from './CategoriesButton.module.scss';
import { useTranslations } from 'next-intl';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  onClick: () => void;
}

export const CategoriesButton: FC<Props> = ({ className, onClick }) => {
  const t = useTranslations('HomePage');

  const handleCategoryButtonClick = () => {
    onClick();
  };
  return (
    <button className={cn(cls.button, className)} onClick={handleCategoryButtonClick}>
      <span className={cls.buttonLines} />
      <Text variant="body_s" weight="medium" as="span">
        {t('allCategories')}
      </Text>
      <ChevronDownIcon className={cls.chevron} />
    </button>
  );
};
