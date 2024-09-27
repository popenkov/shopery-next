import { FC } from 'react';
import cn from 'classnames';

import { type TUserAddress } from '@/entities/User';
import { Text } from '@/shared/ui/Text';

import cls from './OrderPageAddress.module.scss';

type Props = {
  title: string;
  data: TUserAddress;
  className?: string;
};

export const OrderPageAddress: FC<Props> = ({ data, title, className }) => {
  const { name, street, email, phone } = data;
  return (
    <div className={cn(cls.OrderPageAddress, className)}>
      <div className={cls.OrderPageAddressHeader}>
        <Text variant="body_s" weight="medium" as="h3" className={cls.OrderPageAddressTitle}>
          {title}
        </Text>
      </div>
      <div className={cls.OrderPageAddressMain}>
        <Text variant="body_l" weight="medium" className={cls.OrderPageAddressName}>
          {name}
        </Text>
        <Text variant="body_s" className={cls.OrderPageAddressStreet}>
          {street}
        </Text>
        <div className={cn(cls.OrderPageAddressContainer, cls.OrderPageAddressEmail)}>
          <span className={cls.OrderPageAddressKey}>Email</span>
          <Text variant="body_m">{email}</Text>
        </div>
        <div className={cn(cls.OrderPageAddressContainer, cls.OrderPageAddressPhone)}>
          <span className={cls.OrderPageAddressKey}>Phone</span>
          <Text variant="body_m" className={cls.OrderPageAddressPhone}>
            {phone}
          </Text>
        </div>
      </div>
    </div>
  );
};
