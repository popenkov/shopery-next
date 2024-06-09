'use client';

import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { getRouteOrderHistory } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import { type TUserOrderPreview } from '../../model/types';

import { ORDERS_LIST_TITLES } from './constants';
import { UserOrder } from './UserOrder';
import cls from './UserOrders.module.scss';

type Props = {
  data: TUserOrderPreview[];
  className?: string;
  isPreview?: boolean;
  actions?: ReactNode;
};

export const UserOrders: FC<Props> = ({ className, isPreview, data, actions }) => {
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
          {data.map((order) => {
            return <UserOrder order={order} key={order.id} />;
          })}
        </ul>
      </div>
      {actions && <div className={cls.UserOrderFooter}>{actions}</div>}
    </div>
  );
};
