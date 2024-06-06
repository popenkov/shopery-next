import { CartProduct } from './cart';

export type CartSchema = {
  isAsideCartOpen: boolean;
  cart: CartProduct[];
  totalAmount: number;
  totalPrice: number;
};
