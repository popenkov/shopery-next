'use client';
import { FC } from 'react';

import { UserOrders } from '@/entities/User';

import cls from './HistoryPage.module.scss';

export const HistoryPage: FC = () => {
  return (
    <div className={cls.HistoryPage}>
      <UserOrders className={cls.HistoryPageOrders} />
    </div>
  );
};
