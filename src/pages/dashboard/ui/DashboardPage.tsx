import { FC } from 'react';

import { UserAddress } from '@/entities/User/ui/UserAddress/UserAddress';
import { UserCard } from '@/entities/User/ui/UserCard/UserCard';
import { UserOrders } from '@/entities/User/ui/UserOrders/UserOrders';
import { EditAddress } from '@/features/User/edit-address';
import { EditUser } from '@/features/User/edit-user';

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
