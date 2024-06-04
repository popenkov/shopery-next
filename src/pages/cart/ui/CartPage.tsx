import { FC } from 'react';

import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from 'shared/ui/Text';

import cls from './CartPage.module.scss';
import { ApplyCoupon } from '@/features/Cart';
import { CartTotal } from './CartTotal/CartTotal';
import { CartItems } from './CartItems';

const CartPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CART];

  // todo
  // const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <main className="main" data-testid="CartPage">
      <Breadcrumbs items={crumbs} />
      <div className={cls.CartPage}>
        <Text
          variant="heading_5"
          weight="semibold"
          align="center"
          as="h2"
          className={cls.CartPageTitle}
        >
          My Shopping Cart
        </Text>

        {/* todo */}
        <div className="section__content cart-page">
          <CartItems className="cart-page__items" />

          <ApplyCoupon className="cart-page__coupon" />
          <CartTotal className="cart-page__total" />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
