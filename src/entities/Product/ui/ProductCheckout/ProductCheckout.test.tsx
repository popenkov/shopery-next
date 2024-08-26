import React from 'react';
import { ProductCheckout } from './ProductCheckout';
import { TProduct } from '../../model';
import { renderWithStore } from '@/shared/lib/tests';
import { getFormattedPrice } from '@/shared/lib/utils';

const data: Omit<TProduct, 'rating'> = {
  id: '1',
  img: '/image.jpg',
  title: 'Product title',
  path: 'product-path',
  price: { USD: 14.99, EUR: 12.2 },
  amount: 2,
};

describe('ProductCheckout component', () => {
  it('renders image', () => {
    const { getByAltText } = renderWithStore(<ProductCheckout data={data} />);
    expect(getByAltText(data.title)).toBeInTheDocument();
  });

  it('renders title', () => {
    const { getByText } = renderWithStore(<ProductCheckout data={data} />);
    expect(getByText(data.title)).toBeInTheDocument();
  });

  it('renders amount', () => {
    const { getByText } = renderWithStore(<ProductCheckout data={data} />);
    expect(getByText(`${data.amount}`)).toBeInTheDocument();
  });

  it('renders formatted price', () => {
    const { getByText } = renderWithStore(<ProductCheckout data={data} />);
    expect(getByText(getFormattedPrice(data.price.USD, 'USD'))).toBeInTheDocument();
  });

  it('link has correct href', () => {
    const { getByRole } = renderWithStore(<ProductCheckout data={data} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', data.path);
  });
});
