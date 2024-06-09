import { FC } from 'react';

import cls from '../WishlistTable.module.scss';
import { Text } from '@/shared/ui/Text';

export const WishlistTableHeader: FC = () => {
  return (
    <div className={cls.wishlistTableHeader}>
      <Text variant="body_s" className={cls.wishlistTableColumnTitle}>
        Product
      </Text>
      <Text variant="body_s" className={cls.wishlistTableColumnTitle}>
        price
      </Text>
      <Text variant="body_s" className={cls.wishlistTableColumnTitle}>
        Stock Status
      </Text>
    </div>
  );
};
