'use client';
import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, setupStore } from '@/app/lib/store';

type Props = {
  children: ReactNode;
};

export const StoreProvider: FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = setupStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
