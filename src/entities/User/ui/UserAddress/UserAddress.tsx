import { FC, ReactNode } from 'react';

import cls from './UserAddress.module.scss';
import { getUserAddress } from '../../api';
import { Text } from '@/shared/ui/Text';

type Props = {
  actions: ReactNode;
  className?: string;
};

export const UserAddress: FC<Props> = ({ actions, className }) => {
  const { street, name, email, phone } = getUserAddress();
  return (
    <div className={cls.UserAddress}>
      <Text as="h3" className={cls.UserAddressTitle}>
        Billing Address
      </Text>
      <Text variant="body_l" weight="medium" className={cls.UserAddressName}>
        {name}
      </Text>
      <Text variant="body_s" className={cls.UserAddressStreet}>
        {street}
      </Text>
      <Text variant="body_m" className={cls.UserAddressEmail}>
        {email}
      </Text>
      <Text variant="body_m" className={cls.UserAddressPhone}>
        {phone}
      </Text>
      <div className={cls.UserAddressActions}>{actions}</div>
    </div>
  );
};
