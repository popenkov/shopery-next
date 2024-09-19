export {
  type TOrderAddress,
  type TOrderProduct,
  type TOrder,
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
