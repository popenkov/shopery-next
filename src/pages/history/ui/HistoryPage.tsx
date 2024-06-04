'use client';
import { FC } from 'react';

import { getUserOrders } from '@/entities/User/api/getUserOrders';
import { UserOrders } from '@/entities/User/ui/UserOrders/UserOrders';
import { Pagination } from '@/shared/ui/Pagination';

import cls from './HistoryPage.module.scss';
import { Subscription } from '@/features/Subscription';

export const HistoryPage: FC = () => {
  const orders = getUserOrders();

  const handlePageChange = () => {
    console.log('handlePageChange');
  };

  return (
    <div className={cls.HistoryPage}>
      <UserOrders
        data={orders}
        className={cls.HistoryPageOrders}
        actions={
          <Pagination
            onPageChange={handlePageChange}
            totalCount={3}
            currentPage={1}
            pageSize={10}
            className={cls.HistoryPagePagination}
          />
        }
      />
    </div>
  );
};
