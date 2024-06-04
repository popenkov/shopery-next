import { FC } from 'react';
import { OrderProductsHeader } from '../OrderProductsHeader';

import cn from 'classnames';
import cls from './OrderProducts.module.scss';
import { ProductOrder } from '@/entities/Product/ui/ProductOrder';
import { TUserOrderItem } from '@/entities/User/model/types';

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
