import { FC } from 'react';

import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { CheckoutForm } from 'features/Cart';
import { Text } from 'shared/ui/Text';

import cls from './Checkout.module.scss';
import { CheckoutTotal } from './CheckoutTotal';

const CheckoutPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CHECKOUT];

  // todo возможно здесь сделать форму и передать методы регистрации ниже. так как поля есть в разных компонентах

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
