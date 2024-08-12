import { TCurrencyVariant } from '@/entities/Currency';

import { type TCartProduct } from './cart';

export type CartSchema = {
  isAsideCartOpen: boolean;
  cart: TCartProduct[];
  totalAmount: number;
  totalPrice: Record<TCurrencyVariant, number>;
};
