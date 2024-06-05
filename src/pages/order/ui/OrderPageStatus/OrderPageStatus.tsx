import { FC, memo } from 'react';

import cls from './OrderPageStatus.module.scss';
type Props = {
  status: 'Processing' | 'On the way' | 'Order Received' | 'Delivered';
};

export const OrderPageStatus: FC<Props> = memo(({ status }) => {
  return <div className={cls.OrderPageStatus}>{status}</div>;
});

OrderPageStatus.displayName = 'OrderPageStatus';
