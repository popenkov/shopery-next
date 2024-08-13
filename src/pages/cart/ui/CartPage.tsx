import { FC } from 'react';

import { ApplyCoupon } from '@/features/Cart';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from '@/shared/ui/Text';

import { CartItems } from './CartItems';
import cls from './CartPage.module.scss';
import { CartTotal } from './CartTotal';

const CartPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CART];

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
        <div className={cls.CartPageContent}>
          <CartItems className={cls.CartPageItems} />

          <ApplyCoupon className={cls.CartPageCoupon} />
          <CartTotal className={cls.CartPageTotal} />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
