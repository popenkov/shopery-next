import { FC } from 'react';

import { CheckoutForm } from '@/features/Cart';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from '@/shared/ui/Text';

import cls from './Checkout.module.scss';
import { CheckoutTotal } from './CheckoutTotal';

const CheckoutPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CHECKOUT];

  return (
    <main className="main" data-testid="checkout">
      <Breadcrumbs items={crumbs} />
      <div className={cls.checkout}>
        <div className={cls.checkoutMain}>
          <Text variant="body_xxl" weight="medium" as="h2" className={cls.checkoutTitle}>
            Billing Information
          </Text>

          <CheckoutForm />
        </div>
        <CheckoutTotal className={cls.checkoutAside} />
      </div>
    </main>
  );
};

export default CheckoutPage;
