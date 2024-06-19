export {
  addToCart,
  cartReducer,
  changeNumItemsInCart,
  removeItemFromCart,
  closeAsideCartMenu,
  openAsideCartMenu,
} from './model/slices/cart-slice';
export { selectCartProducts } from './model/selectors/cart';
export { type TCartProduct } from './model/types/cart';
