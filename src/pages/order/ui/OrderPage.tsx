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
import { useAppDispatch } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

import cls from './OrderPage.module.scss';
import { OrderPageAddress } from './OrderPageAddress';
import { OrderPageHeader } from './OrderPageHeader';
import { OrderPagePayment } from './OrderPagePayment';
import { OrderPageSkeleton } from './OrderPageSkeleton/OrderPageSkeleton';
import { OrderPageStatus } from './OrderPageStatus';
import { OrderProducts } from './OrderProducts';

export const OrderPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  const dispatch = useAppDispatch();
  const orderData = useSelector(getOrderDetailedData);
  const isLoading = useSelector(getOrderDetailedIsLoading);
  const error = useSelector(getOrderDetailedError);

  useEffect(() => {
    // todo
    const testID = '1720362377187';
    dispatch(getOrderById(testID) as unknown as UnknownAction);
  }, [dispatch, id]);

  if (isLoading) {
    return <OrderPageSkeleton />;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  if (!orderData) {
    return;
  }

  const { date, amount, items, status, billingAddress, shippingAddress } = orderData;
  return (
    <div className={cls.OrderPage}>
      <OrderPageHeader date={date} amount={amount} />
      {orderData && !isLoading && !error && (
        <div className={cls.OrderPageInfo}>
          <div className={cls.OrderPageAddresses}>
            <OrderPageAddress
              title="Billing address"
              className={cls.OrderPageAddress}
              data={billingAddress}
            />
            <OrderPageAddress title="Shipping address" data={shippingAddress} />
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
