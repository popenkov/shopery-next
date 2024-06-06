import { FC } from 'react';
import cn from 'classnames';

import { getRouteCheckout } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './CartTotal.module.scss';

type Props = {
  className?: string;
};

export const CartTotal: FC<Props> = ({ className }) => {
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
            $84.00
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
            $84.00
          </Text>
        </div>
      </div>
      <AppLink href={getRouteCheckout()} size="large" className={cls.CartTotalButton}>
        Proceed to checkout
      </AppLink>
    </div>
  );
};
