'use client';

import { FC, useMemo, useState } from 'react';
import cn from 'classnames';
import cls from './UserOrders.module.scss';
import { AnimatePresence } from 'framer-motion';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Buttons';
import { getUserOrders } from '../../api/getUserOrders';
import { ORDERS_LIST_TITLES, ORDERS_PREVIEW_AMOUNT } from './constants';

import { UserOrder } from './UserOrder';

type Props = {
  className?: string;
};

export const UserOrders: FC<Props> = ({ className }) => {
  const data = getUserOrders();
  const [areAllOrdersShown, setAreAllOrdersShown] = useState(false);

  const orders = useMemo(() => {
    const slicedData = data.slice(0, ORDERS_PREVIEW_AMOUNT);
    return areAllOrdersShown ? data : slicedData;
  }, [areAllOrdersShown]);

  const handleShowAllClick = () => {
    setAreAllOrdersShown(true);
  };

  return (
    <div className={cn(cls.UserOrders, className)}>
      <div className={cls.UserOrdersHeader}>
        <Text variant="body_xl" weight="medium" className={cls.UserOrdersName} as="h2">
          Recet Order History
        </Text>
        {!areAllOrdersShown && (
          <Button onClick={handleShowAllClick} theme="text" size="large">
            View All
          </Button>
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
