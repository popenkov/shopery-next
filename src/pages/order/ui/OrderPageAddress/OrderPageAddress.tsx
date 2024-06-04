import { FC } from 'react';
import cn from 'classnames';
import cls from './OrderPageAddress.module.scss';
import { Text } from '@/shared/ui/Text';
import { TUserAddress } from '@/entities/User/model/types';

type Props = {
  title: string;
  data: TUserAddress;
  className?: string;
};

export const OrderPageAddress: FC<Props> = ({ data, title, className }) => {
  const { name, street, email, phone } = data;
  return (
    <div className={cn(cls.OrderPageAddress, className)}>
      <Text variant="body_s" weight="medium" as="h3" className={cls.OrderPageAddressTitle}>
        {title}
      </Text>
      <Text variant="body_l" weight="medium" className={cls.OrderPageAddressName}>
        {name}
      </Text>
      <Text variant="body_s" className={cls.OrderPageAddressStreet}>
        {street}
      </Text>
      <Text variant="body_m" className={cls.OrderPageAddressEmail}>
        {email}
      </Text>
      <Text variant="body_m" className={cls.OrderPageAddressPhone}>
        {phone}
      </Text>
    </div>
  );
};
