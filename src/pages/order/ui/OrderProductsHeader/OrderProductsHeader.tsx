import { FC } from 'react';

import cls from './OrderProductsHeader.module.scss';

export const OrderProductsHeader: FC = () => {
  return (
    <div className={cls.OrderProductsHeader}>
      <span className={cls.OrderProductsColumnTitle}>Product</span>
      <span className={cls.OrderProductsColumnTitle}>price</span>
      <span className={cls.OrderProductsColumnTitle}>Quantity</span>
      <span className={cls.OrderProductsColumnTitle}>Subtotal</span>
    </div>
  );
};
