import { FC } from 'react';

import { CheckoutForm } from '@/features/Cart/CheckoutForm';
import { Breadcrumbs } from 'entities/Breadcrumps';
import { AppRouteNames } from 'shared/interfaces/router';
import { Text } from 'shared/ui/Text';

import cls from './Checkout.module.scss';
import { CheckoutTotal } from './CheckoutTotal';

const CheckoutPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CHECKOUT];

  // todo возможно здесь сделать форму и передать методы регистрации ниже. так как поля есть в разных компонентах

  return (
    <div data-testid="checkout">
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
    </div>
  );
};

export default CheckoutPage;
