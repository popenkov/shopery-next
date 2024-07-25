import { render, screen } from '@testing-library/react';
import Page from './index';
import { ReactNode } from 'react';
import { renderWithStore } from '@/shared/lib/tests/renderWithStore/renderWithStore';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-testid">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));

jest.mock('swiper/modules', () => ({
  Navigation: (props: any) => null,
  Pagination: (props: any) => null,
  Scrollbar: (props: any) => null,
  A11y: (props: any) => null,
  EffectFade: (props: any) => null,
  Autoplay: (props: any) => null,
}));

jest.mock('nanoid', () => ({
  nanoid: jest.fn(),
}));

describe('Page', () => {
  it('renders a heading', () => {
    renderWithStore(<Page />);

    const page = screen.getByTestId('mainPage');

    expect(page).toBeInTheDocument();
  });
});
