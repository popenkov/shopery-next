import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import { getUserAddress } from '../../api';

import cls from './UserAddress.module.scss';

type Props = {
  actions: ReactNode;
  className?: string;
};

export const UserAddress: FC<Props> = ({ actions, className }) => {
  const { street, name, email, phone } = getUserAddress();
  return (
    <div className={cn(cls.UserAddress, className)}>
      <Text variant="body_s" weight="medium" as="h3" className={cls.UserAddressTitle}>
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
