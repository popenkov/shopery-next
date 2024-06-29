'use client';
import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@/app/lib/store/store';
import { StateSchema, ThunkExtraArg } from './StateSchema';

type Props = {
  children: ReactNode;
};

export const StoreProvider: FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
