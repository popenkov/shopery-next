import { TOrder } from './order';

export type OrderSchema = {
  orders: TOrder[];
  order?: TOrder;
  isLoading?: boolean;
  error?: string;
};
