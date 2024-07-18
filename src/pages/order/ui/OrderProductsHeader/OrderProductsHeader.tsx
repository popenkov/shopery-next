import { FC } from 'react';

import { Text } from '@/shared/ui/Text';

import cls from './OrderProductsHeader.module.scss';

export const OrderProductsHeader: FC = () => {
  return (
    <div className={cls.OrderProductsHeader}>
      <Text variant="body_tiny" weight="medium" className={cls.OrderProductsColumnTitle}>
        Product
      </Text>
      <Text variant="body_tiny" weight="medium" className={cls.OrderProductsColumnTitle}>
        price
      </Text>
      <Text variant="body_tiny" weight="medium" className={cls.OrderProductsColumnTitle}>
        Quantity
      </Text>
      <Text variant="body_tiny" weight="medium" className={cls.OrderProductsColumnTitle}>
        Subtotal
      </Text>
    </div>
  );
};
