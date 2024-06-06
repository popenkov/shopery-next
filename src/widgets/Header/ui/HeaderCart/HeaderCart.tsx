import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { useAppSelector } from '@/app/lib/store/hooks';
import { selectTotalAmount, selectTotalPrice } from '@/entities/Cart/model/selectors/cart';
import { getFormattedPrice } from 'shared/lib/utils';
import { CartIcon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

import cls from './HeaderCart.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeaderCart: FC<Props> = () => {
  const totalAmount = useAppSelector(selectTotalAmount);
  const totalPrice = useAppSelector(selectTotalPrice);
  const formattedPrice = getFormattedPrice(totalPrice);
  return (
    <div className={cls.cart}>
      <Link className={cls.cartLink} href="#">
        <CartIcon className={cls.cartIcon} />
        {Number.isFinite(totalAmount) && <span className={cls.cartItemsAmount}>{totalAmount}</span>}
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
