'use client';
import { FC, useEffect } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import {
  getOrderDetailedData,
  getOrderDetailedError,
  getOrderDetailedIsLoading,
  getOrderById,
} from '@/entities/Order';
import { getUserOrderById } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

import cls from './OrderPage.module.scss';
import { OrderPageAddress } from './OrderPageAddress';
import { OrderPageHeader } from './OrderPageHeader';
import { OrderPagePayment } from './OrderPagePayment';
import { OrderPageStatus } from './OrderPageStatus';
import { OrderProducts } from './OrderProducts';

export const OrderPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();

  const article = useSelector(getOrderDetailedData);
  const isLoading = useSelector(getOrderDetailedIsLoading);
  const error = useSelector(getOrderDetailedError);

  // todo
  useEffect(() => {
    dispatch(getOrderById(id) as unknown as UnknownAction);
  }, [dispatch, id]);

  const { date, amount, items, status, address } = getUserOrderById(id);
  return (
    <div className={cls.OrderPage}>
      <OrderPageHeader date={date} amount={amount} />

      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}

      {article && !isLoading && !error && (
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
      )}
      <div className={cls.OrderPageItems}>{/* todo перенести похожую таблицу из дашборда */}</div>
      <OrderProducts products={items} className={cls.OrderPageItems} />
    </div>
  );
};
