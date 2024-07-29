export {
  addToCart,
  cartReducer,
  changeNumItemsInCart,
  removeItemFromCart,
  closeAsideCartMenu,
  openAsideCartMenu,
} from './model/slices/cart-slice';
export {
  selectCartData,
  selectCartProducts,
  selectMenuState,
  selectTotalPrice,
  selectTotalAmount,
  type TCartProduct,
  type CartSchema,
} from './model';

export { changeItemsAmountInCart } from './lib';
