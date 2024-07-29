export { selectOrdersData } from './model/selectors/order';
export { type TOrderAddress, type TOrderProduct, type TOrder } from './model';
export { getOrderById } from './services/getOrderById';
export {
  getOrderDetailedData,
  getOrderDetailedError,
  getOrderDetailedIsLoading,
} from './model/selectors/order';

export { addToOrders, orderReducer } from './model';
