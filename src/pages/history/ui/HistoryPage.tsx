'use client';
import { FC } from 'react';

import { UserOrders } from '@/entities/User/ui/UserOrders/UserOrders';
import { Pagination } from '@/shared/ui/Pagination';

import cls from './HistoryPage.module.scss';

export const HistoryPage: FC = () => {
  const handlePageChange = () => {
    console.log('handlePageChange');
  };

  return (
    <div className={cls.HistoryPage}>
      <UserOrders
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
