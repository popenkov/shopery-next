import { AxiosInstance } from 'axios';

import { CartSchema } from '@/entities/Cart/model/types/cart-schema';
import { WishlistSchema } from '@/entities/Favorites/model/types/wishlist-schema';
import { UserSchema } from '@/entities/User/model/types';

export interface StateSchema {
  cart: CartSchema;
  user: UserSchema;
  wishlist: WishlistSchema;
  orders: CartSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
