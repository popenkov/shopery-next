'use client';
import { FC, useEffect } from 'react';

import { getUserOrderById } from '@/entities/User/api/getUserOrderById';

import cls from './OrderPage.module.scss';
import { OrderPageAddress } from './OrderPageAddress';
import { OrderPageHeader } from './OrderPageHeader';
import { OrderPagePayment } from './OrderPagePayment';
import { OrderPageStatus } from './OrderPageStatus';
import { OrderProducts } from './OrderProducts';
import { useAppDispatch } from '@/app/lib/store/hooks';
import { useSelector } from 'react-redux';
import {
  getOrderDetailedData,
  getOrderDetailedError,
  getOrderDetailedIsLoading,
} from '@/entities/Order/model/selectors/order';
import { getOrderById } from '@/entities/Order/services/getOrderById';
import { Text } from '@/shared/ui/Text';

export const OrderPage: FC<{ params: { slug: string } }> = ({ params: { slug } }) => {
  const dispatch = useAppDispatch();
  const article = useSelector(getOrderDetailedData);
  const isLoading = useSelector(getOrderDetailedIsLoading);
  const error = useSelector(getOrderDetailedError);

  useEffect(() => {
    dispatch(getOrderById(slug));
  }, [dispatch, slug]);

  const { date, amount, items, status, address } = getUserOrderById(slug || '1');
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
