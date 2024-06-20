import { AxiosInstance } from 'axios';
import { CartSchema } from '@/entities/Cart/model/types/cart-schema';
import { UserSchema } from '@/entities/User/model/types';

export interface StateSchema {
  cart: CartSchema;
  user: UserSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
