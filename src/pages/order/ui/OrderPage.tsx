'use client';
import { FC } from 'react';

import { getUserOrderById } from '@/entities/User/api/getUserOrderById';

import cls from './OrderPage.module.scss';

import { OrderPageHeader } from './OrderPageHeader';
import { OrderProducts } from './OrderProducts';

import { OrderPagePayment } from './OrderPagePayment';
import { OrderPageStatus } from './OrderPageStatus';
import { OrderPageAddress } from './OrderPageAddress';

export const OrderPage: FC<{ params: { slug: string } }> = ({ params }) => {
  const { date, amount, items, status, address } = getUserOrderById(params?.slug || '1');
  return (
    <div className={cls.OrderPage}>
      <OrderPageHeader date={date} amount={amount} />

      <div className={cls.OrderPageInfo}>
        <div>
          <OrderPageAddress title="Billing address" data={address} />
          <OrderPageAddress title="Shipping address" data={address} />
        </div>
        <OrderPagePayment />
        <OrderPageStatus status={status} />
      </div>
      <div className={cls.OrderPageItems}>{/* todo перенести похожую таблицу из дашборда */}</div>
      <OrderProducts products={items} className={cls.OrderPageItems} />
    </div>
  );
};
