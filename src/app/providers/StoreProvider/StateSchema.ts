import { AxiosInstance } from 'axios';

import { CartSchema } from '@/entities/Cart';
import { WishlistSchema } from '@/entities/Favorites';
import { UserSchema } from '@/entities/User';
import { OrderSchema } from '@/entities/Order';
import { StatusMessageSchema } from '@/entities/StatusMessage';

export interface StateSchema {
  cart: CartSchema;
  user: UserSchema;
  wishlist: WishlistSchema;
  order: OrderSchema;
  statusMessage: StatusMessageSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
