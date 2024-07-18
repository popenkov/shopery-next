import { FC } from 'react';

import { UserAddress, UserCard, UserOrders } from '@/entities/User';
import { EditAddress, EditUser } from '@/features/User';

import cls from './DashboardPage.module.scss';

export const DashboardPage: FC = () => {
  return (
    <div className={cls.DashboardPage}>
      <UserCard actions={<EditUser />} className={cls.DashboardPageUser} />
      <UserAddress actions={<EditAddress />} className={cls.DashboardPageAddress} />
      <UserOrders isPreview className={cls.DashboardPageOrders} />
    </div>
  );
};
