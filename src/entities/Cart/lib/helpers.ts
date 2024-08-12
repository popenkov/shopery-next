import { CartSchema } from '../model/types/cart-schema';

export const changeItemsAmountInCart = (state: CartSchema, id: string, amount: number) => {
  const newState: CartSchema = JSON.parse(JSON.stringify(state));
  const findItemIndex = newState?.cart?.findIndex((item) => item.id === id);
  newState.cart[findItemIndex].amount = amount;
  newState.totalPrice = getTotalPrice(newState);
  newState.totalAmount = getTotalAmount(newState);
  return newState;
};

// надо вернуть объект
export const getTotalPrice = (state: CartSchema) => {
  return state.cart.reduce(
    (acc, current) => {
      acc.USD += current.price.USD * current.amount;
      acc.EUR += current.price.EUR * current.amount;
      return acc;
    },
    { USD: 0, EUR: 0 },
  );
};

export const getTotalAmount = (state: CartSchema) => {
  return state.cart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
};
