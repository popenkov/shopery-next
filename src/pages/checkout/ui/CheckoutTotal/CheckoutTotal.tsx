'use client';

import { FC, useState } from 'react';
import cn from 'classnames';

import { selectCartProducts, selectTotalPrice } from '@/entities/Cart';
import { selectCurrentCurrency } from '@/entities/Currency';
import { ProductCheckout } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/Buttons';
import { Radio } from '@/shared/ui/Radio';
import { Text } from '@/shared/ui/Text';

import cls from './CheckoutTotal.module.scss';

type Props = {
  className: string;
};

export const CheckoutTotal: FC<Props> = ({ className }) => {
  const currentCurrency = useAppSelector(selectCurrentCurrency);
  const cartItems = useAppSelector(selectCartProducts);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [activePaymentMethod, setActivePaymentMethod] = useState('cash');

  const handlePaymentMethodChoose = (method: string) => {
    setActivePaymentMethod(method);
  };

  return (
    <div className={cn(cls.CheckoutTotal, className)}>
      <Text variant="body_xl" weight="medium" as="h3">
        Order Summery
      </Text>

      <div className={cls.CheckoutTotalItems}>
        {cartItems.map((item) => {
          return <ProductCheckout data={item} key={item.id} />;
        })}
      </div>
      <div className={cls.CheckoutTotalValues}>
        <div className={cls.CheckoutTotalRow}>
          <Text variant="body_s" className={cls.CheckoutTotalKey}>
            Subtotal:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CheckoutTotalValue}>
            {getFormattedPrice(totalPrice, currentCurrency)}
          </Text>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <Text variant="body_s" className={cls.CheckoutTotalKey}>
            Shipping:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CheckoutTotalValue}>
            {getFormattedPrice(totalPrice, currentCurrency)
              ? getFormattedPrice(totalPrice, currentCurrency)
              : 'Free'}
          </Text>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <Text variant="body_s" className={cls.CheckoutTotalKey}>
            Total:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CheckoutTotalValue}>
            {getFormattedPrice(totalPrice, currentCurrency)}
          </Text>
        </div>
      </div>
      <div className={cls.CheckoutPaymentMethods}>
        <Text variant="body_xl" weight="medium" className={cls.CheckoutPaymentMethodsTitle}>
          Payment Method
        </Text>
        <div className={cls.CheckoutPaymentMethodsItems}>
          <Radio
            value={'cash'}
            name="payment-method"
            text="Cash on Delivery"
            onChange={handlePaymentMethodChoose}
            className="filter-accordion__content-item"
            checked={activePaymentMethod === 'cash'}
          />
          <Radio
            value={'paypal'}
            name="payment-method"
            text="Paypal"
            onChange={handlePaymentMethodChoose}
            className="filter-accordion__content-item"
            checked={activePaymentMethod === 'paypal'}
          />
          <Radio
            value={'amazon-pay'}
            name="payment-method"
            text="Amazon Pay"
            onChange={handlePaymentMethodChoose}
            className="filter-accordion__content-item"
            checked={activePaymentMethod === 'amazon-pay'}
          />
        </div>
      </div>

      <Button size="large" className={cls.filterButtonDesktop} form="checkoutForm" type="submit">
        Place Order
      </Button>
    </div>
  );
};
