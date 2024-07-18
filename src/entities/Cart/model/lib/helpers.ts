import { CartSchema } from '../types/cart-schema';

import { getTotalAmount, getTotalPrice } from './constants';

export const changeItemsAmountInCart = (state: CartSchema, id: string, amount: number) => {
  const newState: CartSchema = JSON.parse(JSON.stringify(state));
  const findItemIndex = newState?.cart?.findIndex((item) => item.id === id);
  newState.cart[findItemIndex].amount = amount;
  newState.totalPrice = getTotalPrice(newState);
  newState.totalAmount = getTotalAmount(newState);
  return newState;
};
