import { CartSchema } from '../types/cart-schema';

export const getTotalPrice = (state: CartSchema) => {
  return state.cart.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
};

export const getTotalAmount = (state: CartSchema) => {
  return state.cart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
};
