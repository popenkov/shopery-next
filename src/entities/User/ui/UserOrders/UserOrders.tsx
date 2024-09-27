'use client';

import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { getOrderDetailedData, TOrder } from '@/entities/Order';
import { ORDERS_LOCALSTORAGE_KEY } from '@/entities/Order';
import { getRouteOrderHistory } from '@/shared/lib/constants';
import { useAppSelector } from '@/shared/lib/hooks';
import { AppLink } from '@/shared/ui/AppLink';
import { PAGE_SIZE, Pagination } from '@/shared/ui/Pagination';
import { Text } from '@/shared/ui/Text';

import { ORDERS_LIST_TITLES } from './constants';
import { UserOrder } from './UserOrder';
import cls from './UserOrders.module.scss';

type Props = {
  className?: string;
  isPreview?: boolean;
};

export const UserOrders: FC<Props> = ({ className, isPreview }) => {
  const orderData = useAppSelector(getOrderDetailedData);
  const [orders, setOrders] = useState<TOrder[]>([]);

  useEffect(() => {
    let ordersItems;
    if (!orderData?.length && Boolean(localStorage.getItem(ORDERS_LOCALSTORAGE_KEY))) {
      ordersItems = JSON.parse(localStorage.getItem(ORDERS_LOCALSTORAGE_KEY)!);
    } else {
      ordersItems = orderData;
    }

    setOrders(ordersItems);
  }, [orderData]);

  if (!orders.length) {
    return <p>No orders</p>;
  }

  const componentTitleText = isPreview ? 'Recent Order History' : 'Order History';

  const handlePageChange = (filteredProducts: TOrder[]) => {
    setOrders(filteredProducts);
  };

  console.log('orders', orders);

  return (
    <>
      <div className={cn(cls.UserOrders, className)}>
        <div className={cls.UserOrdersHeader}>
          <Text variant="body_xl" weight="medium" className={cls.UserOrdersName} as="h2">
            {componentTitleText}
          </Text>
          {isPreview && (
            <AppLink href={getRouteOrderHistory()} theme="text" size="large">
              Show All
            </AppLink>
          )}
        </div>
        <div className={cls.UserOrdersMain}>
          <div className={cls.UserOrdersTitles}>
            {ORDERS_LIST_TITLES.map((title) => {
              return (
                <Text
                  key={title}
                  variant="body_tiny"
                  weight="medium"
                  className={cls.UserOrdersTitle}
                >
                  {title}
                </Text>
              );
            })}
          </div>
          <ul className={cls.UserOrdersOrders}>
            {orders.map((order) => {
              return <UserOrder order={order} key={order.id} />;
            })}
          </ul>
        </div>
        <div className={cls.UserOrderFooter}>
          <Pagination
            allItems={orders}
            className={cls.UserOrderPagination}
            pageSize={PAGE_SIZE}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
