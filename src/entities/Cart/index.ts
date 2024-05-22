export { getCartData } from './api';

export {
  addToCart,
  cartReducer,
  changeNumItemsInCart,
  removeItemFromCart,
  closeAsideCartMenu,
  openAsideCartMenu,
} from './model/slices/cart-slice';
export { selectCart } from './model/selectors/cart';
export { type CartProduct } from './model/types/cart';
