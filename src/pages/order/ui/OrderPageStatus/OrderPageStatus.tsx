import { FC, memo, useEffect, useState } from 'react';
import cn from 'classnames';

import { CheckIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { STATUS_DATA } from './constants';
import cls from './OrderPageStatus.module.scss';

type Props = {
  status: 'Order Received' | 'Processing' | 'On the way' | 'Delivered';
  className?: string;
};

export const OrderPageStatus: FC<Props> = memo(({ status, className }) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    switch (status) {
      case 'Order Received':
        setCurrentPercent(15);
        break;
      case 'Processing':
        setCurrentPercent(55);
        break;
      case 'On the way':
        setCurrentPercent(75);
        break;
      case 'Delivered':
        setCurrentPercent(100);
        break;
      default:
        setCurrentPercent(0);
    }
  }, [status]);

  return (
    <div className={cn(cls.OrderPageStatus, className)}>
      <div className={cls.OrderPageStatusBar}>
        <div className={cls.OrderPageStatusBarActive} style={{ width: `${currentPercent}%` }}></div>
      </div>
      <div className={cls.OrderPageStatusContent}>
        {STATUS_DATA.map(({ id, bulletContent, text, percent }, index) => {
          return (
            <div
              className={cn(cls.OrderPageStatusItem, {
                [cls.active]: percent <= currentPercent,
              })}
              key={id}
            >
              <div className={cls.OrderPageBullet}>
                {index === 0 ? <CheckIcon className={cls.OrderPageBulletIcon} /> : bulletContent}
              </div>
              <Text variant="body_s" weight="medium" className={cls.OrderPageStatusText}>
                {text}
              </Text>
            </div>
          );
        })}
      </div>
      <Text variant="body_m" weight="medium" className={cls.OrderPageStatusMobile}>
        {status}
      </Text>
    </div>
  );
});

OrderPageStatus.displayName = 'OrderPageStatus';
