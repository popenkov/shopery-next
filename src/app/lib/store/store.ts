import { userReducer } from '@/entities/User/slice/user-slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from 'entities/Cart';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
