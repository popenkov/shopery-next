import { FC } from 'react';
import cn from 'classnames';

import { ProductOrder } from '@/entities/Product/ui/ProductOrder';
import { type TUserOrderItem } from '@/entities/User/model/types';

import { OrderProductsHeader } from '../OrderProductsHeader';

import cls from './OrderProducts.module.scss';

type Props = {
  products: TUserOrderItem[];
  className?: string;
};

export const OrderProducts: FC<Props> = ({ products, className }) => {
  return (
    <div className={cn(cls.OrderProducts, className)}>
      <OrderProductsHeader />
      <div className={cls.OrderProductsBody}>
        {products.map((item) => {
          return <ProductOrder key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
