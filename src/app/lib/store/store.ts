import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from 'entities/Cart';

const rootReducer = combineReducers({
  cart: cartReducer,
});

// makeStore function  returns a new store for each request
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
