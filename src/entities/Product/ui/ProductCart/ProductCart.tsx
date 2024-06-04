import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { getFormattedPrice } from 'shared/lib/utils';
import { Tag } from 'shared/ui/Tag';
import { Text } from 'shared/ui/Text';

import { TProduct } from '../..';

import cls from './ProductCart.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Omit<TProduct, 'rating'>;
  actions?: ReactNode;
  className?: string;
}

export const ProductCart: FC<Props> = ({ data, className, actions }) => {
  const { img, title, path, price, priceOld, stock } = data;
  return (
    <div className={cn(cls.ProductCart, className)}>
      <div className={cls.ProductCartInfo}>
        <div className={cls.ProductCartPhoto}>
          <Image src={img} alt={title} fill />
        </div>
        <Link href={path}>
          <Text variant="body_m" weight="medium" as="h3">
            {title}
          </Text>
        </Link>
      </div>

      <div className={cls.ProductCartPrice}>
        <span className={cls.ProductCartKeyMobile}>Price:</span>
        <Text variant="body_m" weight="medium" className={cls.ProductCartPriceNew}>
          {getFormattedPrice(price)}
        </Text>
      </div>
      <div className="cart-item__quantity">
        <span className={cls.ProductCartKeyMobileAmount}>Quantity:</span>
        <div className={cls.ProductCartActions}>{actions}</div>
        <div className="amount-actions">
          <button className="amount-actions__button js-quantity-minus">
            <svg className="amount-actions__button-icon">
              <use href="img/svgSprite.svg#icon__minus"></use>
            </svg>
          </button>
          <div className="amount-actions__input-wrapper">
            <input
              className="amount-actions__input js-quantity-input"
              type="number"
              value="5"
              min="1"
              readOnly
            />
          </div>
          <button className="amount-actions__button js-quantity-plus">
            <svg className="amount-actions__button-icon">
              <use href="img/svgSprite.svg#icon__plus"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="cart-item__subtotal">
        <span className={cls.ProductCartKeyMobile}>Subtotal:</span>
        <span className="cart-item__price-new">$14.99</span>
      </div>
      <button className="cart-item__delete-button close-button">
        <svg className="close-button__icon">
          <use href="img/svgSprite.svg#icon__cross"></use>
        </svg>
      </button>
    </div>
  );
};
