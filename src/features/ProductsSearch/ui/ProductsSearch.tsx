'use client';

import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes, useCallback, useState } from 'react';
import { redirect } from 'next/navigation';

import { getRouteCatalog } from '@/shared/lib/constants';
import { Button } from 'shared/ui/Buttons';
import { Input } from 'shared/ui/Input';

import cls from './ProductsSearch.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductSearch: FC<Props> = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchButtonClick = useCallback(() => {
    console.log(searchValue);
    redirect(getRouteCatalog());
  }, [searchValue]);

  // todo перенести валидацию

  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchValue(value);
  }, []);

  return (
    <div className={cls.search}>
      <Input
        type="search"
        placeholder="search"
        hasValidation={false}
        className={cls.searchField}
        value={searchValue}
        onChange={handleInputChange}
      />

      <Button type="submit" className={cls.searchButton} onClick={handleSearchButtonClick}>
        Search
      </Button>
    </div>
  );
};
