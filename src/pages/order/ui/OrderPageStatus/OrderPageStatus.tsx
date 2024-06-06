import { FC, memo, useEffect, useState } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import cls from './OrderPageStatus.module.scss';

type Props = {
  status: 'Order Received' | 'Processing' | 'On the way' | 'Delivered';
  className?: string;
};

export const OrderPageStatus: FC<Props> = memo(({ status, className }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    switch (status) {
      case 'Order Received':
        setPercent(15);
        break;
      case 'Processing':
        setPercent(45);
        break;
      case 'On the way':
        setPercent(75);
        break;
      case 'Delivered':
        setPercent(100);
        break;
      default:
        setPercent(0);
    }
  }, [status]);

  return (
    <div className={cn(cls.OrderPageStatus, className)}>
      <div className={cls.OrderPageStatusBar}>
        <div className={cls.OrderPageStatusBarActive} style={{ width: `${percent}%` }}></div>
      </div>
      <div className={cls.OrderPageStatusContent}>
        <div className={cls.OrderPageStatus}>
          <Text>Order received</Text>
        </div>
        <div className={cls.OrderPageStatus}>
          <Text>Processing</Text>
        </div>
        <div className={cls.OrderPageStatus}>
          <Text>On the way</Text>
        </div>
        <div className={cls.OrderPageStatus}>
          <Text>Delivered</Text>
        </div>
      </div>
    </div>
  );
});

OrderPageStatus.displayName = 'OrderPageStatus';
