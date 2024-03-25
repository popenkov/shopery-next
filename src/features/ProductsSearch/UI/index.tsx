'use client';

import { FC } from 'react';

import cls from './style.module.scss';
import { Button, Input } from '@/shared/ui';

export const ProductSearch: FC = () => {
  return (
    <form className={cls.search}>
      <Input type="search" placeholder="search" className={cls.field} />
      <Button className={cls.button}>Search</Button>
    </form>
  );
};
