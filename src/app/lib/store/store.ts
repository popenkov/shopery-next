import { ThunkExtraArg } from '@/app/providers/StoreProvider/StateSchema';
import { favoritesReducer } from '@/entities/Favorites';
import { userReducer } from '@/entities/User/slice/user-slice';
import { $api } from '@/shared/api/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from 'entities/Cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  favorites: favoritesReducer,
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
