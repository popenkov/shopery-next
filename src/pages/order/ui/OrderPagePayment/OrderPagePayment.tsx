import { FC } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import cls from './OrderPagePayment.module.scss';

type Props = {
  className?: string;
};

export const OrderPagePayment: FC<Props> = ({ className }) => {
  return (
    <div className={cn(cls.OrderPagePayment, className)}>
      <div className={cls.OrderPagePaymentHeader}>
        <div className={cls.OrderPagePaymentColumn}>
          <Text variant="body_s" className={cls.OrderPagePaymentColumnKey} as="span">
            Order ID:
          </Text>
          <span className={cls.OrderPagePaymentHeaderSeparator} />
          <Text variant="body_s" className={cls.OrderPagePaymentColumnValue} as="span">
            #4152
          </Text>
        </div>
        <div className={cls.OrderPagePaymentColumn}>
          <Text variant="body_s" className={cls.OrderPagePaymentKey} as="span">
            Payment Method:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.OrderPagePaymentValue} as="span">
            Paypal
          </Text>
        </div>
      </div>
      <div className={cls.OrderPagePaymentValues}>
        <div className={cls.OrderPagePaymentRow}>
          <Text variant="body_s" className={cls.OrderPagePaymentKey} as="span">
            Subtotal:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.OrderPagePaymentValue} as="span">
            $365.00
          </Text>
        </div>
        <div className={cls.OrderPagePaymentRow}>
          <Text variant="body_s" className={cls.OrderPagePaymentKey} as="span">
            Discount:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.OrderPagePaymentValue} as="span">
            20%
          </Text>
        </div>
        <div className={cls.OrderPagePaymentRow}>
          <Text variant="body_s" className={cls.OrderPagePaymentKey} as="span">
            Shipping:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.OrderPagePaymentValue} as="span">
            Free
          </Text>
        </div>

        <div className={cls.OrderPagePaymentRow}>
          <Text variant="body_l" className={cls.OrderPagePaymentKeyBold} as="span">
            Total:
          </Text>
          <Text
            variant="body_l"
            weight="semibold"
            className={cls.OrderPagePaymentTotalPrice}
            as="span"
          >
            $84.00
          </Text>
        </div>
      </div>
    </div>
  );
};
