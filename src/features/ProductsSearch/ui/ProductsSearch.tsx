'use client';

import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getRouteCatalog } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';

import cls from './ProductsSearch.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductSearch: FC<Props> = () => {
  const router = useRouter();
  const t = useTranslations('common');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchButtonClick = useCallback(() => {
    router.push(`${getRouteCatalog()}?q=${searchValue}`);
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
