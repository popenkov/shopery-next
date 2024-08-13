import { TProductDetailed } from './product.types';

export type ProductSchema = {
  product_detailed?: TProductDetailed;
  isLoading?: boolean;
  error?: string;
};
