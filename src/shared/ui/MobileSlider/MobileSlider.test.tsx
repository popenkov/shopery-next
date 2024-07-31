import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { MobileSlider } from './MobileSlider';
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-testid">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: ReactNode }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
describe('MobileSlider component', () => {
  it('renders correctly', () => {
    const renderSlides = (item: { id: number }) => <div>{item.id}</div>;
    const { container } = render(<MobileSlider data={data} render={renderSlides} />);
    expect(container).toMatchSnapshot();
  });

  it('renders swiper correctly', () => {
    const renderSlides = (item: { id: number }) => <div>{item.id}</div>;
    const { container } = render(<MobileSlider data={data} render={renderSlides} />);
    const swiper = container.querySelector('.swiper');
    expect(swiper).toBeInTheDocument();
  });

  it('renders swiper slides correctly', () => {
    const renderSlides = (item: { id: number }) => <div>{item.id}</div>;
    const { container } = render(<MobileSlider data={data} render={renderSlides} />);
    const swiperSlides = container.querySelectorAll('.swiper-slide');
    expect(swiperSlides).toHaveLength(3);
  });

  it('renders children correctly', () => {
    const renderSlides = (item: { id: number }) => <div>{item.id}</div>;
    const { getAllByText } = render(<MobileSlider data={data} render={renderSlides} />);
    const children = getAllByText(/1|2|3/);
    expect(children).toHaveLength(3);
  });

  it('does not render when data is empty', () => {
    const data: [] = [];
    const renderSlides = (item: { id: number }) => <div>{item.id}</div>;
    const { queryByText } = render(<MobileSlider data={data} render={renderSlides} />);
    expect(queryByText(/1|2|3/)).not.toBeInTheDocument();
  });
});
