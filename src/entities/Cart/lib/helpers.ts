import { CartSchema } from '../model/types/cart-schema';

export const changeItemsAmountInCart = (state: CartSchema, id: string, amount: number) => {
  const newState: CartSchema = JSON.parse(JSON.stringify(state));
  const findItemIndex = newState?.cart?.findIndex((item) => item.id === id);
  newState.cart[findItemIndex].amount = amount;
  newState.totalPrice = getTotalPrice(newState);
  newState.totalAmount = getTotalAmount(newState);
  return newState;
};

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
