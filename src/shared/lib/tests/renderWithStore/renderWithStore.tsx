import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from '@/app/providers';

export function renderWithStore(component: ReactNode) {
  return render(<StoreProvider>{component}</StoreProvider>);
}
