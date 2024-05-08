import { FC } from 'react';

import { Breadcrumbs } from 'entities/Breadcrumps';
import { AppRouteNames } from 'shared/interfaces/router';
import { Text } from 'shared/ui/Text';

import cls from './Checkout.module.scss';
import { CheckoutForm } from '@/features/Cart/CheckoutForm';

const CheckoutPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CHECKOUT];

  return (
    <div data-testid="checkout">
      <Breadcrumbs items={crumbs} />
      <div className={cls.checkout}>
        <Text
          variant="heading_5"
          weight="semibold"
          align="center"
          as="h2"
          className={cls.checkoutTitle}
        >
          Billing Information
        </Text>

        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
