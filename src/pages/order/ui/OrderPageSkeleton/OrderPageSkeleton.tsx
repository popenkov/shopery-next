import { FC } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './OrderPageSkeleton.module.scss';

export const OrderPageSkeleton: FC = () => {
  return (
    <div className={cls.OrderPageSkeleton}>
      <Skeleton className={'test'} height={30} border="8px" />
      <div className={cls.OrderPageSkeletonInfo}>
        <Skeleton className={cls.OrderPageSkeletonAddresses} height={280} border="8px" />
        <Skeleton className={cls.OrderPageSkeletonPayment} height={280} border="8px" />
        <Skeleton className={cls.OrderPageSkeletonStatus} height={70} border="8px" />
      </div>
      <Skeleton className={cls.OrderPageSkeletonItems} height={290} border="8px" />
    </div>
  );
};
