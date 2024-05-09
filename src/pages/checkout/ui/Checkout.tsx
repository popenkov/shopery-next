import { FC } from 'react';

import { Breadcrumbs } from 'entities/Breadcrumps';
import { AppRouteNames } from 'shared/interfaces/router';
import { Text } from 'shared/ui/Text';

import cls from './Checkout.module.scss';
import { CheckoutForm } from '@/features/Cart/CheckoutForm';
import { CheckoutTotal } from './CheckoutTotal/CheckoutTotal';

const CheckoutPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CHECKOUT];

  // todo возможно здесь сделать форму и передать методы регистрации ниже. так как поля есть в разных компонентах

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
      <CheckoutTotal />
    </div>
  );
};

export default CheckoutPage;
