import { ReactNode } from 'react';
import { screen } from '@testing-library/react';

import { renderWithStore } from '@/shared/lib/tests';

import Page from './index';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-testid">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
  EffectFade: () => null,
  Autoplay: () => null,
}));

jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

jest.mock('swiper/css', () => ({
  ['swiper/css']: {},
}));

describe('Page', () => {
  it.skip('renders a heading', () => {
    renderWithStore(<Page />);

    const page = screen.getByTestId('mainPage');

    expect(page).toBeInTheDocument();
  });
});
