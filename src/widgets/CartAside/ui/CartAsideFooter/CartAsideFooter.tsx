import { FC } from 'react';

import { selectCurrentCurrency, TCurrencyVariant } from '@/entities/Currency';
import { getRouteCart, getRouteCheckout } from '@/shared/lib/constants';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice, getWordDeclination } from '@/shared/lib/utils';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './CartAsideFooter.module.scss';

type Props = {
  closeDrawer: () => void;
  price: Record<TCurrencyVariant, number>;
  amount: number;
};

export const CartAsideFooter: FC<Props> = ({ closeDrawer, price, amount }) => {
  const currentCurrency = useAppSelector(selectCurrentCurrency);
  return (
    <div className={cls.CartAsideFooter}>
      <div className={cls.CartAsideFooterTotal}>
        <Text variant="body_m" as="span">
          {amount} {getWordDeclination(amount, ['Product', 'Products'])}
        </Text>
        <Text variant="body_m" weight="semibold" as="span">
          {getFormattedPrice(price, currentCurrency)}
        </Text>
      </div>
      <div className={cls.CartAsideFooterButtons}>
        <AppLink
          href={getRouteCheckout()}
          theme="primary"
          size="normal"
          className={cls.CartAsideFooterButton}
          onClick={closeDrawer}
        >
          Checkout
        </AppLink>
        <AppLink
          href={getRouteCart()}
          theme="ghost"
          size="normal"
          className={cls.CartAsideFooterButton}
          onClick={closeDrawer}
        >
          Go To Cart
        </AppLink>
      </div>
    </div>
  );
};
