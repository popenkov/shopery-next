import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { ThunkExtraArg } from '@/app/providers/StoreProvider/StateSchema';
import { cartReducer } from '@/entities/Cart';
import { wishlistReducer } from '@/entities/Favorites';
import { orderReducer } from '@/entities/Order';
import { productsReducer } from '@/entities/Product';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  wishlist: wishlistReducer,
  orders: orderReducer,
  products: productsReducer,
  // [rtkApi.reducerPath]: rtkApi.reducer,
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
// todo replace on d.ts
// export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
