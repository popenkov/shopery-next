'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Button, Input } from '@/shared';

import cls from './style.module.scss';
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const ProductSearch: FC<Props> = () => {
  return (
    <form className={cls.search}>
      <Input type="search" placeholder="search" className={cls.searchField} />
      <Button className={cls.searchButton}>Search</Button>
    </form>
  );
};
