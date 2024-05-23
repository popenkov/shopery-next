import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { TProduct } from '../../model';

import cls from './ProductCart.module.scss';

type Props = {
  data: TProduct;
  actions: ReactNode;
  className?: string;
};

export const ProductCart: FC<Props> = ({ data, actions, className }) => {
  const { img, title, path, price, amount } = data;
  return (
    <div className={cn(cls.ProductCart, className)}>
      <img className={cls.ProductCartImage} src={img} alt={data.title} />
      <div className={cls.ProductCartDescription}>
        <a className={cls.ProductCartLink} href={path}>
          <h3 className={cls.ProductCartTitle}>{title}</h3>
        </a>
        <p className={cls.ProductCartAmount}>
          {/* todo взять из корзины */}
          <span className={cls.ProductCartAmountValue}>{amount}</span>
          <span className={cls.ProductCartSeparator}>x</span>
          <span className={cls.ProductCartPriceValue}>{price}</span>
        </p>
      </div>
      {actions}
    </div>
  );
};
