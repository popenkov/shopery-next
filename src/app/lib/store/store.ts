import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ThunkExtraArg } from '@/app/providers/StoreProvider/StateSchema';
import { wishlistReducer } from '@/entities/Favorites';
import { orderReducer } from '@/entities/Order/model/slices/order-slice';
import { userReducer } from '@/entities/User/slice/user-slice';
import { $api } from '@/shared/api/api';
import { cartReducer } from 'entities/Cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  wishlist: wishlistReducer,
  orders: orderReducer,
});

const extraArg: ThunkExtraArg = {
  api: $api,
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
