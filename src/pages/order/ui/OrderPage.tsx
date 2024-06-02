'use client';
import { FC } from 'react';

import { getUserOrderById } from '@/entities/User/api/getUserOrderById';

import cls from './OrderPage.module.scss';

export const OrderPage: FC<{ params: { slug: string } }> = ({ params }) => {
  const data = getUserOrderById(params.slug);
  return (
    <div className={cls.OrderPage}>
      <div className={cls.OrderPageHeader}></div>
      <div className={cls.OrderPageInfo}></div>
      <div className={cls.OrderPageItems}>{/* todo перенести похожую таблицу из дашборда */}</div>
    </div>
  );
};
