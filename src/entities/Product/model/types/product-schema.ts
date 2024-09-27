import { TProductDetailed } from './product.types';

export type ProductSchema = {
  product_detailed: TProductDetailed | null;
  isLoading: boolean;
  error: string | null;
};
