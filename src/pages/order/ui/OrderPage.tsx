'use client';
import { FC } from 'react';

import { getUserOrderById } from '@/entities/User/api/getUserOrderById';

import cls from './OrderPage.module.scss';
import { OrderPageAddress } from './OrderPageAddress';
import { OrderPageHeader } from './OrderPageHeader';
import { OrderPagePayment } from './OrderPagePayment';
import { OrderPageStatus } from './OrderPageStatus';
import { OrderProducts } from './OrderProducts';

export const OrderPage: FC<{ params: { slug: string } }> = ({ params }) => {
  const { date, amount, items, status, address } = getUserOrderById(params?.slug || '1');
  return (
    <div className={cls.OrderPage}>
      <OrderPageHeader date={date} amount={amount} />

      <div className={cls.OrderPageInfo}>
        <div className={cls.OrderPageAddresses}>
          <OrderPageAddress
            title="Billing address"
            className={cls.OrderPageAddress}
            data={address}
          />
          <OrderPageAddress title="Shipping address" data={address} />
        </div>
        <OrderPagePayment className={cls.OrderPagePayment} />
        <OrderPageStatus status={status} className={cls.OrderPageStatus} />
      </div>
      <div className={cls.OrderPageItems}>{/* todo перенести похожую таблицу из дашборда */}</div>
      <OrderProducts products={items} className={cls.OrderPageItems} />
    </div>
  );
};
