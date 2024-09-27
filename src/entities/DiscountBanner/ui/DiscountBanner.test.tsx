import React from 'react';
import { render } from '@testing-library/react';

import { TDiscountBanner } from '../model';

import { DiscountBanner } from './DiscountBanner';

const discountBannerProps: TDiscountBanner = {
  image: '/images/discount-banner.jpg',
  title: 'Discount Banner',
  subtitle: 'Get 20% off on all products',
  path: '/discounts',
};

const nextJSImageSrc = '/_next/image?url=%2Fimages%2Fdiscount-banner.jpg&w=3840&q=75';

describe('DiscountBanner component', () => {
  it('renders correctly', () => {
    const { container } = render(<DiscountBanner {...discountBannerProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders image with correct src and alt', () => {
    const { getByAltText } = render(<DiscountBanner {...discountBannerProps} />);
    const image = getByAltText(discountBannerProps.title);
    expect(image).toHaveAttribute('src', nextJSImageSrc);
  });

  it('renders title and subtitle', () => {
    const { getByText } = render(<DiscountBanner {...discountBannerProps} />);
    expect(getByText(discountBannerProps.title)).toBeInTheDocument();
    expect(getByText(discountBannerProps.subtitle)).toBeInTheDocument();
  });

  it('renders button with correct text and icon', () => {
    const { getByTestId, getByRole } = render(<DiscountBanner {...discountBannerProps} />);
    const button = getByRole('link');
    const buttonIcon = getByTestId('test-icon');

    expect(button).toHaveTextContent('Shop Now');
    expect(buttonIcon).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    const { getByRole } = render(<DiscountBanner {...discountBannerProps} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', discountBannerProps.path);
  });
});
