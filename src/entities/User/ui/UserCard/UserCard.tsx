import React, { FC, ReactNode } from 'react';

import cn from 'classnames';
import cls from './UserCard.module.scss';
import Image from 'next/image';
import { Text } from '@/shared/ui/Text';
import { getUserData } from '../../api';

type Props = {
  actions: ReactNode;
  className?: string;
};

export const UserCard: FC<Props> = ({ actions, className }) => {
  const { photo, name, role } = getUserData();

  return (
    <div className={cn(cls.UserCard, className)}>
      <div className={cls.UserCardPhotoWrapper}>
        <Image src={photo} alt={name} className={cls.UserCardPhoto} fill />
      </div>
      <Text variant="body_xl" weight="medium" className={cls.UserCardName}>
        {name}
      </Text>
      <Text variant="body_s" className={cls.UserCardRole}>
        {role}
      </Text>
      <div className={cls.UserCardActions}>{actions}</div>
    </div>
  );
};
