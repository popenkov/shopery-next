import { FC } from 'react';
import { CrossIcon } from 'shared/ui/icons';

import { TProduct } from '../../model';

import cls from './ProductCart.module.scss';

type Props = {
  data: TProduct;
};

export const ProductCart: FC<Props> = ({ data }) => {
  const { img, title, path, price, priceOld, rating, amount } = data;
  return (
    <div className={cls.ProductCart}>
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
      <button className="}cart-aside-widget__close-button close-button js-close-cart-menu-btn}">
        <CrossIcon className="}close-button__icon}" />
      </button>
    </div>
  );
};
