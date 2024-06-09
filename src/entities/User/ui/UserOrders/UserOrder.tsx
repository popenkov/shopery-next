import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { getFormattedPrice, getWordDeclination } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/Text';

import { type TUserOrderPreview } from '../../model/types';

import cls from './UserOrders.module.scss';
type Props = {
  order: TUserOrderPreview;
};

export const UserOrder: FC<Props> = ({ order }) => {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 900, damping: 40 },
  };
  return (
    <motion.li {...animations} layout key={order.id} className={cls.UserOrdersItem}>
      <Text variant="body_s" className={cls.UserOrdersItemText}>
        #{order.id}
      </Text>
      <Text variant="body_s" className={cls.UserOrdersItemText}>
        {order.date}
      </Text>
      <Text variant="body_s" className={cls.UserOrdersItemText}>
        {getFormattedPrice(order.price)} ({order.amount}{' '}
        {getWordDeclination(order.amount, ['Product', 'Products'])})
      </Text>
      <Text variant="body_s" className={cls.UserOrdersItemText}>
        {order.status}
      </Text>
      <Link href={`/account/order/${order.id}`} className={cls.UserOrdersItemLink}>
        <Text variant="body_s">View Details</Text>
      </Link>
    </motion.li>
  );
};
