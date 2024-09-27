import { OrderSchema } from './model/types/order-schema';
export {
  type TOrderAddress,
  type TOrderProduct,
  type TOrder,
  type OrderSchema,
  addToOrders,
  orderReducer,
  getOrderDetailedData,
  getOrderDetailedError,
  getOrderDetailedIsLoading,
  getUserOrdersData,
  selectOrdersData,
  getOrderById,
} from './model';

export { ORDERS_LOCALSTORAGE_KEY } from './lib';
