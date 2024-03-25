'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './style.module.scss';
import { Button, Input } from '@/shared/ui';
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const ProductSearch: FC<Props> = () => {
  return (
    <form className={cls.search}>
      <Input type="search" placeholder="search" className={cls.field} />
      <Button className={cls.button}>Search</Button>
    </form>
  );
};
