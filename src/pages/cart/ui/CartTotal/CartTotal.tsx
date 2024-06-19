'use client';

import { FC } from 'react';
import cn from 'classnames';

import { getRouteCheckout } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './CartTotal.module.scss';
import { useAppSelector } from '@/app/lib/store/hooks';
import { selectCartData, selectTotalPrice } from '@/entities/Cart/model/selectors/cart';
import { getFormattedPrice } from '@/shared/lib/utils';

type Props = {
  className?: string;
};

export const CartTotal: FC<Props> = ({ className }) => {
  const { totalPrice, cart } = useAppSelector(selectCartData);

  return (
    <div className={cn('CartTotal cart-page__total', className)}>
      <Text variant="body_xl" className={cls.CartTotalTitle} weight="medium" as="h3">
        Coupon Code
      </Text>
      <div className={cls.CartTotalValues}>
        <div className={cls.CartTotalRow}>
          <Text variant="body_s" className={cls.CartTotalKey} as="span">
            Subtotal:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CartTotalValue} as="span">
            {getFormattedPrice(totalPrice)}
          </Text>
        </div>
        <div className={cls.CartTotalRow}>
          <Text variant="body_s" className={cls.CartTotalKey} as="span">
            Shipping:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CartTotalValue} as="span">
            Free
          </Text>
        </div>
        <div className={cls.CartTotalRow}>
          <Text variant="body_s" className={cls.CartTotalKey} as="span">
            Total:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CartTotalValue} as="span">
            {getFormattedPrice(totalPrice)}
          </Text>
        </div>
      </div>
      <AppLink
        href={getRouteCheckout()}
        size="large"
        className={cls.CartTotalButton}
        isDisabled={!cart.length}
      >
        Proceed to checkout
      </AppLink>
    </div>
  );
};
