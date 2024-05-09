'use client';

import React, { FC } from 'react';

import cls from './CheckoutTotal.module.scss';
import { Text } from '@/shared/ui/Text';
import { Radio } from '@/shared/ui/Radio';
import { Button } from '@/shared/ui/Buttons';
import { getCartData } from 'entities/Cart';

export const CheckoutTotal: FC = () => {
  const { items } = getCartData();

  const handlePaymentMethodChoose = () => {
    console.log('handlePaymentMethodChoose');
  };

  return (
    <div className={cls.CheckoutTotal}>
      <Text variant="body_xxl" weight="medium" as="h3">
        Cart Total
      </Text>

      <div className="checkout-total__items">
        {/* todo items */}
        <div className="checkout-product cart-page__item">
          <div className="checkout-product__info">
            <img className="checkout-product__photo" src="img/product-green-capsicum.jpg" alt="" />
            <h3 className="checkout-product__title">
              Green Capsicum<span className="checkout-product__quantity">x</span>
              <span className="checkout-product__quantity">5</span>
            </h3>
          </div>
          <div className="checkout-product__price">
            <span className="checkout-product__price-new">$14.99</span>
          </div>
        </div>
        <div className="checkout-product cart-page__item">
          <div className="checkout-product__info">
            <img
              className="checkout-product__photo"
              src="img/product-small--red-capsicum.jpg"
              alt=""
            />
            <h3 className="checkout-product__title">
              Red Capsicum<span className="checkout-product__quantity">x</span>
              <span className="checkout-product__quantity">5</span>
            </h3>
          </div>
          <div className="checkout-product__price">
            <span className="checkout-product__price-new">$14.99</span>
          </div>
        </div>
      </div>
      <div className={cls.CheckoutTotalValues}>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Subtotal:</span>
          <span className={cls.CheckoutTotalValue}>$84.00</span>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Shipping:</span>
          <span className={cls.CheckoutTotalValue}>Free</span>
        </div>
        <div className={cls.CheckoutTotalRow}>
          <span className={cls.CheckoutTotalKey}>Total:</span>
          <span className={cls.CheckoutTotalValue}>$84.00</span>
        </div>
      </div>
      <div className={cls.CheckoutPaymentMethods}>
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

      <Button size="large" className={cls.filterButtonDesktop} form="checkoutForm" type="submit">
        Proceed to checkout
      </Button>
    </div>
  );
};
