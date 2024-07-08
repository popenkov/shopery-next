'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

import { TOrder } from '@/entities/Order';
import { getRouteOrderHistory } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import { ORDERS_LIST_TITLES } from './constants';
import { UserOrder } from './UserOrder';
import cls from './UserOrders.module.scss';

type Props = {
  className?: string;
  isPreview?: boolean;
  actions?: ReactNode;
};

export const UserOrders: FC<Props> = ({ className, isPreview, actions }) => {
  const [orders, setOrders] = useState<null | TOrder[]>(null);

  useEffect(() => {
    const ordersString = localStorage.getItem('orders');
    if (ordersString) {
      setOrders(JSON.parse(ordersString));
    }
  }, []);

  if (!orders) {
    return <p>No orders</p>;
  }

  const componentTitleText = isPreview ? 'Recent Order History' : 'Order History';

  return (
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
              <Text key={title} variant="body_tiny" weight="medium" className={cls.UserOrdersTitle}>
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
      {actions && <div className={cls.UserOrderFooter}>{actions}</div>}
    </div>
  );
};
