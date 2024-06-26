import { FC } from 'react';

import { getUserOrders } from '@/entities/User/api/getUserOrders';
import { UserAddress } from '@/entities/User/ui/UserAddress/UserAddress';
import { UserCard } from '@/entities/User/ui/UserCard/UserCard';
import { ORDERS_PREVIEW_AMOUNT } from '@/entities/User/ui/UserOrders/constants';
import { UserOrders } from '@/entities/User/ui/UserOrders/UserOrders';
import { EditAddress } from '@/features/User/edit-address';
import { EditUser } from '@/features/User/edit-user';

import cls from './DashboardPage.module.scss';

export const DashboardPage: FC = () => {
  const orders = getUserOrders().slice(0, ORDERS_PREVIEW_AMOUNT);
  return (
    <div className={cls.DashboardPage}>
      <UserCard actions={<EditUser />} className={cls.DashboardPageUser} />
      <UserAddress actions={<EditAddress />} className={cls.DashboardPageAddress} />
      <UserOrders data={orders} isPreview className={cls.DashboardPageOrders} />
    </div>
  );
};
