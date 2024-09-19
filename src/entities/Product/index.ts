export {
  Product,
  ProductLarge,
  ProductPreview,
  ProductSmall,
  ProductWishlist,
  ProductCheckout,
  ProductCartPreview,
  ProductCart,
  ProductOrder,
} from './ui';

export {
  type TProduct,
  type TProductDetailed,
  getProductDetailedData,
  getProductDetailedError,
  getProductDetailedIsLoading,
  getProductById,
} from './model';

export { getProductDetails } from './mock';

export { productsReducer } from './model';
