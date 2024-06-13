import { FC } from 'react';

import cls from './OrderProductsHeader.module.scss';
import { Text } from '@/shared/ui/Text';

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
