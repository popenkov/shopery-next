'use client';
import { FC } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import cls from './EditAddress.module.scss';

type Props = {
  className?: string;
};

export const EditAddress: FC<Props> = ({ className }) => {
  // const dispatch = useAppDispatch();
  const handleEditAddressButtonClick = () => {
    // dispatch(EditAddress({ id }));
    console.log('Edit address');
  };
  return (
    <button className={cn(cls.Button, className)} onClick={handleEditAddressButtonClick}>
      <Text variant="body_m" weight="medium" as="span">
        Edit address
      </Text>
    </button>
  );
};
