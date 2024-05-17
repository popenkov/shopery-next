'use client';

import { FC } from 'react';
import cn from 'classnames';

import { ProductCheckout } from '@/entities/Product';
import { getFormattedPrice } from '@/shared/lib/utils';
import { getCartData } from 'entities/Cart';
import { Button } from 'shared/ui/Buttons';
import { Radio } from 'shared/ui/Radio';
import { Text } from 'shared/ui/Text';

import cls from './CheckoutTotal.module.scss';

type Props = {
  className: string;
};

export const CheckoutTotal: FC<Props> = ({ className }) => {
  const { items, price, shipping, totalPrice } = getCartData();

  // todo
  const handlePaymentMethodChoose = () => {
    console.log('handlePaymentMethodChoose');
  };

  return (
    <div className={cn(cls.CheckoutTotal, className)}>
      <Text variant="body_xl" weight="medium" as="h3">
        Order Summery
      </Text>

      <div className={cls.CheckoutTotalItems}>
        {items.map((item) => {
          return <ProductCheckout data={item} key={item.id} />;
        })}
      </div>
      <div className={cls.CheckoutTotalValues}>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Subtotal:</span>
          <span className={cls.CheckoutTotalValue}>{getFormattedPrice(price)}</span>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Shipping:</span>
          <span className={cls.CheckoutTotalValue}>
            {shipping ? getFormattedPrice(shipping) : 'Free'}
          </span>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Total:</span>
          <span className={cls.CheckoutTotalValue}>{getFormattedPrice(totalPrice)}</span>
        </div>
      </div>
      <div className={cls.CheckoutPaymentMethods}>
        {/* todo привязать к форме */}
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
          />
          <Radio
            value={'cash'}
            name="payment-method"
            text="Paypal"
            onChange={handlePaymentMethodChoose}
            className="filter-accordion__content-item"
          />
          <Radio
            value={'amazon-pay'}
            name="payment-method"
            text="Amazon Pay"
            onChange={handlePaymentMethodChoose}
            className="filter-accordion__content-item"
          />
        </div>
      </div>

      <Button size="large" className={cls.filterButtonDesktop} form="checkoutForm" type="submit">
        Place Order
      </Button>
    </div>
  );
};
