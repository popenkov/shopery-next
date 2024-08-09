import { TCurrencyVariant } from '@/entities/Currency';

export type TWishlistProduct = {
  id: string;
  path: string;
  img: string;
  title: string;
  price: Record<TCurrencyVariant, number>;
  amount: number;
};
