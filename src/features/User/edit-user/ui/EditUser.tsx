'use client';
import { FC } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import cls from './EditUser.module.scss';

type Props = {
  className?: string;
};

export const EditUser: FC<Props> = ({ className }) => {
  // const dispatch = useAppDispatch();
  const handleEditUserButtonClick = () => {
    // dispatch(editUser({ id }));
    console.log('Edit user');
  };
  return (
    <button className={cn(cls.Button, className)} onClick={handleEditUserButtonClick}>
      <Text variant="body_m" weight="medium" as="span">
        Edit user
      </Text>
    </button>
  );
};
