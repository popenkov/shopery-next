import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import CartIcon from '@public/icons/icon__cart.svg';
import { getCartData } from 'entities/Cart/';
import { getFormattedPrice } from 'shared/lib/utils';
import { Text } from 'shared/ui/Text';

import cls from './HeaderCart.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeaderCart: FC<Props> = () => {
  const { amount, price } = getCartData();
  const formattedPrice = getFormattedPrice(price);
  return (
    <div className={cls.cart}>
      <Link className={cls.cartLink} href="#">
        <CartIcon className={cls.cartIcon} />
        {Number.isFinite(amount) && <span className={cls.cartItemsAmount}>{amount}</span>}
      </Link>
      <div className={cls.cartInfo}>
        <Text variant="body_xs" className={cls.cartTitle}>
          Shopping cart:
        </Text>
        <Text variant="body_s" weight="medium">
          {formattedPrice}
        </Text>
      </div>
    </div>
  );
};
