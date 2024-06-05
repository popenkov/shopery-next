'use client';

import { ChangeEvent, FC, useCallback, useState } from 'react';
import cn from 'classnames';

import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import cls from './ApplyCoupon.module.scss';

type Props = {
  className?: string;
};

export const ApplyCoupon: FC<Props> = ({ className }) => {
  const [couponValue, setCouponValue] = useState('');

  const getCouponValue = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setCouponValue(value);
  };

  const handleApplyButtonClick = useCallback(() => {
    // applyCoupon(couponValue);
  }, [couponValue]);
  return (
    <div className={cn(cls.ApplyCoupon, className)}>
      <Text variant="body_xxl" className={cls.ApplyCouponTitle} weight="medium" as="h2">
        Coupon Code
      </Text>
      <div className={cls.ApplyCouponInputContainer}>
        <Input
          type="email"
          placeholder="Enter code"
          value={couponValue}
          onChange={getCouponValue}
          className={cls.ApplyCouponInput}
        />

        <Button
          size="large"
          className={cls.ApplyCouponButton}
          theme="monochrome-light"
          onClick={handleApplyButtonClick}
        >
          Apply Coupon
        </Button>
      </div>
    </div>
  );
};
