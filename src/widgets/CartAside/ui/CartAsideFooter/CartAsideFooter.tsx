import { FC } from 'react';

import cls from './CartAsideFooter.module.scss';

type Props = {
  closeDrawer: () => void;
  price: number;
  amount: number;
};

export const CartAsideFooter: FC<Props> = ({ closeDrawer, price, amount }) => {
  return (
    <div className="cart-aside-widget__footer">
      <div className="cart-aside-widget__total">
        <span className="cart-aside-widget__total-amount">2 Product</span>
        <span className="cart-aside-widget__total-price">$26.00</span>
      </div>
      <div className="cart-aside-widget__buttons">
        <a className="button  button--fill button--large cart-aside-widget__button" href="#">
          <span>Checkout</span>
        </a>
        <a className="button  button--light button--large cart-aside-widget__button" href="#">
          <span>Go To Cart</span>
        </a>
      </div>
    </div>
  );
};
