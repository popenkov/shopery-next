'use client';

import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getRouteCatalog } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';

import cls from './ProductsSearch.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductSearch: FC<Props> = () => {
  const t = useTranslations('common');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchButtonClick = useCallback(() => {
    console.log(searchValue);
    redirect(getRouteCatalog());
  }, [searchValue]);

  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchValue(value);
  }, []);

  return (
    <div className={cls.search}>
      <Input
        type={t('search')}
        placeholder={t('search')}
        hasValidation={false}
        className={cls.searchField}
        value={searchValue}
        onChange={handleInputChange}
      />

      <Button type="submit" className={cls.searchButton} onClick={handleSearchButtonClick}>
        {t('search')}
      </Button>
    </div>
  );
};
