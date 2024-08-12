import { ReactNode } from 'react';
import { render } from '@testing-library/react';

// eslint-disable-next-line
import { StoreProvider } from '@/app/providers';

export function renderWithStore(component: ReactNode) {
  return render(<StoreProvider>{component}</StoreProvider>);
}
