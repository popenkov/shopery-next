import { FC } from 'react';

import { Text } from '@/shared/ui/Text';

import cls from './OrderProductsHeader.module.scss';

const HEADER_DATA = [
  { title: 'Product', className: cls.OrderProductsColumnTitle },
  { title: 'price', className: cls.OrderProductsColumnTitle },
  { title: 'Quantity', className: cls.OrderProductsColumnTitle },
  { title: 'Subtotal', className: cls.OrderProductsColumnTitle },
];

export const OrderProductsHeader: FC = () => {
  return (
    <div className={cls.OrderProductsHeader}>
      {HEADER_DATA.map(({ title, className }) => (
        <Text variant="body_tiny" weight="medium" className={className} key={title}>
          {title}
        </Text>
      ))}
    </div>
  );
};
