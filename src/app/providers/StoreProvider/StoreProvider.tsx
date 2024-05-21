'use client';
import { AppStore, makeStore } from '@/shared/lib/store/store';
import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

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
