'use client';

import { FC } from 'react';
import cn from 'classnames';

import { useAppSelector } from '@/app/lib/store/hooks';
import { selectCart } from '@/entities/Cart';
import { selectTotalPrice } from '@/entities/Cart/model/selectors/cart';
import { ProductCheckout } from '@/entities/Product';
import { getFormattedPrice } from '@/shared/lib/utils';
import { Button } from 'shared/ui/Buttons';
import { Radio } from 'shared/ui/Radio';
import { Text } from 'shared/ui/Text';

import cls from './CheckoutTotal.module.scss';

type Props = {
  className: string;
};

export const CheckoutTotal: FC<Props> = ({ className }) => {
  const cartItems = useAppSelector(selectCart);
  const totalPrice = useAppSelector(selectTotalPrice);

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
            {getFormattedPrice(totalPrice)}
          </Text>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <Text variant="body_s" className={cls.CheckoutTotalKey}>
            Shipping:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CheckoutTotalValue}>
            {/* todo */}
            {getFormattedPrice(totalPrice) ? getFormattedPrice(totalPrice) : 'Free'}
          </Text>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <Text variant="body_s" className={cls.CheckoutTotalKey}>
            Total:
          </Text>
          <Text variant="body_s" weight="medium" className={cls.CheckoutTotalValue}>
            {getFormattedPrice(totalPrice)}
          </Text>
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
