'use client';

import { FC, useMemo, useState } from 'react';
import cn from 'classnames';
import { AnimatePresence } from 'framer-motion';

import { getRouteOrderHistory } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import { TUserOrderPreview } from '../../model/types';

import { ORDERS_LIST_TITLES, ORDERS_PREVIEW_AMOUNT } from './constants';
import { UserOrder } from './UserOrder';
import cls from './UserOrders.module.scss';

type Props = {
  data: TUserOrderPreview[];
  className?: string;
  isPreview?: boolean;
};

export const UserOrders: FC<Props> = ({ data, className, isPreview }) => {
  const [areAllOrdersShown, setAreAllOrdersShown] = useState(false);

  const orders = useMemo(() => {
    const slicedData = data.slice(0, ORDERS_PREVIEW_AMOUNT);
    return isPreview ? slicedData : data;
  }, [areAllOrdersShown]);

  const handleShowAllClick = () => {
    setAreAllOrdersShown(true);
  };

  const componentTitleText = isPreview ? 'Recent Order History' : 'Order History';

  return (
    <div className={cn(cls.UserOrders, className)}>
      <div className={cls.UserOrdersHeader}>
        <Text variant="body_xl" weight="medium" className={cls.UserOrdersName} as="h2">
          {componentTitleText}
        </Text>
        {isPreview && (
          <AppLink
            href={getRouteOrderHistory()}
            onClick={handleShowAllClick}
            theme="text"
            size="large"
          >
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
          <AnimatePresence>
            {orders.map((order) => {
              return <UserOrder order={order} key={order.id} />;
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};
