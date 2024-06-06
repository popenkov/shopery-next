import { FC } from 'react';

import { WishlistTable } from 'widgets/WishlistTable';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from 'shared/ui/Text';

import cls from './Wishlist.module.scss';

const Wishlist: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.WISHLIST];

  return (
    <main className="main" data-testid="wishlist">
      <Breadcrumbs items={crumbs} />
      <div className={cls.wishlist}>
        <Text
          variant="heading_5"
          weight="semibold"
          align="center"
          as="h2"
          className={cls.wishlistTitle}
        >
          My Wishlist
        </Text>
        <WishlistTable />
      </div>
    </main>
  );
};

export default Wishlist;
